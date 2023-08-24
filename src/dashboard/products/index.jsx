import { useState, useEffect } from "react";

import Button from "../../components/button/button";
import Input, { Textarea } from "../../components/input/input";
import Header from "../header/header";
import styles from "./product.module.css";

import Edit from "../../assets/icon/edit.svg";
import Delete from "../../assets/icon/delete.svg";
import TopInfo from "../topInfo/topInfo";
import ModalOverlay from "../modal/modalOverlay";

import vendorDashboardApi from "../../api/vendorDashboardApi";
import MessageComponent from "../../components/message";
import { MessageContext } from "../../context/message";
import { Attachment } from "../../components/input/input";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ProductBody = () => {
	const [openModal, setOpenModal] = useState(false);
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [image, setImage] = useState(null);
	const [productId, setProductId] = useState(null);  // Set to productId if updating product
	const [products, setProducts] = useState([]);
	const [signedImagePaths, setSignedImagePaths] = useState([]);

	const { setInfoMessage, setErrorMessage } = useContext(MessageContext);

	const dashboardApi = new vendorDashboardApi();

	async function loadProducts() {
		const newProducts = await dashboardApi.getProducts();
		if (newProducts)
			setProducts(newProducts);

		// Get signed image paths
		const newSignedImagePaths = await Promise.all(newProducts.map(product => dashboardApi.getSignedImagePath(product.id)));
		if (newSignedImagePaths)
			setSignedImagePaths(newSignedImagePaths);
	}

	useEffect(() => {
		loadProducts();
	  }, []);

	function showModal(updateProductId) {
		if (updateProductId) {
			const product = products.find((product) => product.id === updateProductId);

			setProductId(updateProductId);
			setName(product.name);
			setDescription(product.description);
			setPrice(product.price);
			setStock(product.stock);
			let imageName = null;
			if (product.s3Key)
				imageName = product.s3Key.split("_").pop();
			setImage(imageName);

			setOpenModal("update");
		} else {
			setProductId(null);
			setName("");
			setDescription("");
			setPrice("");
			setStock("");
			setImage(null);

			setOpenModal("add");
		}
	}

	const addOrUpdateProduct = async () => {
		const resp1 = await dashboardApi.upsertProduct(productId, name, description, price, stock, image);
		const imageProductId = resp1.id;

		let resp2 = null;
		if (image) {
			console.log("Uploading image for product id: " + imageProductId);
            resp2 = await dashboardApi.uploadProductImage(imageProductId, image);
        } else {
			resp2 = await dashboardApi.deleteProductImage(imageProductId, image);
		}

		if (resp1 && resp2) {
			if (productId !== null)
				setInfoMessage("Product updated successfully!");
			else
				setInfoMessage("Product added successfully!");
		} else {
			if (productId !== null)
				setErrorMessage("Could not update the product!");
			else
				setErrorMessage("Could not add a new product!");
		}

		loadProducts();
		setOpenModal(false);
	};

	const deleteProduct = async (productId) => {
		const resp = await dashboardApi.deleteProduct(productId);
		if (resp) {
			setInfoMessage("Product deleted successfully!");
		} else {
			setErrorMessage("Could not delete the product!");
		}
		loadProducts();

	};

  return (
		<>
			<div className={`dashboard-body`}>
				<Header title="Products" />

				<MessageComponent />

				<TopInfo
					title="Total"
					description={
						<>
							You manage <span>{products.length}</span> products!
						</>
					}
				>
					<Button
						color="white"
						onClick={() => showModal(null) }
					>
						Create New product
					</Button>
				</TopInfo>

				<div className={styles.row}>
					{products.map((product, index) => (
						<Card
							product={product}
							imageSource={signedImagePaths[index]}
							onClickEdit={() =>
								showModal(product.id)
							}
							onClickDelete={() => deleteProduct(product.id)}
						/>
					))}
				</div>
			</div>

			<div className={styles.modalWrapper}>
				{openModal !== false && (
					<ModalOverlay>
						<div className={styles.modal}>
							<h4>
								{openModal === "add" ? "Create" : "Update"}{" "}
								Product
							</h4>

							<div className={styles.modalInputs}>
								<Attachment
									label="Product image"
									onUpload={(file) => setImage(file)}
									onDelete={() => setImage(null)}
									value={image}
									dashboard
								/>
								<Input
									dashboard
									label="Name"
									placeholder="Enter name"
									value={name}
									setState={setName}
								/>
								<Textarea
									dashboard
									label="Description"
									placeholder="Enter description"
									value={description}
									setState={setDescription}
									rows={2}
								/>
								<div className={styles.inputRow}>
									<Input
										dashboard
										label="Price"
										placeholder="Enter price"
										value={price}
										setState={setPrice}
										number
									/>
									<Input
										dashboard
										label="Stock"
										placeholder="Enter stock"
										value={stock}
										setState={setStock}
										number
									/>
								</div>
							</div>
							<div className={styles.modalButtons}>
								<div
									className={styles.button}
									onClick={() => {
										setOpenModal(false);
										setProductId(null);
									}}
								>
									Cancel
								</div>
								<Button
									onClick={addOrUpdateProduct}
									color="white"
								>
									{openModal === "add" ? "Add" : "Update"}{" "}
									Product
								</Button>
							</div>
						</div>
					</ModalOverlay>
				)}
			</div>
		</>
  );
};

export default ProductBody;

const Card = ({ product, imageSource, onClickEdit, onClickDelete }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.imageWrapper}>
        <div className={styles.icons}>
          <img src={Edit} alt="Edit product" onClick={onClickEdit} />
          <img src={Delete} alt="Delete product" onClick={onClickDelete} />
        </div>
        {imageSource &&
			<img src={imageSource} alt={product.title} className={styles.image} />
		}
      </div>

      <div className={styles.body}>
        <h4>{product.title}</h4>

        <p className={styles.description}>{product.description}</p>

        <p className={styles.price}>{product.price} USD</p>

        <div className={styles.buttonMain}>
			<Link to={`/product/${product.link}`}>Watch</Link>
		</div>
      </div>
    </div>
  );
};
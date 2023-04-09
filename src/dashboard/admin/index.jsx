import Button from "../../components/button/button";
import Input, { Options } from "../../components/input/input";
import Card from "../card/card";
import { transformNumber } from "../func/transformNumber";
import Graph from "../graph/graph";
import Header from "../header/header";
import TopInfo from "../topInfo/topInfo";
import styles from "./admin.module.css";
import { options } from "./../graph/graph";
import { useState } from "react";
import ModalOverlay from "../modal/modalOverlay";

const cardsContent = [
  {
    title: "Total Incomes",
    amount: 467867,
    percentage: 13,
  },
  {
    title: "Total Clicks",
    amount: 325800,
    percentage: 11.52,
  },
  {
    title: "Total Registration",
    amount: 1185600,
    percentage: 105.55,
  },
];

const barContent = [
  {
    role: "Vendor",
    percentage: 31,
    amount: 311,
  },
  {
    role: "Affiliate",
    percentage: 20,
    amount: 100,
  },
  {
    role: "Diamond",
    percentage: 13,
    amount: 21,
  },
  {
    role: "Gold",
    percentage: 36,
    amount: 550,
  },
];

const tableData = [
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    true,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    true,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    true,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    true,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    false,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    false,
    "159200",
    "Jan 6, 2023",
  ],
  [
    "John Smith",
    "Vendor",
    "ruth.sharp@gmail.com",
    false,
    "159200",
    "Jan 6, 2023",
  ],
];

const AdminBody = () => {
  const [value, setValue] = useState("Filter");

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.body}>
        <Header title="Admin Dashboard" />
        <TopInfo
          title="Overview information"
          description="Total info data for all users & user management."
        >
          <Button color="white" onClick={() => setOpenModal(true)}>
            Add User
          </Button>
        </TopInfo>
        <div className={styles.rows}>
          {cardsContent.map((item) => (
            <Card
              title={item.title}
              amount={item.amount}
              percentage={item.percentage}
            />
          ))}

          <Graph />

          <div className={`${styles.registration} card`}>
            <h3>Registrations Roles</h3>

            <div
              style={{ display: "flex", width: "100%" }}
              className={styles.bar}
            >
              {barContent.map((item) => (
                <div
                  style={{ flex: 1, flexBasis: `${item.percentage}%` }}
                  className={styles.barItem}
                ></div>
              ))}
            </div>

            <div className={styles.percentageLabel}>
              <p>0%</p>
              <p>100%</p>
            </div>

            <div className={styles.totalBox}>
              <div className={styles.totalBoxTop}>
                <p>Total</p>
                <p className={styles.label}>
                  {barContent.reduce((total, item) => {
                    return total + item.amount;
                  }, 0)}
                </p>
              </div>

              <div className={styles.infoBox}>
                <div className={styles.left}>
                  {barContent.map((item) => (
                    <div className={styles.leftLine}>
                      <div className={styles.lineBox}></div>
                      <div className={styles.name}>{item.role}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.right}>
                  <div className={styles.amount}>
                    {barContent.map((item) => (
                      <p>{item.amount}</p>
                    ))}
                  </div>
                  <div className={styles.percentage}>
                    {barContent.map((item) => (
                      <p>{item.percentage}%</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.button}>
                <Button color="white">KYC Requests</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.top}>
            <h4>User Management</h4>

            <div className={styles.inputs}>
              <Input placeholder="Search" dashboard />

              <Options
                value={value}
                options={["Roles", "Status", "Incomes"]}
                dashboard
                setValue={setValue}
              />
            </div>
          </div>
          <Table data={tableData} />
        </div>
      </div>

      <div className={styles.modalWrapper}>
        {openModal && (
          <ModalOverlay>
            <div className={styles.modal}>
              <h4>Create User</h4>

              <div className={styles.modalInputs}>
                <Input dashboard label="Email" placeholder={"Enter email"} />
                <Input
                  dashboard
                  label="Password"
                  placeholder={"Enter password"}
                  secure
                />

                <Options
                  label="Roles"
                  value={value}
                  options={[
                    "Vendor",
                    "Affiliate",
                    "Diamond Partner",
                    "Gold Partner",
                  ]}
                  dashboard
                  setValue={setValue}
                />
              </div>
              <div className={styles.modalButtons}>
                <div
                  className={styles.button}
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </div>
                <Button color="white">Add User</Button>
              </div>
            </div>
          </ModalOverlay>
        )}
      </div>
    </>
  );
};

export default AdminBody;

const Table = ({ data }) => {
  return (
    <div className={`${styles.tableCard} card`}>
      <div className={`${styles.table} dashboard-table`}>
        <div className={styles.tableHead}>
          <ul>
            <li>Name</li>
            <li>Roles</li>
            <li>Email</li>
            <li>Status</li>
            <li>Incomes</li>
            <li>Join on</li>
            <li>Action</li>
          </ul>
        </div>
        <div className={styles.tableBody}>
          {data.map((items, lineIndex) => (
            <ul key={lineIndex}>
              {items.map((item, itemIndex) => (
                <>
                  {itemIndex === 3 ? (
                    <li
                      style={{ opacity: data[lineIndex][3] ? 1 : 0.2 }}
                      className={`${styles.box} ${
                        item ? styles.approved : styles.pending
                      }`}
                    >
                      {item ? "Enabled" : "Disabled"}
                    </li>
                  ) : (
                    <li style={{ opacity: data[lineIndex][3] ? 1 : 0.2 }}>
                      {itemIndex === 4 ? `$${transformNumber(item)}` : item}
                    </li>
                  )}
                </>
              ))}

              <li>{data[lineIndex][3] ? "Disable" : "Enable"}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

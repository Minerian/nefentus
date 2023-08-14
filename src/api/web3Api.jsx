import { ethers } from "ethers";
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import IUniswapV3FactoryABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json'
import ERC20_ABI from "../assets/abi/ERC20_ABI.json"

const FACTORY_CONTRACT_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const USDC_CONTRACT_ADDRESS = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const POOL_FEES = "500";
const THIRDWEB_CLIENT_ID = "639eea2ebcabed7eab90b56aceeed08b";

const thirdwebProvider = new ethers.providers.JsonRpcProvider("https://ethereum.rpc.thirdweb.com/" + THIRDWEB_CLIENT_ID);

export class uniswapApi {
	WETH_CONTRACT_ADDRESS = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

	constructor(type) {
		if (type === "metamask") {
			this.provider = new ethers.providers.Web3Provider(window.ethereum);
			
		} else {
			this.provider = thirdwebProvider;
		}

		this.FactoryContract = new ethers.Contract(FACTORY_CONTRACT_ADDRESS, IUniswapV3FactoryABI.abi, this.provider);
	}

	/**
	 * Determine the price of the two tokens in the pool
	 * See https://blog.uniswap.org/uniswap-v3-math-primer
	 * @param {*} sqrtPriceX96 The sqrtPriceX96 of the pool
	 * @param {*} Decimal0 The decimal of token0
	 * @param {*} Decimal1 The decimal of token1
	 * @returns The price of one token0 in token1
	 */
	calculatePoolPrice(sqrtPriceX96, Decimal0, Decimal1){
    	const buyOneOfToken0 = ((sqrtPriceX96 / 2**96)**2) / (10**(Decimal0 - Decimal1));
		const buyOneOfToken1 = 1 / buyOneOfToken0;

		/*
		console.log("price of token0 in value of token1 : " + buyOneOfToken0.toString());
		console.log("price of token1 in value of token0 : " + buyOneOfToken1.toString());
		console.log("");
		// Convert to wei
		const buyOneOfToken0Wei =(Math.floor(buyOneOfToken0 * (10**Decimal1))).toLocaleString('fullwide', {useGrouping:false});
		const buyOneOfToken1Wei =(Math.floor(buyOneOfToken1 * (10**Decimal0))).toLocaleString('fullwide', {useGrouping:false});
		console.log("price of token0 in value of token1 in lowest decimal : " + buyOneOfToken0Wei);
		console.log("price of token1 in value of token1 in lowest decimal : " + buyOneOfToken1Wei);
		console.log("");
		*/
		return buyOneOfToken1;
	}

	/**
	 * Get the number of decimals of a token
	 * @param {*} tokenAddress The token address
	 * @returns Number of decimals
	 */
	async getDecimals(tokenAddress) {
		const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, this.provider);
		const digits = await tokenContract.decimals();
		return digits;
	}

	/**
	 * Get the price of a token in USDC
	 * @param {*} tokenAddress The token address
	 * @param {*} decimalsToken0 The decimals of token0
	 * @param {*} decimalsToken1 The decimals of token1
	 * @returns The price of the token in USDC
	 */
	async getUSDCPriceForToken(tokenAddress, decimalsToken0=null, decimalsToken1=null) {
		if (tokenAddress === USDC_CONTRACT_ADDRESS) {
			return 1;
		}

		const poolAddress = await this.FactoryContract.getPool(tokenAddress, USDC_CONTRACT_ADDRESS, POOL_FEES);
		const poolContract =  new ethers.Contract(poolAddress, IUniswapV3PoolABI.abi, this.provider);

		const slot0 = await poolContract.slot0();
		const sqrtPriceX96 = slot0.sqrtPriceX96.toString();

		if (decimalsToken0 === null || decimalsToken1 === null) {
			[decimalsToken0, decimalsToken1] = await Promise.all([
				this.getDecimals(tokenAddress),
				this.getDecimals(USDC_CONTRACT_ADDRESS)
			]);
		}

		const price = this.calculatePoolPrice(sqrtPriceX96, decimalsToken0, decimalsToken1);
		return price;
	}
}

export class web3Api {
	constructor(type) {
		if (type === "metamask") {
			this.provider = new ethers.providers.Web3Provider(window.ethereum);
			
		} else {
			this.provider = thirdwebProvider;
		}
	}

	async getBalanceNative(walletAddress) {
		const balance = await this.provider.getBalance(walletAddress);
		const balanceInEth = ethers.utils.formatEther(balance);
		return balanceInEth;
	}

	async getBalanceToken(tokenAddress, walletAddress) {
		if (!tokenAddress)
			return await this.getBalanceNative(walletAddress);

		const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, this.provider);
		const [digits, balanceWei] = await Promise.all([
			tokenContract.decimals(),
			tokenContract.balanceOf(walletAddress)
		]);
		
		const balance = ethers.utils.formatUnits(balanceWei, digits);
		return balance;
	}

	async send(tokenAddress, amount, toAddress) {
		if (!tokenAddress)
			return await this.sendNative(amount, toAddress);
		else
			return await this.sendToken(tokenAddress, amount, toAddress);
	}

	async sendNative(amount, toAddress) {
		const signer = this.provider.getSigner();
		const transaction = {
			to: toAddress,
			value: ethers.utils.parseEther(amount)
		};
		const txRequest = await signer.sendTransaction(transaction);
		const txReceipt = await txRequest.wait();
		return txReceipt;
	}

	async sendToken(tokenAddress, amount, toAddress) {
		const signer = this.provider.getSigner();
		const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
		const decimals = await tokenContract.decimals();
		const txRequest = await tokenContract.transfer(toAddress, ethers.utils.parseUnits(amount, decimals));
		const txReceipt = await txRequest.wait();
		return txReceipt;
	}
}

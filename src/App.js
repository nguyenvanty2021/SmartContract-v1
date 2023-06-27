// import Image from "next/image";
// import { Inter } from "next/font/google";
import { ethers } from "ethers";
import ATM from "./ATM.json";
import { useState } from "react";
// const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [addressUser, setAddressUser] = useState(undefined);
  const [amount, setamount] = useState(undefined);
  const [setsingerr, setSetsingerr] = useState(undefined);
  const handleTransfer = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "0x2618267931f2078fD3fef4b817306DA8Da3ff107",
        ATM,
        signer
      );
      // const transaction = await contract.transfer(addressUser, amount);
      const transaction = await contract.balanceOf('0x2038E077C5fB0E0bDe287cfEA203Db516af61643');
      // const transactionFrom = await contract.transferFrom('0x2038E077C5fB0E0bDe287cfEA203Db516af61643' ,addressUser, amount);
      // Chờ giao dịch được xác nhận
      // await transaction.wait();
      // const formartBalanceToken = convertToEther(valueprice, 4);
      console.log(ethers.utils.formatEther( transaction ))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-black">
      <div>
        <input
          onChange={(e) => setAddressUser(e.target.value)}
          placeholder="adddress"
        />
        <input
          onChange={(e) => setamount(e.target.value)}
          placeholder="Amount"
        />

        <button className="text-white" onClick={() => handleTransfer()}>
          Transfer
        </button>
      </div>
    </div>
  );
}
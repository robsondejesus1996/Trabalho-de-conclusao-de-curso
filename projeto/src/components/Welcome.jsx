import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./Loader";

const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justity-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justity-start flex-col md:mr-10">
          <h1 className="text-3x1 sm:text-5xl text-white text-gradient py-1">
            Mande crypto <br /> ao redor do Mundo!
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore o Mundo Crypto! Compre e Venda Criptomoedas Facilmente pelo
            Krypt!
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-pink-900 p-3 rounded-full cursor-pointer hover:bg-pink-900"
          >
            <p className="text-white text-base font-semibold">
              {" "}
              Conectar Carteira
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

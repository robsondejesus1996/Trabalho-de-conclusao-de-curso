import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./Loader";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justity-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

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
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Seguro </div>
                            <div className={commonStyles}>
                            Agilidade
                            
                            </div>

                            <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Ethereum
                            
                            </div>

                            <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0 </div>

                            <div className={commonStyles}>
                            Taxas Atrativas
                            
                            </div>

                            <div className={`rounded-br-2xl ${commonStyles}`}>
                            Metamask </div>
                    </div>
        </div>
        <div className="flex flex-col flex-1 items-center justity-start w-full mf:mt-0 mt-10">
            <div className="p-3 flex justity-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

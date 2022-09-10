import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from "react-icons/bs";
import {Loader} from './Loader';

const Welcome = () =>{
    return (
        <div className='flex w-full justify-center items-center'>
            <div className='flex md:flex-row flex-col items-start justity-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justity-start flex-col md:mr-10'>
                <h1 className='text-3x1 sm:text-5xl text-white text-gradient py-1'>
                    Mande crypto <br/> ao redor do Mundo!
                </h1>
                </div>
            </div>

        </div>

    );
};

export default Welcome;
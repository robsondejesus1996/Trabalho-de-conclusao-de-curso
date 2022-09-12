import logo from "./logo.png";

const Footer = () =>{
    return(
        <div className="w-full md:justify-center justify-between items-center flex-col p-2 gradient-bg-footer">
            
            <div className=" flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Entre em contato!</p>
                <p className="text-white text-sm text-center">robsondejesus1996@hotmail.com</p>

            </div>

            <div className="sm:w-[100%] w-full h-[0.25px] bg-gray-400 mt-5"/>

            <div className="sm:w-[100%] w-full flex justify-between items-center mt-3">

                <p className="text-white text-sm text-center">Decentralization App 2022</p>
                <p className="text-white text-sm text-center">Todos Direitos Reservados @RJ</p>

            </div>
            

        </div>
    );
}

export default Footer;
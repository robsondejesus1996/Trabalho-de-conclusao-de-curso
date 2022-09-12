import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({color, title, icons, subtitle}) =>(
    <div className="flex flex-row md:flex-row justify-center items-center ehite-glassmorphism p-3 m-2 cursor-pointer gover:shadow-xl">

    </div>
)

const Services = () =>{
    return (
        <div className="flex w-full justify-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justity-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justity-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Serviços que 
                        <br />continuamos a otimizar
                    </h1>

                </div>

            </div>
            <div className="flex-1 flex flex-col justity-start items-center">
                <ServiceCard
                    color="bg-pink-900"
                    title="Segurança Garantida"
                    icons={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Segurança em Primeiro Lugar. Mantendo a Qualidade e Privacidade"
                
                />

            </div>
        </div>
    );
};

export default Services;
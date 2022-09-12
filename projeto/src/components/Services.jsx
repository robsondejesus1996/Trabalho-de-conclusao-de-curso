import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({color, title, icon, subtitle}) =>(
    <div className="flex flex-row md:flex-row justify-center items-center ehite-glassmorphism p-3 m-2 cursor-pointer gover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}

        </div>

        <div className="ml-5 flex flex-col flex-1 ">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <p className="mt-2 text-white text-sm md:w-9/12">{subtitle} </p>

        </div>

    </div>
)

const Services = () =>{
    return(
        <div className="flex flex-col w-full justify-center gradient-bg-services">
            <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
                        Serviços que 
                        <br/>continuamos a otimizar
                    </h1>

                </div>

            </div>
            <div className="flex-1 flex flex-col justify-start items-center">
                <ServiceCard
                    color="bg-pink-900"
                    title="Segurança Garantida"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                    subtitle="Segurança em Primeiro Lugar. Mantendo a Qualidade e Privacidade"
                />

                <ServiceCard
                    color="bg-pink-900"
                    title="As Melhores Taxas "
                    icon={<BiSearchAlt fontSize={21} className="text-white" />}
                    subtitle="Segurança em Primeiro Lugar. Mantendo a Qualidade e Privacidade"
                />
                <ServiceCard
                    color="bg-pink-900"
                    title="Transações Rápidas"
                    icon={<RiHeart2Fill fontSize={21} className="text-white" />}
                    subtitle="Segurança em Primeiro Lugar. Mantendo a Qualidade e Privacidade"
                />

            </div>
        </div>

        
    );
}

export default Services;
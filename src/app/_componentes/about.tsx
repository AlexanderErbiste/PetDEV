import Image from "next/image";
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
           
           <div className="container px-4 mx-auto ">

            <div className="grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div
             className="relative"
                data-aos="fade-up-right"
                data-aos-delay="300"
             >

        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
        <Image
        src={about1Img}
        alt="Foto de cachorro"
        fill
        quality={100}
        className="object-cover hover:scale-110 transition-all duration-300"
        priority
        />
        </div>

        <div className="absolute w-40 h-40 right-4 -bottom-8  border-4 overflow-hidden rounded-lg border-white">
        <Image
        src={about2Img}
        alt="Foto de cachorro 2"
        fill
        quality={100}
        priority
        />
        </div>                

        </div>

        <div className="space-y-6 mt-10"data-aos="fade-up-left" data-aos-delay="300" >
        <h2 className="text-4xl font-bold">SOBRE</h2>

        <p>
        O PetDEV é um espaço dedicado ao cuidado e bem-estar dos pets, oferecendo serviços de banho e tosa, atendimento veterinário, venda de rações, acessórios e brinquedos. Com uma equipe especializada e um ambiente acolhedor, garantimos o melhor para o seu amigo de quatro patas!
        </p>

        <ul className="space-y-4">
        <li className="flex items-center gap-2">
            <Check className="text-red-500"/>
            Aberto desde 2006
        </li>
        <li className="flex items-center gap-2">
            <Check className="text-red-500"/>
            Equipe com mais de 10 veterinários.
        </li>
        <li className="flex items-center gap-2">
            <Check className="text-red-500"/>
            Qualidade é nossa prioridade.
        </li>
        </ul>

        <div className="flex gap-2">
        <a
        target='_blank'
        href={`https://wa.me/5515991400452?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Pet%20Shop.`}
        className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md"
        >
            <WhatsappLogo className="w-5 h-5 text-white"/>
            Contato via WhatsApp
        </a>

        <a
          href="https://www.google.com.br/maps/place/Escola+T%C3%A9cnica+Estadual+Fernando+Prestes/@-23.5117748,-47.4737685,1010m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94c58aeb7987bac9:0xbafed5f1761e6f47!8m2!3d-23.5117797!4d-47.4711936!16s%2Fg%2F1vzqtb_1?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
          target='_blank'
          className="flex items-center justify-center w-fit gap-2 py-2 px-4 rounded-md"
        >
            <MapPin className="w-5 h-5 text-black"/>
            Endereço da loja
        </a>
        </div>

        </div>
        </div>

         

           </div>
        </section>
    ) 
}
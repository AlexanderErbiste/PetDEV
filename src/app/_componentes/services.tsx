"use client";

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react';

const services = [
    { 
        title: "Banho e tosa",
        description: "Serviço de banho e tosa para cães e gatos, com produtos de alta qualidade e profissionais experientes.",
        duration: "1h",
        price: "R$ 50,00",
        icon: <Scissors />,
        linkText: 'Olá, vi no site que vocês oferecem banho e tosa, gostaria de mais informações.',
    },
    { 
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças e aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "R$ 45,00",
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.',
    },
    { 
        title: "Taxi Dog",
        description: "Serviço de transporte seguro e confortável para cães e gatos, com profissionais treinados e veículos adaptados.",        
        duration: "2h",
        price: "R$ 80,00",
        icon: <CarTaxiFront />,
        linkText: 'Olá, vi no site sobre Taxi Pet e gostaria de mais informações.',
    },
    { 
        title: "Hotel para pets",
        description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar. Os pets ficam acomodados em espaços seguros e confortáveis.",        
        duration: "1h",
        price: "R$ 60,00",
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel para Pets e gostaria de mais informações.',
    },
];

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">Serviços</h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                 href={`https://wa.me/5515991400452?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20Pet%20Shop.`}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                                            >
                                                <WhatsappLogo className="w-5 h-5" />
                                                Entrar em contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 top-1/2 z-10"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>

                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-3 -translate-y-1/2 top-1/2 z-10"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
}

"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envio en 24/48 hrs",
        description: "Como cliente VIP, tus envíos en 24/48 hrs. Obtén más información",
        link: "/envio-rapido",
    },
    {
        id: 2,
        title: "Descuentos Exclusivos",
        description: "Aprovecha descuentos exclusivos para nuestros clientes VIP. Más detalles aquí",
        link: "/descuentos",
    },
    {
        id: 3,
        title: "Nuevas Colecciones",
        description: "Descubre nuestras nuevas colecciones antes que nadie. Ver más",
        link: "/nuevas-colecciones",
    },
    {
        id: 4,
        title: "Atención Personalizada",
        description: "Disfruta de atención personalizada 24/7. Contáctanos para más información",
        link: "/atencion-personalizada",
    },
]
const CarouselTextBanner = ()=> {
    const router = useRouter();

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay:2500,
                })
            ]}
            >
                <CarouselContent>
                {dataCarouselTop.map(({id,title,description,link}) => (
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col items-center justify-center p-2">
                                    <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                    <p className="text-xs sm-text-sm text-wrap dark:text-secondary">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
export default CarouselTextBanner;
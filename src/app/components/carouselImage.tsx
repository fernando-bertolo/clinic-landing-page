import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

interface ImageProps {
    src: string
    alt: string
}

export const CarouselImage = ({ images }: { images: ImageProps[] }) => {
    return (
        <section
            className="flex w-full sm:max-w-6xl max-w-xs h-[calc(100% - 80px)] sm:h-full p-8 gap-6 items-center justify-center"
        >
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-xs sm:max-w-6xl"
            >
                <CarouselContent>
                    {images ? (
                        images.map((image, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="p-0">
                                        <CardContent className="flex aspect-square items-center justify-center p-0 max-h-90">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    ) : (
                        <></>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
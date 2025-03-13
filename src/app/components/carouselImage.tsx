import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const CarouselImage = () => {
    return (
        <section
            className="flex w-full h-[calc(100% - 80px)] sm:h-screen p-8 gap-6 items-center justify-center"
        >
            <Carousel className="flex justify-center">
                <CarouselContent >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} >
                            <div className="p-1 w-full">
                                <Card >
                                    <CardContent className="w-full flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface CarouselFeedbackProps {
    name: string
    message: string
}

export const CarouselFeedback = ({ message, name }: CarouselFeedbackProps) => {
    return (
        <section
            className="flex w-full max-w-xs sm:max-w-4xl md:max-w-7xl h-[calc(100% - 80px)] sm:h-full p-8 sm:p-12 gap-6 items-center justify-center"
        >
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className="p-0">
                                <CardContent className="flex aspect-square items-center justify-center p-0 max-h-80">
                                    {message}
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
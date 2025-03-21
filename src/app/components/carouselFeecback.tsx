import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
            <Carousel className="max-w-70 sm:max-w-xl">
                <CarouselContent>
                    <CarouselItem>
                        <Card>
                            <CardContent className="flex flex-col gap-4 items-center justify-center p-8">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                    </div>
                                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                                        {message}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-bold text-sm text-nowrap text-center">
                                        {name}
                                    </p>
                                    <p className="font-regular text-[var(--primary-color)] text-sm text-nowrap text-center">
                                        Paciente de Ortodontia
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    <CarouselItem>
                        <Card>
                            <CardContent className="flex flex-col gap-4 items-center justify-center p-8">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                    </div>
                                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                                        {message}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-bold text-sm text-nowrap text-center">
                                        {name}
                                    </p>
                                    <p className="font-regular text-[var(--primary-color)] text-sm text-nowrap text-center">
                                        Paciente de Ortodontia
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>



                    <CarouselItem>
                        <Card>
                            <CardContent className="flex flex-col gap-4 items-center justify-center p-8">
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                        <i className="fa-solid fa-star text-yellow-500"></i>
                                    </div>
                                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                                        {message}
                                    </p>
                                </div>

                                <div>
                                    <p className="font-bold text-sm text-nowrap text-center">
                                        {name}
                                    </p>
                                    <p className="font-regular text-[var(--primary-color)] text-sm text-nowrap text-center">
                                        Paciente de Ortodontia
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section >
    )
}
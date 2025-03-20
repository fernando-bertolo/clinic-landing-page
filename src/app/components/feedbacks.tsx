import { CarouselFeedback } from "./carouselFeecback"

export const Feedback = () => {
    return (
        <section
            id="feedback"
            className="flex flex-col sm:flex-row max-w-7xl h-[calc(100% - 80px)] sm:h-screen p-8 gap-6 items-center justify-center"
        >

            <div className="flex flex-col gap-8 text-center sm:text-left justify-center items-center">
                <h3 className="uppercase font-bold text-[var(--primary-color)] text-md sm:text-xl">Depoimentos</h3>
                <h1 className="font-bold text-3xl sm:text-4xl text-nowrap text-center">
                    Feedback&apos;s de nossos <br />
                    pacientes
                </h1>
                <hr className="w-24 h-2 rounded-2xl bg-[var(--primary-color)]" />

                <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                    Nada melhor que a experiência de quem já passou por nossos tratamentos<br className="hidden sm:block" />
                    para mostrar a qualidade do nosso trabalho.
                </p>

                <CarouselFeedback
                    name="Fernando Bertolo"
                    message="Excelente atendimento, recomendo!"
                />

            </div>
        </section>
    )
}
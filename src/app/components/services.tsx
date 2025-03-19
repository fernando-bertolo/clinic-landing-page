import { Card } from "./card"

export const Service = () => {
    return (
        <section
            id="service"
            className="flex flex-col sm:flex-row max-w-7xl h-[calc(100% - 80px)] sm:h-screen p-8 gap-6 items-center justify-center"
        >

            <div className="w-full flex justify-center items-center">
                <div className="flex flex-col gap-8 text-center sm:text-left justify-center items-center">
                    <h3 className="uppercase font-bold text-[var(--primary-color)] text-md sm:text-xl">Serviços</h3>
                    <h1 className="font-bold text-3xl sm:text-4xl text-nowrap text-center">
                        Tratamentos odontológicos <br />
                        especializados
                    </h1>
                    <hr className="w-24 h-2 rounded-2xl bg-[var(--primary-color)]" />

                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                        Oferecemos uma ampla gama de serviços odontológicos para cuidar da <br />
                        sua saúde bucal de forma completa. Conheça nossas especialidades.
                    </p>


                    <div className="flex gap-3 flex-wrap justify-start p-3">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    )
}
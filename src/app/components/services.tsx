import { Card } from "./card"

export const Service = () => {
    return (
        <section
            id="service"
            className="flex flex-col sm:flex-row max-w-7xl h-[calc(100% - 80px)] sm:h-screen p-8 gap-6 items-center justify-center"
        >

            <div className="flex flex-col gap-8 text-center sm:text-left justify-center items-center">
                <h3 className="uppercase font-bold text-[var(--primary-color)] text-md sm:text-xl">Serviços</h3>
                <h1 className="font-bold text-3xl sm:text-4xl text-nowrap text-center">
                    Tratamentos odontológicos <br />
                    especializados
                </h1>
                <hr className="w-24 h-2 rounded-2xl bg-[var(--primary-color)]" />

                <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-center">
                    Oferecemos uma ampla gama de serviços odontológicos para cuidar da <br className="hidden sm:block" />
                    sua saúde bucal de forma completa. Conheça nossas especialidades.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
                    <Card
                        title="Ortodontia"
                        description="Alinhamento dos dentes com aparelhos ortodônticos para um sorriso harmonioso."
                    />
                    <Card
                        title="Endodontia"
                        description="Tratamento de canal com técnicas avançadas para salvar dentes danificados."
                    />
                    <Card
                        title="Clareamento dental"
                        description="Clareamento dental com técnicas avançadas para um sorriso mais brilhante."
                    />
                    <Card
                        title="Lente de Contato"
                        description="Lentes de contato em resina e porcelana"
                    />
                    <Card
                        title="Limpeza"
                        description="Raspagem e profilaxia para manter a saúde bucal."
                    />
                    <Card
                        title="Prótese dental"
                        description="Prótese dentária para restaurar a função e o sorriso."
                    />
                </div>
            </div>
        </section>
    )
}
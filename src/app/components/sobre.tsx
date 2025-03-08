export const Sobre = () => {
    return (
        <section className="flex max-w-7xl w-full p-8">
            <div className="w-[50%] flex justify-center ">
                <div className="flex flex-col gap-4">
                    <h3 className="uppercase font-regular text-[var(--primary-color)] text-xl">Clinica Odontológica Especializada</h3>
                    <h1 className="font-bold text-5xl">
                        Sorrisos perfeitos <br />
                        através da <br />
                        <span className="text-[var(--primary-color)]">excelência</span> em <br />
                        odontolodia!
                    </h1>

                    <p className="text-md text-[var(--secondary-color)]">
                        Combinamos tecnologia avançada e profissionais especializados para oferecer tratamentos personalizados que
                        transformam sua saúde bucal e autoconfiança.
                    </p>

                    <div>
                        <button type="button">
                            Agendar Consulta
                        </button>

                        <button type="button">
                            Saiba Mais
                        </button>
                    </div>

                </div>
            </div>
            <div className="w-[50%] flex">
                <h1>Imagem</h1>
            </div>
        </section>
    )
}
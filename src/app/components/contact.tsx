import Image from "next/image"

export const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col sm:flex-row max-w-7xl h-[calc(100% - 80px)] h-screen p-8 gap-6 items-center justify-center"
        >
            <div className="w-full flex flex-col sm:flex-row justify-center gap-10 p-10">
                <div className="flex">
                    <Image
                        src="/imageAbout.jpg"
                        alt="Logo"
                        className="flex w-full h-full rounded-2xl"
                        width={500}
                        height={500}
                    />

                </div>
                <div className="flex flex-col justify-around gap-8 text-center sm:text-left">
                    <h1 className="font-bold text-xl text-left">Entre em contato conosco</h1>

                    <div className="flex justify-start items-center gap-4">
                        <i className="fa-solid fa-phone text-2xl"></i>
                        <div className="flex flex-col">
                            <p className="font-bold text-left">Telefone</p>
                            <p className="text-sm text-[var(--secondary-color)]">(19) 99744-4101</p>
                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <i className="fa-solid fa-location-dot text-2xl"></i>
                        <div className="flex flex-col">
                            <p className="font-bold text-left">Endereço</p>
                            <p className="text-sm text-[var(--secondary-color)] text-left">Rua São Marcos, 682, Jardim Bom Sucesso  <br /> Santa Gertrudes - SP</p>
                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <i className="fa-solid fa-clock text-2xl"></i>
                        <div className="flex flex-col">
                            <p className="font-bold text-left">Horário de Funcionamento</p>
                            <p className="text-sm text-[var(--secondary-color)] text-left">Segunda a Sexta: 8hr ás 18hr</p>
                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-4">
                        <i className="fa-solid fa-calendar text-2xl"></i>
                        <div className="flex flex-col">
                            <p className="font-bold text-left">Agendamento</p>
                            <p className="text-sm text-[var(--secondary-color)] text-left">Consultas com hora marcada</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
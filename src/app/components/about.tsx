import Image from "next/image"
import Link from "next/link"

export const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col sm:flex-row max-w-7xl h-[calc(100% - 80px)] sm:h-screen p-14 sm:p-8 gap-6 items-center justify-center"
        >

            <div className="w-full sm:w-[50%] flex justify-center items-center ">
                <Image
                    src="/imgAbout.png"
                    alt="Logo"
                    className="flex w-full h-full sm:w-[80%] rounded-2xl"
                    width={500}
                    height={500}
                />
            </div>

            <div className="w-full sm:w-[50%] flex justify-center">
                <div className="flex flex-col gap-8 text-center sm:text-left">
                    <h3 className="uppercase font-bold text-[var(--primary-color)] text-md sm:text-xl">Sobre nós</h3>
                    <h1 className="font-bold text-3xl sm:text-4xl text-nowrap">
                        Expertise e cuidado para <br />
                        o seu sorriso
                    </h1>
                    <hr className="w-24 h-2 rounded-2xl bg-[var(--primary-color)]" />

                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap text-left">
                        A São Marcos Odontologia, acredita que um sorriso saudável é fundamental para sua confiança e bem-estar geral.
                        Nossa clínica foi fundada com a missão de proporcionar tratamentos odontológicos excepcionais em um ambiente confortável e acolhedor.
                    </p>


                    <div className="flex flex-col justify-center sm:justify-start gap-6">
                        <div className="flex gap-2">
                            <i className="fa-solid fa-circle-check mt-2 text-[var(--primary-color)]"></i>

                            <div className="flex flex-col items-start">
                                <p className="text-lg font-bold text-[var(--secondary-color-subtitle)]">Tecnologia Avançada</p>
                                <span className="text-slate-500 text-xs text-left">
                                    Utilizamos equipamentos modernos e técnicas inovadoras para garantir
                                    diagnósticos precisos e tratamentos eficazes.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2 text-[var(--primary-color)]">
                            <i className="fa-solid fa-circle-check mt-2"></i>

                            <div className="flex flex-col items-start">
                                <p className="text-lg font-bold text-[var(--secondary-color-subtitle)]">Atendimento Humanizado</p>
                                <span className="text-slate-500 text-xs text-left">
                                    Priorizamos o bem-estar e conforto dos nossos pacientes,
                                    com atendimento personalizado e atencioso.
                                </span>
                            </div>
                        </div>
                    </div>
                    <Link href={"#service"}>
                        <h4 className="text-[var(--primary-color)] cursor-pointer">Conheça nossos serviços {'->'}</h4>
                    </Link>
                </div>
            </div>
        </section>
    )
}
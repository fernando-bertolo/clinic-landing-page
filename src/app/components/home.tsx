import Image from "next/image"

export const Home = () => {
    return (
        <section className="flex flex-col sm:flex-row max-w-7xl w-screen h-screen p-4 sm:p-8 gap-6 items-center justify-center">
            <div className="w-full sm:w-[50%] flex justify-center">
                <div className="flex flex-col gap-4 sm:gap-8 text-center sm:text-left">
                    <h3 className="uppercase font-regular text-[var(--primary-color)] text-md sm:text-xl">Clinica Odontológica Especializada</h3>
                    <h1 className="font-bold text-3xl sm:text-5xl">
                        Sorrisos perfeitos <br />
                        através da <br />
                        <span className="text-[var(--primary-color)]">excelência</span> em <br />
                        odontologia!
                    </h1>

                    <p className="text-sm sm:text-md text-[var(--secondary-color)] text-wrap">
                        Combinamos tecnologia avançada e profissionais especializados para oferecer tratamentos personalizados que
                        transformam sua saúde bucal e autoconfiança.
                    </p>

                    <div className="flex justify-center sm:justify-start gap-4">
                        <button
                            type="button"
                            className="flex p-3 bg-[var(--primary-color)] gap-2 justify-center items-center text-white rounded-md font-medium text-sm cursor-pointer hover:bg-[var(--primary-color-hover)]"
                        >
                            <i className="fa-brands fa-whatsapp fa-lg"></i>
                            Agendar Consulta
                        </button>

                        <button
                            type="button"
                            className="p-3 bg-[var(--tertiary-color)] border border-slate-200 text-black rounded-md font-medium text-sm cursor-pointer hover:bg-slate-100"
                        >
                            Nossos serviços
                        </button>
                    </div>

                    <div className="flex justify-center sm:justify-start gap-6">
                        <div className="flex flex-col items-center sm:items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">10+</p>
                            <span className="text-slate-500 text-xs">Anos de experiência</span>
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">5k+</p>
                            <span className="text-slate-500 text-xs">Pacientes satisfeitos</span>
                        </div>
                        <div className="flex flex-col items-center sm:items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">500+</p>
                            <span className="text-slate-500 text-xs">Feedbacks positivos</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full sm:w-[50%] flex justify-center items-center ">
                <Image
                    src="/imageAbout.jpg"
                    alt="Logo"
                    className="w-full h-full rounded-2xl"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}
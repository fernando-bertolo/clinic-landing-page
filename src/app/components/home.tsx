import Image from "next/image"
import { ButtonSchedule } from "./button.schedule"

export const Home = () => {
    return (
        <section className="flex flex-col sm:flex-row max-w-7xl w-screen h-screen sm:p-8 gap-6 items-center justify-center">
            <div className="w-[50%] flex justify-center">
                <div className="flex flex-col sm:gap-8">
                    <h3 className="uppercase font-regular text-[var(--primary-color)] text-xs sm:text-xl">Clinica Odontológica Especializada</h3>
                    <h1 className="font-bold text-2xl sm:text-5xl">
                        Sorrisos perfeitos <br />
                        através da <br />
                        <span className="text-[var(--primary-color)]">excelência</span> em <br />
                        odontologia!
                    </h1>

                    <p className="text-md text-[var(--secondary-color)] text-wrap">
                        Combinamos tecnologia avançada e profissionais especializados para oferecer tratamentos personalizados que
                        transformam sua saúde bucal e autoconfiança.
                    </p>

                    <div className="flex gap-4">
                        <ButtonSchedule />


                        <button
                            type="button"
                            className="p-3 bg-[var(--tertiary-color)] border border-slate-200 text-black rounded-md font-medium text-sm cursor-pointer hover:bg-slate-100"
                        >
                            Nossos serviços
                        </button>
                    </div>

                    <div className="flex gap-6">
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">10+</p>
                            <span className="text-slate-500 text-xs">Anos de experiência</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">5k+</p>
                            <span className="text-slate-500 text-xs">Pacientes satisfeitos</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-3xl font-bold text-[var(--primary-color)]">500+</p>
                            <span className="text-slate-500 text-xs">Feedbacks positivos</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[50%] flex justify-center items-center">
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
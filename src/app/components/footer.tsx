import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="w-full inset-shadow-sm flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col p-4 gap-10 sm:items-center sm:flex-row sm:justify-around sm:max-w-7xl">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <Image
                        src="/logo-sao-marcos.jpeg"
                        alt="Logo"
                        className=""
                        width={150}
                        height={50}
                    />
                    <p className="text-[var(--secondary-color)] text-sm">Seu sorriso nossa prioridade</p>
                    <div className="flex gap-4 justify-start">
                        <Link href={"https://www.facebook.com/marianebertolodentista/?locale=pt_BR"} target="_blank">
                            <i className="fa-brands fa-facebook text-2xl text-[var(--secondary-color)]"></i>
                        </Link>
                        <Link href={"https://www.instagram.com/dramarianebertolo"} target="_blank">
                            <i className="fa-brands fa-instagram text-2xl text-[var(--secondary-color)]"></i>
                        </Link>
                        <Link href={"https://wa.me/19997444101?text=Vim%20pelo%20site!%20Quero%20agendar%20uma%20consulta"} target="_blank">
                            <i className="fa-brands fa-whatsapp text-2xl text-[var(--secondary-color)]"></i>
                        </Link>

                    </div>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center">
                    <h3 className="text-[var(--secondary-color)] text-lg font-bold">Serviços</h3>
                    <p className="text-[var(--secondary-color)] text-sm">Ortodontia</p>
                    <p className="text-[var(--secondary-color)] text-sm">Implantes Dentários</p>
                    <p className="text-[var(--secondary-color)] text-sm">Estética Dental</p>
                    <p className="text-[var(--secondary-color)] text-sm">Odontopediatria</p>
                    <p className="text-[var(--secondary-color)] text-sm">Endodontia</p>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center">
                    <h3 className="text-[var(--secondary-color)] hover:text-[var(--primary-color)]  text-lg font-bold">Links Úteis</h3>
                    <Link href={"#about"}>
                        <p className="text-[var(--secondary-color)] hover:text-[var(--primary-color)]  text-sm">Sobre nós</p>
                    </Link>
                    <Link href={"#services"}>
                        <p className="text-[var(--secondary-color)] hover:text-[var(--primary-color)]  text-sm">Nossos serviços</p>
                    </Link>
                    <Link href={"#contact"}>
                        <p className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] text-sm">Depoimentos</p>
                    </Link>
                    <Link href={"https://wa.me/19997444101?text=Vim%20pelo%20site!%20Quero%20agendar%20uma%20consulta"} target="_blank">
                        <p className="text-[var(--secondary-color)] text-sm hover:text-[var(--primary-color)] ">Fale Conosco</p>
                    </Link>
                </div>

                <div className="flex flex-col gap-3 sm:gap-2 justify-start items-center sm:items-start">
                    <h3 className="text-[var(--secondary-color)] text-lg font-bold text-center sm:text-left">Atendimento</h3>
                    <div>
                        <h3 className="text-[var(--secondary-color)] text-md font-semibold text-center sm:text-left">Whatsapp</h3>
                        <p className="text-[var(--secondary-color)] text-sm text-center">(19) 99974-44101</p>
                    </div>

                    <div>
                        <h3 className="text-[var(--secondary-color)] text-md font-semibold text-center sm:text-left">E-mail</h3>
                        <p className="text-[var(--secondary-color)] text-sm text-center sm:text-left">marianeb23@gmail.com</p>
                    </div>

                    <div>
                        <h3 className="text-[var(--secondary-color)] text-md font-semibold text-center sm:text-left">Horário</h3>
                        <p className="text-[var(--secondary-color)] text-sm text-center sm:text-left">Segunda a Sexta: <br className="hidden sm:flex" /> 8h ás 18hr</p>
                    </div>
                </div>

            </div>
            <div className="w-full h-full p-2">
                <p className="text-center text-sm text-[var(--secondary-color)]">© 2025 São Marcos Odontologia. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
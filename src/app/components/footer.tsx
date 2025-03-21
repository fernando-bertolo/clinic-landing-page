import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col justify-center items-center gap-4 bg-slate-50">
            <div className="w-full flex gap-20 p-4 justify-around max-w-7xl">
                <div className="flex flex-col gap-2">
                    <Image
                        src="/logo-sao-marcos.jpeg"
                        alt="Logo"
                        width={150}
                        height={50}
                    />
                    <p className="text-[var(--secondary-color)] text-sm">Seu sorriso nossa prioridade</p>
                </div>

                <div>
                    <h3 className="text-[var(--secondary-color)] text-lg font-bold">Contato</h3>
                    <p className="text-[var(--secondary-color)] text-sm">Rua João de Barros, 1000 - Centro</p>
                    <p className="text-[var(--secondary-color)] text-sm">São Marcos - SP</p>
                    <p className="text-[var(--secondary-color)] text-sm">(19) 99974-44101</p>
                </div>

                <div>
                    <h3 className="text-[var(--secondary-color)] text-lg font-bold">Horário de Atendimento</h3>
                    <p className="text-[var(--secondary-color)] text-sm">Segunda a Sexta-feira</p>
                    <p className="text-[var(--secondary-color)] text-sm">08:00 - 18:00</p>
                </div>

                <div>
                    <h3 className="text-[var(--secondary-color)] text-lg font-bold">Redes Sociais</h3>
                    <div className="flex gap-2">
                        <i className="fa-brands fa-facebook text-2xl text-[var(--secondary-color)]"></i>
                        <i className="fa-brands fa-instagram text-2xl text-[var(--secondary-color)]"></i>
                        <i className="fa-brands fa-whatsapp text-2xl text-[var(--secondary-color)]"></i>
                    </div>
                </div>

            </div>
            <div className="w-full h-full p-2">
                <p className="text-center text-sm text-[var(--secondary-color)]">© 2025 São Marcos Odontologia. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
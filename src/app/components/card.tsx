import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
}

export const Card = ({ title, description }: CardProps) => {
    return (
        <div className="flex flex-col gap-2 w-72 items-start p-6 bg-[var(--background)] shadow-md hover:shadow-xl rounded-sm">
            <i className="fa-solid fa-tooth text-2xl text-[var(--primary-color)]"></i>
            <h2 className="font-semibold text-2xl">{title}</h2>
            <p className="text-sm text-start text-[var(--secondary-color)]">
                {description}
            </p>

            <Link href={"https://wa.me/19997444101?text=Vim%20pelo%20site!%20Quero%20agendar%20uma%20consulta"} target="_blank">
                <h4 className="text-[var(--primary-color)] cursor-pointer">Saiba mais {'->'}</h4>
            </Link>
        </div>
    )
}
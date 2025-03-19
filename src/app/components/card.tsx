export const Card = () => {
    return (
        <div className="flex flex-col gap-2 w-72 items-start p-6 bg-[var(--background)] shadow-md hover:shadow-xl rounded-sm">
            <i className="fa-solid fa-tooth text-2xl text-[var(--primary-color)]"></i>
            <h2 className="font-semibold text-2xl">Ortodontia</h2>
            <p className="text-sm text-[var(--secondary-color)]">
                Alinhamento dos dentes com <br />
                aparelhos ortodônticos para um sorriso harmonioso.
            </p>

            <h4 className="text-[var(--primary-color)] cursor-pointer">Saiba mais {'->'}</h4>
        </div>
    )
}
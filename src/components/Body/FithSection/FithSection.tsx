export default function FithSection() {
    const contacts = [
        { id: 'phone', name: 'Tel. nr.: ', attr: 'tel:', value: '+37066408314' },
        { id: 'email', name: 'El. paštas: ', attr: 'mailto:', value: 'pokytis2@gmail.com' },
        { id: 'origin', name: 'Vilnius, Lietuva', attr: '' },
    ];

    return (
        <section className="w-full flex justify-center bg-zinc-400" id="kontaktai">
            <div className="laptop:w-1224px w-full laptop:flex">
                {/* left-side */}
                <div className="laptop:px-8 px-4 laptop:py-4 py-2 w-full flex flex-col text-center">
                    <div className="laptop:text-2xl text-lg font-semibold text-center">KONTAKTAI</div>
                    <div className="text-xl text-center">
                        <div className="laptop:w-full pt-4 text-center">
                            <div className="flex flex-col tablet:flex-row justify-center tablet:gap-16 gap-1">
                                {contacts.map((contact) => (
                                    <div key={contact.id}>
                                        {contact.name}
                                        {contact.attr && (
                                            <a className="underline text-sky-900" href={contact.attr + contact.value}>
                                                {contact.value}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="pt-4">Individualios konsultacijos gyvai (Vilniuje) ar internetu</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

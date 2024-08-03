export default function FithSection() {
    const contacts = [
        { id: 'phone', icon: './phone-call.png', attr: 'tel:', value: '+37066408314' },
        {
            id: 'fb',
            icon: './facebook.png',
            attr: 'https://www.facebook.com/people/Ge%C5%A1talto-psichoterapija-Renata-Klevickiene/100082690724226/',
            value: '',
            name: 'Geštalto terapija',
            target: '_blank',
        },
        {
            id: 'origin',
            icon: './address.png',
            attr: 'https://www.google.com/maps?q=',
            value: 'Vilniaus centre',
            target: '_blank',
        },
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
                                    <div className="flex items-center justify-center" key={contact.id}>
                                        <img src={contact.icon} alt={contact.id} />
                                        {contact.attr && (
                                            <a
                                                className="underline text-sky-900 ml-3"
                                                href={contact.attr + contact.value}
                                                target={contact.target ? contact.target : ''}
                                            >
                                                {contact.value ? contact.value : contact.name}
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

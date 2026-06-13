import Accordion from "../../../components/Accordion";

export default function FAQ() {
    const faqItems = [
        { question: "Ar man tikrai reikia kreiptis į psichologą?", answer: "Nebūtina laukti krizės ar labai sunkių išgyvenimų. Kreiptis verta tuomet, kai emociniai, santykių ar gyvenimo sunkumai ima trukdyti kasdienei savijautai, darbui ar bendravimui." },
        { question: "Kiek laiko trunka psichologinė pagalba?", answer: "Pagalbos trukmė priklauso nuo individualios situacijos, sunkumų pobūdžio ir Jūsų tikslų. Vieniems pakanka kelių konsultacijų, kitiems naudingas ilgesnis terapinis procesas." },
        { question: "Ar konsultacijos yra konfidencialios?", answer: "Taip. Visa konsultacijų metu pateikta informacija yra konfidenciali ir saugoma laikantis profesinės etikos bei teisės aktų reikalavimų." },
    ];

    return (
        <section className="w-full flex justify-center py-8 px-4" id="FAQ">
            <div className="laptop:w-1/2 w-full flex flex-col justify-center">
                <div className="laptop:text-2xl text-lg font-semibold text-center py-4">DUK</div>
                <div className="flex flex-col gap-2">
                    {faqItems.map((item, index) => (
                        <Accordion key={index} title={item.question} content={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ThirdSection() {
    const customThridSectionStyles = {
        backgroundImage: 'url("./2.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const reasons = [
        '- atsidūrėte krizinėje situacijoje,',
        '- santykiai tapo sudėtingi, įtempti,',
        '- nepasitikite savimi,',
        '- kamuoja liūdesys, nerimas, baimės, nepasitenkinimas,',
        '- patyrėte netektį,',
        '- jaučiate fizinius negalavimus, tačiau nėra nustatytos tam jokios priežastys,',
        '- arba kai tiesiog darosi per sunku su situacijomis gyvenime tvarkytis patiems.',
    ];

    return (
        <section className="w-full flex justify-center" style={customThridSectionStyles} id="paslaugos">
            <div className="laptop:w-1224px w-full laptop:flex gap-32">
                {/* left-side */}
                <div className="laptop:w-1/2 laptop:px-8 px-4 laptop:py-16 py-6 bg-white-transparent">
                    <div className="laptop:text-5xl text-3xl">PASLAUGOS</div>
                    <div className="text-xl laptop:pt-12 pt-10">
                        <p>
                            „...žmonės daugiau laimi iš tiesos, kurią atranda patys.“ (I.D.Yalom), todėl nemokysiu Jūsų
                            kaip turite gyventi, bet padėsiu suprasti vidines sunkumų priežastis ir išsiaiškinti kas
                            trukdo daryti tai, ką norite, padėsiu patiems rasti atsakymus ir priimti sprendimus.
                        </p>
                        <p className="pt-4">Individuali terapija lietuvių ir rusų kalbomis gyvai ar internetu.</p>
                        <p className="pt-4 font-semibold">Kreipkitės, jei:</p>
                        <div className="pt-2">
                            <ul className="pl-4">
                                {reasons.map((reason, idx) => (
                                    <li key={idx}>{reason}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

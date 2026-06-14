export default function Services() {
    const customThridSectionStyles = {
        backgroundImage: 'url("./2.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const reasons = [
        'patiriate nerimą, liūdesį, baimes, pyktį, įtampą ar emocinį išsekimą;',
        'išgyvenate krizę, netektį, skyrybas ar kitą sunkų gyvenimo pokytį;',
        'pastebite pasikartojančius santykių, emocijų ar elgesio modelius;',
        'esate patyrę emociškai žalojančius, priklausomus, manipuliatyvius ar kontroliuojančius santykius;',
        'norite geriau suprasti save, stiprinti savivertę ir vidinį stabilumą;',
        'rūpi vaiko ar paauglio emocinė savijauta, elgesys, santykiai ar mokymosi sunkumai;',
        'mediciniškai įvertinus sveikatos būklę išlieka su įtampa, nerimu ar stresu siejamų kūno pojūčių.',
    ];

    const helps = [
        'geriau suprasti save ir savo patirtis;',
        'atpažinti emocijas bei poreikius;',
        'stiprinti emocinį atsparumą;',
        'keisti neefektyvius elgesio ir santykių modelius;',
        'kurti brandesnius santykius su savimi ir kitais;',
        'atkurti vidinę pusiausvyrą ir gyvenimo kokybę.',
    ];

    const methods = [
        {
            title: 'Geštalto psichoterapija',
            description:
                'Geštalto terapija orientuota į žmogaus patirtį „čia ir dabar“. Ji padeda geriau suvokti save, savo emocijas, poreikius bei santykių modelius, didina sąmoningumą ir skatina autentiškus pokyčius.',
        },
        {
            title: 'EMDR',
            description:
                'EMDR (nujautrinimo akių judesiais ir perdirbimo terapija) - moksliškai pagrįstas metodas, taikomas trauminių patirčių, nerimo, stipraus streso ir kitų emocinių sunkumų įveikimui.',
        },
        {
            title: 'Darbas su kūnu',
            description:
                'Kūnas ir psichika yra neatsiejami. Terapijoje dėmesys skiriamas kūno signalams, įtampai ir emocijų raiškai. Tai padeda geriau reguliuoti emocijas, stiprinti ryšį su savimi ir atkurti vidinę pusiausvyrą.',
        },
    ];

    return (
        <section className="w-full flex justify-center" style={customThridSectionStyles} id="paslaugos">
            <div className="laptop:w-1224px w-full laptop:flex gap-32">
                {/* left-side */}
                <div className=" laptop:px-8 px-4 laptop:py-12 py-6 bg-white-transparent">
                    <div className="laptop:text-5xl text-3xl">PASLAUGOS</div>
                    <div className="grid laptop:grid-cols-2 laptop:gap-8">
                        <div className="text-xl pt-4 laptop:col-span-2">
                            <p className="pt-4 font-semibold">Kviečiu susitikimui, jei:</p>
                            <div className="pt-2">
                                <ul className="pl-4 list-disc list-inside">
                                    {reasons.map((reason, idx) => (
                                        <li key={idx}>{reason}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-xl">
                            <p className="pt-4 font-semibold">Taikomi metodai</p>
                            <div className="pt-2">
                                <ul className="pl-4 flex flex-col gap-4">
                                    {methods.map((method, idx) => (
                                        <li key={idx}>
                                            <strong>{method.title}</strong>
                                            <p>{method.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className="pt-4 font-semibold">Psichoterapija padeda:</p>
                            <ul className="pl-4 list-disc list-inside">
                                {helps.map((help, idx) => (
                                    <li key={idx}>{help}</li>
                                ))}
                            </ul>
                            <div>
                                <p className="pt-4 font-semibold">Pirmoji konsultacija</p>
                                <p className="pl-4">Pirmojo susitikimo metu aptariama Jūsų situacija, poreikiai ir terapijos tikslai. Kartu įvertiname, kokia pagalba šiuo metu būtų tinkamiausia.</p>
                                <b className="pl-4">Sesijos trukmė - 50 min.</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

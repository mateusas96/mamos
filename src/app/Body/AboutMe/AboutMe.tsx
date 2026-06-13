export default function AboutMe() {
    const studies = [
        { title: 'Geštalto psichoterapijos studijos - Rygos geštalto institutas', subtitle: '' },
        { title: 'Vaiko ir edukacinės psichologijos magistras - Vilniaus universitetas', subtitle: '' },
        { title: 'Psichologijos bakalauras - Klaipėdos universitetas', subtitle: '' },
        { title: 'EMDR baziniai mokymai - EMDR Europe asociacija, Lietuvos traumų psichologijos asociacija', subtitle: '' },
        { title: 'Kraniosakralinės kūno terapijos mokymai (CST1 ir CST2) - Upledger Institute International, IKTA', subtitle: '' },
    ];

    return (
        <section className="w-full flex justify-center" id="apieMane">
            <div className="laptop:w-1224px tablet:flex pb-6 laptop:pb-0">
                {/* left-side */}
                <div className="tablet:w-1/2 w-full laptop:px-8 px-4 laptop:py-12 py-6">
                    <h1 className="laptop:text-5xl text-3xl">APIE MANE</h1>
                    <div className="pt-4">
                        <div className="text-xl pt-2">
                            <ul className="list-disc ml-6">
                                {studies.map((study, idx) => (
                                    <li key={idx}>
                                        {study.title} <small className="text-xs">{study.subtitle}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-lg pt-4">
                        Daugiau nei 10 metų profesinė patirtis dirbant su žmonėmis, susiduriančiais su emociniais sunkumais, gyvenimo krizėmis ir asmeninio augimo iššūkiais.
                    </div>
                </div>
                {/* right-side */}
                <div className="tablet:w-1/2 w-full inline-flex flex-col justify-center items-center">
                    <img
                        className="rounded-100 tablet:w-300px tablet:h-[300px] aboveGalaxyFold:w-250px aboveGalaxyFold:h-[250px] w-200px h-[200px] object-cover"
                        // src="./photo-black.webp"
                        // src="./photo-light-grey.webp"
                        // src="./photo-white.webp"
                        src="./photo.webp"
                        alt="me"
                    />
                    <p className="text-xl font-semibold">Renata Klevickienė</p>
                </div>
            </div>
        </section>
    );
}

export default function SecondSection() {
    const studies = [
        { title: 'EMDR Europe - EMDR (Akių judesių nujautrinimo ir perdirbimo terapija, 1 lygis)', subtitle: '' },
        { title: 'Klaipėdos universitetas - psichologija', subtitle: '(dabar)' },
        { title: 'Vilniaus Geštalto institutas - geštalto psichoterapija', subtitle: '' },
        { title: 'Vilniaus Geštalto institutas - grupinė psichoterapija', subtitle: '' },
        { title: 'VPU - chemija', subtitle: '' },
    ];

    return (
        <section className="w-full flex justify-center" id="apieMane">
            <div className="laptop:w-1224px tablet:flex pb-6 laptop:pb-0">
                {/* left-side */}
                <div className="tablet:w-1/2 w-full laptop:px-8 px-4 laptop:py-12 py-6">
                    <h1 className="laptop:text-5xl text-3xl">APIE MANE</h1>
                    <div className="text-xl laptop:pt-12 pt-10">
                        <p className="pb-4">
                            Esu sertifikuota (EAGT) Geštalto krypties psichoterapeutė, Europos ir Lietuvos geštaltinės
                            psichoterapijos asociacijų narė.
                        </p>
                        <p>
                            Tai psichoterapijos kryptis, kurios tikslas kurti žmogaus, kaip asmenybės vientisumą. Šios
                            krypties pradininkas vokiečių kilmės JAV psichiatras Federick&apos;as Perls&apos;as teigė,
                            kad tik suvokęs savo visybiškumą žmogus tampa nepriklausomas nuo aplinkybių, pasitikintis
                            savimi.
                        </p>
                    </div>
                    <div className="pt-4">
                        <h1 className="laptop:text-3xl text-xl">STUDIJOS</h1>
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
                </div>
                {/* right-side */}
                <div className="tablet:w-1/2 w-full inline-flex flex-col justify-center items-center">
                    <img
                        className="rounded-100 tablet:w-300px aboveGalaxyFold:w-250px w-200px"
                        src="./IMG-0253.jpg"
                        alt="me"
                    />
                    <p className="text-xl font-semibold">Renata Klevickienė</p>
                </div>
            </div>
        </section>
    );
}

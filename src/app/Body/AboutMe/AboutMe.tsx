import { Fragment } from 'react/jsx-runtime';
import SeeMore from '../../../components/SeeMore';

export default function AboutMe() {
    const studies = [
        { title: 'Geštalto psichoterapija, grupinė psichoterapija - Rygos geštalto institutas', subtitle: '' },
        { title: 'Edukacinė ir vaiko psichologija, magistro studijos - Vilniaus universitetas', subtitle: '' },
        { title: 'Psichologija - Klaipėdos universitetas', subtitle: '' },
        {
            title: 'EMDR (nujautrinimo akių judesiais ir perdirbimo terapija) praktikas - EMDR Europe asociacija, Lietuvos traumų psichologijos asociacija',
            subtitle: '',
        },
        {
            title: 'Kraniosakralinės kūno terapijos mokymai (CST1 ir CST2) - Upledger Institute International, IKTA',
            subtitle: '',
        },
        { title: 'Geštalto terapija su vaikais ir paaugliais: Violet Oaklander darbo modelis (20 val.)', subtitle: '' },
    ];

    return (
        <section className="w-full flex justify-center" id="apieMane">
            <div className="laptop:w-1224px tablet:flex pb-6 laptop:pb-0">
                {/* left-side */}
                <div className="tablet:w-1/2 w-full laptop:px-8 px-4 laptop:py-12 py-6">
                    <h1 className="laptop:text-5xl text-3xl">APIE MANE</h1>
                    <SeeMore
                        preview={
                            <p className="text-lg pt-4">
                                Daugiau nei 10 metų profesinė patirtis dirbant su žmonėmis, susiduriančiais su
                                emociniais sunkumais, gyvenimo krizėmis ir asmeninio augimo iššūkiais.
                            </p>
                        }
                        children={
                            <div>
                                <div className="text-lg pt-2">
                                    <ul className="list-disc ml-6">
                                        {studies.map((study, idx) => (
                                            <Fragment key={idx}>
                                                {idx === 3 && <p className="-ml-6 pt-2">Kvalifikacijos kėlimas:</p>}
                                                <li>
                                                    {study.title} <small className="text-xs">{study.subtitle}</small>
                                                </li>
                                            </Fragment>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        }
                    />
                </div>
                {/* right-side */}
                <div className="tablet:w-1/2 py-8 w-full inline-flex flex-col justify-center items-center">
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

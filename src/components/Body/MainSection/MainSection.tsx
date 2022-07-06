export default function MainSection() {
    const customMainSectionStyles = {
        backgroundImage: 'url(./1.jpg)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    return (
        <section
            className="w-full flex justify-center laptop:bg-fixed bg-scroll"
            style={customMainSectionStyles}
            id="pagrindinis"
        >
            <div className="laptop:w-1224px w-full laptop:flex gap-32">
                {/* left-side */}
                <div className="laptop:w-1/2 laptop:px-8 px-4 laptop:py-32 py-12">
                    <div className="laptop:text-5xl text-3xl break-all aboveGalaxyFold:break-normal">
                        PSICHOTERAPEUTO PASLAUGOS
                    </div>
                    <div className="text-xl laptop:py-12 pt-10 pb-4">
                        <p className="indent-10 tablet:w-3/4 laptop:w-full">
                            Jausdamas žmogus išreiškia save. Įprasmindami kančią atskleidžiame pačią žmogiškiausią
                            sielos gelmę, bręstame, augame, viršijame savo galias. Kaip tik tada, kai esame bejėgiai
                            pakeisti situaciją, kai mus apima neviltis, - kaip tik tada privalom pasikeisti patys.
                        </p>
                        <div className="text-sm pt-2">Viktor E. Frankl</div>
                    </div>
                    <a href="#susisiekite">
                        <button className="bg-zinc-800 hover:bg-zinc-900 text-white mt-4 py-3 px-10 text-xl">
                            Susisiekite
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

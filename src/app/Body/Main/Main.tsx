export default function Main() {
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
                <div className="laptop:w-2/3 laptop:px-8 px-4 laptop:py-32 py-12">
                    <div className="laptop:text-4xl text-2xl break-all aboveGalaxyFold:break-normal font-bold">
                        Psichologo - psichoterapeuto konsultacijos
                    </div>
                    <div className="text-lg pt-2 pb-4">
                        Vilniuje arba nuotoliu
                    </div>
                    <div className="laptop:text-xl text-lg laptop:py-12 pt-10 pb-4">
                        <p className="indent-10 tablet:w-3/4 laptop:w-full font-bold">
                            Kartais sunkiausia susidurti ne su tuo, kas vyksta aplink mus, o su tuo, kas vyksta mūsų viduje. 
                            Tačiau tai, kas kelia baimę, dažniausiai nėra stipriau už mus - tam reikia mūsų dėmesio, supratimo ir pagalbos.
                        </p>
                        <div className="pt-2">Individualus psichologinis konsultavimas ir psichoterapija suaugusiesiems; vaikų, paauglių konsultavimas bei konsultacijos tėvams vaikų emocinės raidos, elgesio, santykių ir ugdymo klausimais</div>
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

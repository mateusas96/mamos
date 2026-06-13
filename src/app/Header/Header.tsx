import { useEffect, useState } from 'react';

export default function Header() {
    const navItems = [
        { id: 'pagrindinis', name: 'Pagrindinis' },
        { id: 'apieMane', name: 'Apie mane' },
        { id: 'paslaugos', name: 'Paslaugos' },
        { id: 'FAQ', name: 'DUK' },
        { id: 'susisiekite', name: 'Susisiekite' },
    ];
    const [showMenu, setShowMenu] = useState(false);
    const [showDesktopMenu, setShowDesktopMenu] = useState(true);
    const [activeSection, setActiveSection] = useState('pagrindinis');
    const navSectionIds = navItems.map((item) => item.id);

    useEffect(() => {
        const onResize = () => {
            const laptopBreakPoint = 992;
            setShowDesktopMenu(window.innerWidth >= laptopBreakPoint);

            const navItem = document.querySelector('#primary-nav');
            if (navItem !== null) {
                const navHeight = navItem.scrollHeight;
                document.documentElement.style.setProperty('--scroll-padding', `${navHeight - 1}px`);
            }
        };

        const onScroll = () => {
            const sections = navSectionIds
                .map((id) => document.getElementById(id))
                .filter((section): section is HTMLElement => section !== null);
            const navItem = document.querySelector<HTMLElement>('#primary-nav');
            const navHeight = navItem?.offsetHeight ?? 0;
            const scrollPosition = window.scrollY + navHeight + 8;

            let current = 'pagrindinis';
            sections.forEach((section) => {
                if (scrollPosition >= section.offsetTop) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        onResize();
        onScroll();
        window.addEventListener('resize', onResize);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className="text-center sticky top-0 laptop:p-10 p-6 z-20 bg-accent-1 shadow-2xl" id="primary-nav">
            <div className="absolute bg-accent-1 top-0 right-0 bottom-0 left-0 z-10 d-block" />
            <div className="z-20">
                {showDesktopMenu && <div className="z-20 relative block text-3xl">Geštalto terapija</div>}
                {!showDesktopMenu && (
                    <div className="z-20 relative laptop:hidden flex justify-between">
                        <div className="text-lg">Geštalto terapija</div>
                        <button onClick={() => setShowMenu((oldVal) => !oldVal)}>
                            <img src={showMenu ? './close.png' : './menu.png'} alt="menu" />
                        </button>
                    </div>
                )}
                <nav className="laptop:relative absolute w-full -ml-6 laptop:ml-0 z-20">
                    {showDesktopMenu && (
                        <ul className="hidden laptop:flex justify-center gap-6 pt-4 text-xl">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className={item.id === activeSection ? 'underline' : 'hover:underline'}
                                >
                                    <a href={`#${item.id}`} onClick={() => setActiveSection(item.id)}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    {showMenu && (
                        <ul className="flex laptop:hidden bg-accent-1 w-full text-right flex-col gap-6 py-5 pr-6 mt-23px text-lg shadow-bottom-2xl">
                            {navItems.map((item) => (
                                <li key={item.id} className={item.id === activeSection ? 'underline' : ''}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => {
                                            setActiveSection(item.id);
                                            setShowMenu((oldVal) => !oldVal);
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}

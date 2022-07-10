import { useEffect, useState } from 'react';

export default function Header() {
    const navItems = [
        { id: 'pagrindinis', name: 'Pagrindinis' },
        { id: 'apieMane', name: 'Apie mane' },
        { id: 'paslaugos', name: 'Paslaugos' },
        { id: 'susisiekite', name: 'Susisiekite' },
    ];
    const [showMenu, setShowMenu] = useState(false);
    const [showDesktopMenu, setShowDesktopMenu] = useState(true);

    useEffect(() => {
        ['load', 'resize'].forEach(function (type) {
            window.addEventListener(type, () => {
                const laptopBreakPoint = 992;
                if (laptopBreakPoint > window.innerWidth) setShowDesktopMenu(false);
                else setShowDesktopMenu(true);
            });
        });

        window.dispatchEvent(new Event('load'));

        const navItem = document.querySelector('#primary-nav');

        if (navItem !== null) {
            const navHeight = navItem.scrollHeight;
            document.documentElement.style.setProperty('--scroll-padding', `${navHeight - 1}px`);
        }

        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav ul li');
        window.addEventListener('scroll', () => {
            let current: string = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - sectionHeight) {
                    if (section.getAttribute('id') !== null) {
                        current = String(section.getAttribute('id'));
                    }
                }
            });

            navLi.forEach((li) => {
                li.classList.remove('underline');
                if (li.classList.contains(current)) {
                    li.classList.add('underline');
                }
            });
        });
    }, [showDesktopMenu, showMenu]);

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
                                    className={`${
                                        item.id === 'pagrindinis'
                                            ? `${item.id} underline`
                                            : `${item.id} hover:underline`
                                    }`}
                                >
                                    <a href={`#${item.id}`}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                    {showMenu && (
                        <ul className="flex laptop:hidden bg-accent-1 w-full text-right flex-col gap-6 py-5 pr-6 mt-23px text-lg shadow-bottom-2xl">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} onClick={() => setShowMenu((oldVal) => !oldVal)}>
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

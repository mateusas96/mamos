import React, { useState } from 'react';

export default function Header() {
    const navItems = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="text-center sticky top-0 laptop:p-10 p-6 z-20 transition-all">
            <div className="absolute bg-white top-0 right-0 bottom-0 left-0 z-10 d-block transition duration-300 ease-in-out" />
            <div className="z-20">
                <div className="z-20 relative laptop:block hidden">Header name</div>
                <div className="z-20 relative laptop:hidden flex justify-between">
                    <div>Header name</div>
                    <button onClick={() => setShowMenu((oldVal) => !oldVal)}>
                        <img src="./menu.png" alt="menu" />
                    </button>
                </div>
                <nav className="laptop:relative absolute w-full h-auto -ml-6 z-20 transition-all duration-300 ease-in-out">
                    <ul className="mobile:hidden laptop:flex justify-center gap-6 pt-4">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>
                    {showMenu && (
                        <ul className="mobile:flex laptop:hidden bg-white w-full text-right flex-col gap-6 py-10 pr-6 ">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <a href="">{item}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}

import React from 'react';

export default function MainSection() {
    return (
        <section className="w-full laptop:flex bg-accent-1">
            {/* left-side */}
            <div className="laptop:w-1/2 laptop:px-10 px-4 laptop:py-32 py-16">
                <h1 className="laptop:text-7xl text-5xl">Hello, so good to see you!</h1>
                <div className="text-xl laptop:py-16 pt-10 pb-4">
                    I help small and medium-sized businesses grow their audience and brand recognition through social
                    media.
                </div>
                <button className="bg-primary-btn text-white mt-4 py-3 px-10 text-xl">Contact me</button>
            </div>
            {/* right-side */}
            <div className="laptop:w-1/2 laptop:px-6 px-4 laptop:mt-0 -mt-10 laptop:pb-0 pb-8">
                <img className="w-full h-full" src="./iStock-1383506907.jpg" alt="s" />
            </div>
        </section>
    );
}

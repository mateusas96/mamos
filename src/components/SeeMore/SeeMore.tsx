import { ReactNode, useId, useState } from 'react';

type SeeMoreProps = {
    preview: ReactNode;
    children: ReactNode;
};

export default function SeeMore({ preview, children }: SeeMoreProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();

    return (
        <div className="mt-2">
            {preview}

            <div
                id={contentId}
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'grid-rows-[1fr] opacity-100 pointer-events-auto'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div className="pt-2">{children}</div>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-[5px]">
                <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
                <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="group inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-white hover:shadow"
                >
                    <span>{isOpen ? 'Rodyti mažiau' : 'Rodyti daugiau'}</span>
                    <span
                        className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden="true"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </button>
                <span className="h-px flex-1 bg-black/20" aria-hidden="true" />
            </div>
        </div>
    );
}

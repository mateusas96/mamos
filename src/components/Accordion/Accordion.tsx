import { useId, useState } from 'react';

type AccordionProps = {
    title: string;
    content: string;
};

export default function Accordion({ title, content }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentId = useId();

    return (
        <div className="w-full border rounded border-black/20">
            <button
                type="button"
                className="flex w-full items-center cursor-pointer justify-between gap-4 text-left hover:bg-black/10 p-4 rounded transition-colors duration-300"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <span className="font-semibold text-lg">{title}</span>
                <span
                    className={`text-3xl leading-none transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                >
                    +
                </span>
            </button>

            <div
                id={contentId}
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'grid-rows-[1fr] opacity-100 pointer-events-auto'
                        : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <p className="p-4 leading-relaxed text-lg">{content}</p>
                </div>
            </div>
        </div>
    );
}

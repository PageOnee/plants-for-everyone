import React, { useState } from "react";
import "./Accordion.css";

interface AccordionItem {
    image: string;
    header: string;
    text: string;
}

interface ImageAccordionProps {
    items: AccordionItem[];
}

export const ImageAccordion: React.FC<ImageAccordionProps> = ({ items }) => {
    const [active, setActive] = useState<number>(0);

    const handleToggle = (index: number) => setActive(index);

    return (
        <section className="image-accordion">
            {items.map((item, index) => {
                const isActive = active === index ? "active" : "";
                return (
                    <div
                        key={item.image}
                        className={`image-accordion-item ${isActive}`}
                        onClick={() => handleToggle(index)}
                    >
                        <img src={item.image} alt={item.header} />
                        <div className="content">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <div>
                                <h2>{item.header}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

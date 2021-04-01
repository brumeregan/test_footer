import React, { useState } from "react";
import {Chevron} from "./Chevron";
import {AccordionStyled, AccordionTitle,AccordionContent} from "./styles";

export const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        setIsOpen((state) => !state);
    }

    return (
        <AccordionStyled>
            <AccordionTitle onClick={toggleAccordion}>
                {title}
                <Chevron width={10} fill={"#777"} />
            </AccordionTitle>

            <AccordionContent
                isOpen={isOpen}
            >
                {content}
            </AccordionContent>
        </AccordionStyled>
    );
}


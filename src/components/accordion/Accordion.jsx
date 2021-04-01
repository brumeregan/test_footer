import React, { useState } from "react";
import {AccordionStyled, AccordionTitle,AccordionContent, ChevronStyled} from "./styles";

export const Accordion = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        setIsOpen((state) => !state);
    }

    return (
        <AccordionStyled>
            <AccordionTitle onClick={toggleAccordion}>
                {title}
                <ChevronStyled isOpen={isOpen} />
            </AccordionTitle>

            <AccordionContent
                isOpen={isOpen}
            >
                {content}
            </AccordionContent>
        </AccordionStyled>
    );
}


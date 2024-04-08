import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import React from "react";


const faqs = [
    {
        question: 'Where?',
        answer: 'Avalanche is the Yetis\' home.'
    },
    {
        question: 'Supply and Mint Price?',
        answer: 'There are only 666 Yetis living on Avalanche. The mint price is REDACTED.'
    },
    {
        question: 'What are 404 Tokens?',
        answer: '...'
    }
]

export const Faq = () => {
    return faqs.map((faq, index) => (
            <AccordionItem key={index} value={"item-" + index} className="border-stone-800">
                <AccordionTrigger className="font-jakarta text-2xl py-10">{faq.question}</AccordionTrigger>
                <AccordionContent className="font-roboto text-lg pb-6">
                    {faq.answer}
                </AccordionContent>
            </AccordionItem>
    ))
}
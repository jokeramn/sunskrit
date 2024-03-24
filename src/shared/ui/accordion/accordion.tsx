import { useState } from "react";
import styles from './accordion.module.scss';
import { AccordionDataType } from "shared/model";
import { AccordionItem } from "./accordion-item";
import { accordionData } from "./model";

export type AccordionProps = {
    data: AccordionDataType[];
}
export const Accordion = () => {
    const [accordion, setAccordion] = useState<Omit<AccordionDataType, 'handleClick'>[]>(accordionData);

    const handleClick =(id: number) => {
        setAccordion((prevState) => {
            return prevState.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }
                return item;
            });
        });
    }


    return (
        <div className={styles.accordion}>
            {accordion.map(({img, icon, id, ...rest}) => {
                return (
                    <AccordionItem
                        id={id}
                        key={id}
                        handleClick={(id) => handleClick(id)}
                        img={img}
                        icon={icon}
                        {...rest}
                    />
                )
            })}
        </div>
    )
}

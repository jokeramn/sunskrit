import { AccordionDataType } from "shared/model/types";
import gift from "icons/gift.svg";
import chevronDown from "icons/chevron-down.svg";
import { Fragment } from "react";
import percent from "icons/percent.svg";
import checkbox from "icons/checkbox.svg";
import { Text } from "shared/ui";

export const accordionData: Omit<AccordionDataType, 'handleClick'>[] = [
    {
        img: {
            src: gift,
            alt: 'подарок',
        },
        icon: {
            src: chevronDown,
            alt: 'стрелка',
        },
        textContent:
            <Fragment>
                <Text color="additional">400 </Text><Text color="primary">приветсвенных бонусов</Text>
            </Fragment>,
        content: "За регистрацию ты получишь 400 бонусов, которые можно списать уже со следующего посещения",
        isActive: false,
        id: 1,
    },
    {
        img: {
            src: percent,
            alt: 'проценты',
        },
        icon: {
            src: chevronDown,
            alt: 'стрелка',
        },
        textContent:
            <Fragment>
                <Text color="primary">кэшбэк </Text>
                <Text color="additional">3</Text>
                <Text color="primary">%,</Text>
                <Text color="additional">6</Text>
                <Text color="primary">% и </Text>
                <Text color="additional">9</Text>
                <Text color="primary">%</Text>
            </Fragment>,
        content: "Бонусная система состоит из 3-х уровней, где 3% - минимальный кэшбэк,  а 9% - максимальный",
        isActive: false,
        id: 2,
    },
    {
        img: {
            src: checkbox,
            alt: 'чекбокс',
        },
        icon: {
            src: chevronDown,
            alt: 'стрелка',
        },
        textContent:
            <Fragment>
                <Text color="additional">1 </Text>
                <Text color="primary">бонус = </Text>
                <Text color="additional">1</Text>
                <Text color="primary"> рубль</Text>
            </Fragment>,
        content: "Счет можно закрыть списав до 100% бонусов",
        isActive: false,
        id: 3
    },
];

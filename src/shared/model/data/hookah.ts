import hookah from "icons/hookah.svg";
import human from "icons/human.svg";
import { HookahDataType } from "shared/model/types";

export const shishas: HookahDataType = {
    title: 'кальяны',
    menu: [
        {
            human: {
                src: human,
                count: '1'
            },
            hookah: {
                src: hookah,
                count: '1',
            },
            id: 1,
            price: 1200
        },
        {
            human: {
                src: human,
                count: '2-4'
            },
            hookah: {
                src: hookah,
                count: '1',
            },
            id: 2,
            price: 1400
        },
        {
            human: {
                src: human,
                count: '5-6'
            },
            hookah: {
                src: hookah,
                count: '2',
            },
            id: 3,
            price: 2600
        },
        {
            human: {
                src: human,
                count: '7-8'
            },
            hookah: {
                src: hookah,
                count: '3',
            },
            id: 4,
            price: 3800
        }
    ]
}

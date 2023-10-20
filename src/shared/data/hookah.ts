import { MenuHookah } from "~/shared";
import hookah from "images/shisha.png";
import { ReactComponent as HumanIcon } from "icons/man.svg";

export const menuHookah: MenuHookah[] = [
    {
        countHuman: 1,
        icon: HumanIcon,
        countHookah: 1,
        image: hookah,
        value: 1200,
        id: 1,
    },
    {
        countHuman: "2-4",
        icon: HumanIcon,
        countHookah: 1,
        image: hookah,
        value: 1400,
        id: 2,
    },
    {
        countHuman: "5-6",
        icon: HumanIcon,
        countHookah: 2,
        image: hookah,
        value: 2600,
        id: 3,
    },
    {
        countHuman: "7-8",
        icon: HumanIcon,
        countHookah: 3,
        image: hookah,
        value: 3800,
        id: 4,
    },
];

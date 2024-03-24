import { ReactNode } from "react";

export type ImgType = {
    src: string;
    alt: string;
}

export type AccordionDataType = {
    img: ImgType;
    textContent: string | ReactNode;
    icon: ImgType;
    content: string;
    handleClick: (id:number) => void;
    isActive: boolean;
    id: number;
}

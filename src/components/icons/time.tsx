import { FC, SVGProps } from "react";

export const TimeIcon: FC<SVGProps<SVGElement>> = ({
                                                        width,
                                                        height,
                                                        strokeWidth
                                                    }) => (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 22.5176C18.0228 22.5176 22.5 18.0404 22.5 12.5176C22.5 6.99473 18.0228 2.51758 12.5 2.51758C6.97715 2.51758 2.5 6.99473 2.5 12.5176C2.5 18.0404 6.97715 22.5176 12.5 22.5176Z" stroke="white" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.5 6.51758V12.5176L16.5 14.5176" stroke="white" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);

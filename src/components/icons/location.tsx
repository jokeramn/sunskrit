import { FC, SVGProps } from "react";

export const LocationIcon: FC<SVGProps<SVGElement>> = ({
                                                        width,
                                                        height,
                                                        strokeWidth,
                                                    }) => (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_613_344)">
            <path
                d="M21.5 10.5176C21.5 17.5176 12.5 23.5176 12.5 23.5176C12.5 23.5176 3.5 17.5176 3.5 10.5176C3.5 8.13063 4.44821 5.84144 6.13604 4.15362C7.82387 2.46579 10.1131 1.51758 12.5 1.51758C14.8869 1.51758 17.1761 2.46579 18.864 4.15362C20.5518 5.84144 21.5 8.13063 21.5 10.5176Z"
                stroke="white" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12.5 13.5176C14.1569 13.5176 15.5 12.1744 15.5 10.5176C15.5 8.86072 14.1569 7.51758 12.5 7.51758C10.8431 7.51758 9.5 8.86072 9.5 10.5176C9.5 12.1744 10.8431 13.5176 12.5 13.5176Z"
                stroke="white" stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_613_344">
                <rect width="24" height="24" fill="white" transform="translate(0.5 0.517578)"/>
            </clipPath>
        </defs>
    </svg>

);

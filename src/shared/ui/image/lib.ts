import { RefObject, useEffect, useState } from "react";

export const useImagePreload = (src: string) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src

        const handleLoad = () => setImageLoaded(true);

        image.addEventListener('load', handleLoad);

        return () => image.removeEventListener('load', handleLoad);
    }, [src]);


    return {
        imageLoaded
    };
};

export const useImageVisible = (ref: RefObject<HTMLImageElement>): boolean => {
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(ref.current)
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                const { innerHeight } = window;
                console.log('top', top,'innerHeight',innerHeight )
                setImageVisible(top  === 350);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);

    return imageVisible;
};

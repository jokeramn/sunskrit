import { FC } from "react";
import { useImagePreload } from "shared/ui/image/lib";
import { FadeLoader } from "react-spinners";

type ImageWithPreloadType = {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
}

export const ImageWithPreload: FC<ImageWithPreloadType> =
    ({
         src,
         alt,
         height,
         width
     }) => {
        const imageLoaded = useImagePreload(src);

        return (
            <>
                {imageLoaded ? (
                    <img src={src} alt={alt} height={height} width={width} loading="lazy"/>
                ) : (
                    <FadeLoader color="#C77544"/>
                )}
            </>
        );
    };





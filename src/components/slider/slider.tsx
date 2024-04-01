import ReactImageGallery from "react-image-gallery";
import styles from './slider.module.scss';
import { images } from "components/slider/data";

export const Slider = () => {

    return (
        <ReactImageGallery
            showPlayButton={false}
            showBullets={true}
            items={images}
            showFullscreenButton={false}
            showNav={false}
            additionalClass={styles.wrapper}
        />
    )
}

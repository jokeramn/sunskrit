import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./map.module.scss";

export const MapYandex = () => {
    return (
        <div className={styles.map}>
            <YMaps>
                <Map
                    width='100dvw'
                    height={350}
                    defaultState={{
                        center: [59.947195724018826,30.35962423718247],
                        zoom: 17,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    options={{
                        autoFitToViewport: 'always',
                        copyrightUaVisible: false
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[59.947195724018826,30.35962423718247]} />
                </Map>
            </YMaps>
        </div>
    )
}

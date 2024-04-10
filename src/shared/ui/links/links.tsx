import { FC } from "react";
import styles from "./links.module.scss";
import { Link } from "react-router-dom";
import { LinkDataType } from "shared/model/types";

type LinksProps = {
    links: LinkDataType[]
}
export const Links: FC<LinksProps> = ({links}) => {

    return (
        <div>
            <ul className={styles.linksContent}>
                {
                    links.map((link) =>
                        <li key={link.key} className={styles.link}>
                            <Link to={link.to}>
                                <img width={20} height={20} src={link.src} alt="ссылка"/>
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

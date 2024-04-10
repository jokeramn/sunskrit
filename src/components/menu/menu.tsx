import { FC, RefObject, useEffect, useState } from "react";
import { Header } from "components/header";
import { Nav } from "components/nav";
import { menuData } from "components/menu/data";
import { links } from "shared/model/data";

type MenuProps = {
    sectionRefs: RefObject<HTMLDivElement>[];
    scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
};
export const Menu: FC<MenuProps> = ({sectionRefs, scrollToSection}) => {
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        if (!activeMenu) {
            document.body.style.removeProperty('overflow');

            return;
        }

        document.body.style.overflow = 'hidden';
    }, [activeMenu]);

    const handleClick = () => {
        setActiveMenu(prevState => !prevState)
    };


    return (
        <>
            <Header setActiveMenu={handleClick}/>
            <Nav
                scrollToSection={scrollToSection}
                sectionRefs={sectionRefs}
                links={links}
                items={menuData}
                isActive={activeMenu}
                setActive={handleClick}
            />
        </>
    )
}

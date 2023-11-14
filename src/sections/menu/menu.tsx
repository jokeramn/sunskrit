import React, { RefObject, useState } from "react";
import styles from "./menu.module.css";
import { MenuHookahItem } from "components/menu/menu-hookah-item";
import { Drinks, InfoDrinkData, menuColdDrinks, menuHookah, menuTea } from "shared";
import cx from "classnames";
import { ReactComponent as InfoIcon } from "icons/info.svg";
import { createPortal } from "react-dom";
import { Modal } from "shared/ui/modal";

export type InfoDrinkDataT = InfoDrinkData & {
    name: string;
} | null;

export const Menu = ({menuRef}: { menuRef: RefObject<HTMLDivElement> }) => {
    const [openModal, setOpenModal] = useState(false);
    const [infoDrink, setInfoDrink] = useState<InfoDrinkDataT>(null);

    const handleOpenModal = (drink?: Drinks) => {
        setOpenModal((prevState) => !prevState)

        if (drink?.info) {
            const drinkAndName = {
                name: drink.name,
                ...drink.info
            } as InfoDrinkDataT;

            setInfoDrink(drinkAndName)
        } else {
            setInfoDrink(null)
        }
    }


    return (
        <div className={styles.root} ref={menuRef}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <h1 className={styles.title}>кальяны</h1>
                    <div className={styles.menuWrapper}>
                        {menuHookah.map((hookahItem) => (
                            <MenuHookahItem key={hookahItem.id} {...hookahItem} />
                        ))}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.subInfo}>
                            Цена действует при
                            единовременном заказе кальянов.
                        </div>
                        <div className={styles.subInfo}>
                            Цена не меняется в зависимости от того, курит гость или нет.
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <h1 className={styles.title}>чай</h1>
                    {menuTea.map((tea) => (
                        <div key={tea.id} className={styles.drinksWrapper}>
                            <h4 className={styles.subTitle}>{tea.type}</h4>
                            {tea.drinks.map((drink) => (
                                <div className={styles.drinkWrapper}>
                                    <div className={styles.descriptionInfoWrapper}>
                                        <div className={styles.description}>
                                            <span className={styles.descTitle}>{drink.name}</span>
                                            {!!drink?.description &&
                                                <span className={styles.descText}>{drink.description}</span>}
                                        </div>
                                        <button type="button"
                                                onClick={() => handleOpenModal(drink)}>
                                            <InfoIcon className={styles.infoIcon}/>
                                        </button>
                                    </div>
                                    <div className={styles.priceDrinkWrapper}>
                                        {!!drink?.volume && <span className={styles.volumeDrink}>{drink.volume}</span>}
                                        <span className={styles.price}>{drink.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <p className={styles.subInfo}>*** ДОБАВКИ ЛИМОН/МЯТА 50 ***</p>
                    <h1 className={styles.title}>напитки</h1>
                    {menuColdDrinks.map((coldDrink) => (
                        <div key={coldDrink.id} className={styles.drinksWrapper}>
                            <h4 className={styles.subTitle}>{coldDrink.type}</h4>
                            {coldDrink.drinks.map((drink) => (
                                <div className={styles.drinkWrapper}>
                                    <div className={styles.description}>
                                        <span
                                            className={cx(styles.descTitle, {[styles.addColorDesc]: drink.description})}>{drink.name}</span>
                                        {!!drink?.description &&
                                            <span className={styles.descText}>/{drink.description}/</span>}
                                    </div>
                                    <div className={styles.priceDrinkWrapper}>
                                        {!!drink?.volume && <span className={styles.volumeDrink}>{drink.volume}</span>}
                                        <span className={styles.price}>{drink.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            {createPortal(<Modal handleOpenModal={handleOpenModal} isOpen={openModal}>
                <div>
                    <h1 style={{
                        textAlign: 'center',
                        fontSize: '18px',
                        marginBottom: '15px',
                    }}>{infoDrink?.name}</h1>
                    <div>
                        <span style={{
                            color: '#ec9f50',
                            fontWeight: "bold",
                        }}>Состав: </span>
                        <span>{infoDrink?.structure.toLowerCase().replace(/\./g, '')}</span>
                    </div>
                    {
                        infoDrink?.aroma && (
                            <div>
                                <span style={{
                                    color: '#ec9f50',
                                    fontWeight: "bold",
                                }}>Аромат: </span>
                                <span>{infoDrink?.aroma.toLowerCase().replace(/\./g, '')}</span>
                            </div>
                        )
                    }
                    <div>
                        <span style={{
                            color: '#ec9f50',
                            fontWeight: "bold",
                        }}>Время заваривания: </span>
                        <span>{infoDrink?.brewTime}</span>
                    </div>
                </div>
            </Modal>, document.body)}
        </div>
    )
};

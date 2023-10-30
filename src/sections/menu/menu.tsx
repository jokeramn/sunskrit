import styles from "./menu.module.css";
import { MenuHookahItem } from "components/menu/menu-hookah-item";
import { menuColdDrinks, menuTea, menuHookah } from "shared";


export const Menu = () => {
    return (
        <div className={styles.root}>
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
                                    <div className={styles.description}>
                                        <span className={styles.descTitle}>{drink.name}</span>
                                        {!!drink?.description && <span className={styles.descText}>{drink.description}</span>}
                                    </div>
                                    <div className={styles.priceDrinkWrapper}>
                                        {!!drink?.volume && <span className={styles.volumeDrink}>{drink.volume}</span>}
                                        <span className={styles.price}>{drink.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    <h1 className={styles.title}>напитки</h1>
                    {menuColdDrinks.map((coldDrink) => (
                        <div key={coldDrink.id} className={styles.drinksWrapper}>
                            <h4 className={styles.subTitle}>{coldDrink.type}</h4>
                            {coldDrink.drinks.map((drink) => (
                                <div className={styles.drinkWrapper}>
                                    <div className={styles.description}>
                                        <span className={styles.descTitle}>{drink.name}</span>
                                        {!!drink?.description && <span className={styles.descText}>{drink.description}</span>}
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
        </div>
    )
};

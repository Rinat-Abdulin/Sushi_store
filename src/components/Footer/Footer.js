import React from 'react'
import styles from './Footer.module.scss'
// import gp from '../../gp.png'
// import AppS from '../../AppS.png'

function Footer() {
    return (
        <div className={styles.footer_main}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <p>
                            <a href="#!">
                                <img className={styles.logo_main}
                                     src="https://www.aislelabs.com/wp-content/uploads/2020/04/1280px-YO_Sushi_logo.svg_.png"
                                     alt="Суши-стор"
                                />
                            </a>
                        </p>
                        <p>
                            Доставка суши — онлайн сервис заказа суши и других блюд в Москве.
                        </p>
                        <p>ООО "ВОЙСТЕЛ" ОГРН 1177746857551</p>
                        <p>
                            Прием заказов: <br/> c 10:00 до 4:45 <br/><br/> <a href="tel: +74951234567">+7 (495) 123-45-67</a>
                        </p>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.footer_main__title}>Sushi-store</p>
                        <nav className={styles.nav_list}>
                            <ul className={styles.nav_list__layout}>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        О нас
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Новости и акции
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Меню ресторанов
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Детям
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Франчайзинг
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Сотрудничество
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.footer_main__title}>Доставка</p>
                        <nav className={styles.nav_list}>
                            <ul className={styles.nav_list__layout}>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Условия доставки
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__li}>
                                        Адреса ресторанов
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p className={styles.footer_main__title1}>
                            <a href="#!">Программа лояльности GoodFoodClub</a>
                        </p>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.footer_main__title}>Юридическая информация</p>
                        <nav className={styles.nav_list}>
                            <ul className={styles.nav_list__layout}>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__link}>
                                        Политика конфиденциальности
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__link}>
                                        Пользовательское соглашение
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_listt__link}>
                                        Положение по обработке персональных данных
                                    </a>
                                </li>
                                <li className={styles.nav_list__item}>
                                    <a href="#!" className={styles.nav_list__link}>
                                        Пользовательское соглашение по программе лояльности
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

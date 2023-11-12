import Image from "next/image";
import styles from './Menu.module.css';
import { BsPlusCircle } from 'react-icons/bs';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import AccountMenu from "./AccountMenu/AccountMenu";


const Menu = () => {
    const iconColor = "var(--icon)";

    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <Image src='/celebolg.png' alt="logo" width={120} height={58} />
            </div>
            <div>Search Button</div>
            <div className={styles.icons}>
                <li><BsPlusCircle /></li>
                <li><LiaShoppingBagSolid /></li>
                <li><AccountMenu /></li>
            </div>
        </header>
    );
};

export default Menu;
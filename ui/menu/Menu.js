import Image from "next/image";
import styles from './Menu.module.css';
import { BsPlusCircle } from 'react-icons/bs';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import AccountMenu from "./AccountMenu/AccountMenu";
import Link from "next/link";


const Menu = () => {

    return (
        <header className={styles.header}>
            <section className={styles.container}>
                <div className={styles.logo}>
                    <Image src='/celebolg.png' alt="logo" width={120} height={58} />
                </div>
                <div>Search Button</div>
                <div className={styles.icons}>
                    <li><BsPlusCircle /></li>
                    <li><LiaShoppingBagSolid /></li>
                    <li><AccountMenu /></li>
                </div>
            </section>
            <nav className={styles.nav}>
                <Link className='link' href='/shop'>
                    <li>Sale</li>
                </Link>
                <Link className='link' href='/feed'>
                    <li>Feed</li>
                </Link>
                <Link className='link' href='/shop/women'>
                    <li>Women</li>
                </Link>
                <Link className='link' href='/shop/men'>
                    <li>Men</li>
                </Link>
                <Link className='link' href='/shop/children'>
                    <li>Children</li>
                </Link>
                <Link className='link' href='/shop/accessories'>
                    <li>Accessories</li>
                </Link>
            </nav>
        </header>
    );
};

export default Menu;
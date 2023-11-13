import styles from './PrimaryCard.module.css';
import Image from "next/image";

const PrimaryCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <Image src='/Tees_2x.webp' alt='image' width={384} height={506} />
            </div>
            <div className={styles.description}>
                <h3>New Arrivals</h3>
                <div className={styles.buttons}>
                    <span className="cardLink">Shop Women's</span>
                    <span className="cardLink">Shop Men's</span>
                </div>
            </div>
        </div>
    );
};

export default PrimaryCard;
import Image from 'next/image';
import styles from './SecondaryCard.module.css'

const SecondaryCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <Image src='/VN_Apparel_Women_2x.webp' alt='image' width={365} height={432} />
            </div>
            <div className={styles.description}>
                <h3>New Arrivals</h3>
                <div className={styles.buttons}>
                    <span className="secondaryCardLink">Shop Now</span>
                </div>
            </div>
        </div>
    );
};

export default SecondaryCard;
import styles from './StoreCard.module.css';
import Image from "next/image";

const StoreCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <Image src="/Gucci-Lunar-New-Year-2023-Campaign08.jpg" width={376} height={404} alt="cover" />
            </div>

            <div className={styles.desc}>
                <div className={styles.dp}>
                    <Image src="/images (1).jfif" width={100} height={100} alt="cover" />
                </div>
                <div className={styles.profile}>
                    <h4>Kendall Jenner <span><Image src="/6928921.png" width={20} height={20} alt="cover" /></span></h4>
                    <p>Model • 13K Followers</p>
                </div>
            </div>
        </div>
    );
};

export default StoreCard;
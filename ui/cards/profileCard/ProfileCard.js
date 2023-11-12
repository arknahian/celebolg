import styles from './ProfileCard.module.css';
import Image from "next/image";

const ProfileCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cover}>
                <Image src="/VN_Women_UW_2x.webp" width={400} height={500} alt="cover" />
            </div>

            <div className={styles.desc}>
                <div className={styles.dp}>
                    <Image src="/images (1).jfif" width={60} height={60} alt="cover" />
                </div>
                <div className={styles.profile}>
                    <h4>Kendall Jenner <span><Image src="/6928921.png" width={20} height={20} alt="cover" /></span></h4>
                    <p>Model • 13K Followers</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
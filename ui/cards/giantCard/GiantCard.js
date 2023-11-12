import styles from './GiantCard.module.css';
import Image from "next/image";

const GiantCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <Image
                    src='/Shorts_2x.webp'
                    alt='img'
                    width={900}
                    height={800}
                />
            </div>
            <div className={styles.desc}>
                <h3>Warm Weather Shorts</h3>
                <p>Casual styles made from soft cotton with easy stretch.</p>
            </div>
            <div className={styles.buttons}>
                <div className="outlined-button">
                    Shop Women
                </div>
                <div className="outlined-button">
                    Shop Men
                </div>
            </div>
        </div>
    );
};

export default GiantCard;
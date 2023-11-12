import styles from './FeedCard.module.css';
import Image from "next/image";
import { BsBagHeart } from 'react-icons/bs';
import { Heart, MessageCircle } from 'react-feather';


const FeedCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div>
                    <div className={styles.post}>
                        <Image src="/VN_Women_UW_2x.webp" width={500} height={800} alt="cover" />
                    </div>

                    <div className={styles.desc}>
                        <div className={styles.dp}>
                            <Image src="/images (1).jfif" width={60} height={60} alt="cover" />
                        </div>
                        <div className={styles.profile}>
                            <h4>Kendall Jenner <span><Image src="/6928921.png" width={20} height={20} alt="cover" /></span></h4>
                            <p>Model • 13K Followers</p>
                        </div>

                        <div className='secondary-outlined-button' style={{ marginLeft: '26px' }}>
                            Follow
                        </div>
                    </div>
                </div>
                <div className={styles.social}>
                    <span className={styles.socialIcons}><Heart size={35} stroke-width={1.4} className={styles.icon} /> <span className={styles.number}>12.3K</span></span>
                    <span className={styles.socialIcons}><MessageCircle size={35} stroke-width={1.4} className={styles.icon} /> <span className={styles.number}>568</span></span>
                    <span className={styles.socialIcons}><BsBagHeart size={35} className={styles.icon} /> <span className={styles.number}>200</span></span>
                </div>
            </div>

            <article className={styles.article}>
                <p>Affiliated With <b>Calvin Klein</b></p>
                <br />
                <p>Embracing the golden hour as I chase my dreams on this beautiful evening. 🌅✨ There's something truly magical about the way the sun paints the sky with hues of pink and orange. It's a reminder that every day is a canvas, see more</p>
            </article>

        </div>
    );
};

export default FeedCard;
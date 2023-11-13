'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageSlider.module.css';

const ImageSlider = () => {
    return (
        <Swiper
            spaceBetween={0}
            // slidesPerView={1}
            loop={true}
            pagination={{
                clickable: true
            }}
            navigation={true}
            // autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: false
            // }}

            modules={[Autoplay, Pagination, Navigation]}
            centeredSlides={true}

            className={styles.container}
        >
            <SwiperSlide>
                <Image src='/Essential_Shirts_2x.webp' width={2048} height={890} alt='image' />
                <div className={styles.description}>
                    <h1>Explore The Rock's Outfit</h1>
                    <p>Save up to 50% of your spend on the rock's outfit</p>
                    <button className='secondary-outlined-button'>Visit The Store</button>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <Image src='/Denim_Men_2x.webp' width={2048} height={890} alt='image' />
                <div className={styles.description}>
                    <h1>Explore The Rock's Outfit</h1>
                    <p>Save up to 50% of your spend on the rock's outfit</p>
                    <button className='secondary-outlined-button'>Visit The Store</button>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <Image src='/Outerwear_Men_2x.webp' width={2048} height={890} alt='image' />
                <div className={styles.description}>
                    <h1>Explore The Rock's Outfit</h1>
                    <p>Save up to 50% of your spend on the rock's outfit</p>
                    <button className='secondary-outlined-button'>Visit The Store</button>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <Image src='/Suiting_Women_2x.webp' width={2048} height={890} alt='image' />
                <div className={styles.description}>
                    <h1>Explore The Rock's Outfit</h1>
                    <p>Save up to 50% of your spend on the rock's outfit</p>
                    <button className='secondary-outlined-button'>Visit The Store</button>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default ImageSlider;
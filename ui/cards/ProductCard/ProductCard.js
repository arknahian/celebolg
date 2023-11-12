import styles from './ProductCard.module.css';
import Image from "next/image";
import Rating from '@mui/material/Rating';

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.thumb}>
                <Image src='/11002670_540_main.jfif' width={400} height={500} alt='product' />
            </div>
            <div className={styles.desc}>
                <h3>Smooth Cotton Stretch Baby T-Shirt</h3>
                <p><span className={styles.brand}>Brand</span> Calvin Klein</p>
                <h4>$30</h4>
                <div className={styles.rating}><Rating sx={{color: 'black'}} name="read-only" value={4.5} readOnly precision={0.5} /> <span className={styles.review}>(20)</span></div>
            </div>
        </div>
    );
};

export default ProductCard;
import ProductCard from "./../../cards/ProductCard/ProductCard";
import styles from '../../scrollableContainer.module.css';
import Title from "@/ui/Title/Title";

const Trending = () => {
    return (
        <div>
            <Title></Title>
            <div className={styles.container}>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default Trending;
import styles from './TopStore.module.css';
import StoreCard from "./../../cards/storeCard/StoreCard";
import Title from "./../../Title/Title";

const TopStore = () => {
    return (
        <div>
            <Title></Title>
            <div className={styles.container}>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
            </div>
        </div>
    );
};

export default TopStore;
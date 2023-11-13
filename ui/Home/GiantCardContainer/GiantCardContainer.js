import styles from './GiantCardContainer.module.css';
import GiantCard from "./../../cards/giantCard/GiantCard";

const GiantCardContainer = () => {
    return (
        <div className={styles.container}>
            <GiantCard></GiantCard>
            <GiantCard></GiantCard>
        </div>
    );
};

export default GiantCardContainer;
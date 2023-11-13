import styles from '../../container.module.css';
import PrimaryCard from "../../cards/primaryCard/PrimaryCard";

const CardContainer = () => {
    return (
        <div className={styles.container}>
            <PrimaryCard />
            <PrimaryCard />
            <PrimaryCard />
            <PrimaryCard />
            <PrimaryCard />
        </div>
    );
};

export default CardContainer;
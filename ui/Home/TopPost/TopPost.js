import styles from './TopPost.module.css';
import Title from "./../../Title/Title";
import ProfileCard from "./../../cards/profileCard/ProfileCard";

const TopPost = () => {
    return (
        <div>
            <Title></Title>
            <div className={styles.container}>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
            </div>
        </div>
    );
};

export default TopPost;

import PrimaryCard from "./../ui/cards/primaryCard/PrimaryCard";
import styles from './page.module.css';
import SecondaryCard from "./../ui/cards/secondaryCard/SecondaryCard";
import GiantCard from "./../ui/cards/giantCard/GiantCard";
import ProductCard from "./../ui/cards/ProductCard/ProductCard";
import ProfileCard from "./../ui/cards/profileCard/ProfileCard";
import StoreCard from "./../ui/cards/storeCard/StoreCard";
import FeedCard from "./../ui/cards/FeedCard/FeedCard";

const HomePage = () => {
  return (
    <div className={styles.test}>
      <FeedCard></FeedCard>
      <FeedCard></FeedCard>
      <FeedCard></FeedCard>
      <FeedCard></FeedCard>
    </div>
  );
};

export default HomePage;

export function generateMetadata() {
  return {
    title: 'Celebolg® | The Fashion World',
    description: 'Home Page Description'
  }
}
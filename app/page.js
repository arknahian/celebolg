import styles from './page.module.css';
import Hero from "./../ui/Home/hero/Hero";
import PrimaryCardContainer from "../ui/Home/PrimaryCardContainer/PrimaryCardContainer";
import GiantCardContainer from "./../ui/Home/GiantCardContainer/GiantCardContainer";
import Trending from "./../ui/Home/Trending/Trending";
import TopPost from "./../ui/Home/TopPost/TopPost";
import TopStore from "./../ui/Home/TopStore/TopStore";

const HomePage = () => {
  return (
    <div className={styles.interface}>
      <Hero />
      <section className={styles.container}>
        <PrimaryCardContainer />
        <GiantCardContainer></GiantCardContainer>
        <Trending></Trending>
        <TopPost></TopPost>
        <TopStore></TopStore>
      </section>
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
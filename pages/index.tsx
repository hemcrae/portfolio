import { StylesProvider } from "@chakra-ui/system";
import { Hero } from "../components/Hero/Hero";
import Bio from "./Bio/Bio";
import styles from "./index.module.scss";
import Projects from "./Projects/Projects";
import TechStack from "./TechStack/TechStack";

const Home = () => {
  return (
    <>
      <Hero>
        <div className={styles.home}>
          <h1 className={styles.heading}>Hi, I'm Halley McRae.</h1>
          <h2 className={styles.headingSmall}>Web Developer</h2>
        </div>
      </Hero>
      <Bio />
      <TechStack />
      <Projects />
    </>
  );
};

export default Home;

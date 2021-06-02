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
        <div className={styles.container}>
          <div className={styles.home}>
            <div className={styles.topWrap}>
              <h1 className={styles.heading}>Hi, I'm Halley McRae.</h1>
              <h2 className={styles.headingSmall}>
                I'm a Web Developer, lover of everything coffee, and an avid
                stargazer.
              </h2>
            </div>
            <div className={styles.wrap}>
              <h3 className={styles.headingWelcome}>
                Welcome to my portfolio!
              </h3>
            </div>
          </div>
        </div>
      </Hero>
      <Bio />
      <TechStack />
      <Projects />
    </>
  );
};

export default Home;

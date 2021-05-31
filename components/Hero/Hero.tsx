import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import Particles from "../Particles/Particles";
import { particlesConfig } from "../Particles/Particles.config";
import styles from "./Hero.module.scss";

export const Hero: React.FC = ({ children }) => {
  const scrollClickHandler = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  return (
    <div className={styles.hero}>
      <div className={styles.content}>{children}</div>
      <button onClick={scrollClickHandler} className={styles.button}>
        <ChevronDownIcon w={40} h={40} />
      </button>
      <Particles
        className={styles.particles}
        id="tsparticles"
        options={{ ...particlesConfig }}
      />
    </div>
  );
};

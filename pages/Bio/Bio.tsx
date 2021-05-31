import { Container, Box } from "@chakra-ui/react";
import React from "react";
import styles from "./Bio.module.scss";

export const Bio: React.FC = () => {
  return (
    <div className={styles.container}>
      <Box className={styles.bio}>
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.content}>
          I am a problem solver at heart, with a passion for continuous skill
          development. Dedicated team-leader who works effectively in
          collaborative cross-functional settings. I am enthusiastic about
          switching into the field of web development because I am passionate
          about developing products that will help others.
        </p>
      </Box>
      <Box className={styles.bio}>
        <h1 className={styles.header}>Why web development?</h1>
        <p className={styles.content}>
          I've always loved to build things and spent years trying to find a
          career path that I utilize my creativity. In 2018, I was presented
          with the opportunity to co-found a tech start-up. Not being
          well-versed in the tech world, I naturally said, yes. I'm a problem
          solver, and spent countless hours everyday reading and researching -
          quickly finding myself engulfed in the tech-world. Fast forward to
          fall 2020, I'm still a university student who spent more time on
          Codeacademy and Edabit, than I did hours per day in class lectures.
          Shortly after coming to this realization, I took a leap of faith, and
          in February 2021 I dove into the Web Development Bootcamp at
          BrainStation. I learned more than I could have imagined, and I
          couldn't be happier with my career path.
        </p>
      </Box>
    </div>
  );
};

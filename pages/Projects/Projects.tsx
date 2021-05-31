import styles from "./Projects.module.scss";
import React from "react";
import { Box } from "@chakra-ui/layout";
import { Github } from "@icons-pack/react-simple-icons";

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Projects</h1>
      <Box className={styles.projects}>
        <div className={styles.contents}>
          <div className={styles.project}>
            <h2 className={styles.heading}>Pomodoro Keeper</h2>
            <p className={styles.content}>
              An application that tracks time and boosts productivity by
              implementing the Pomodoro Technique. Users can generate detailed
              reports to better understand and improve their workflow.
            </p>
          </div>
          <div className={styles.repoWrap}>
            <a
              className={styles.anchor}
              href="https://github.com/hemcrae/pomodoro-keeper"
            >
              <Github />
            </a>
          </div>
          <h3 className={styles.smallHeading}>Tech Stack:</h3>
          <p className={styles.content}>
            React, TypeScript, Nestjs, Express.js, MongoDB, Mongoose, Netlify,
            Auth0, Browser Notification API, SCSS and Material-UI.
          </p>
        </div>
        <div className={styles.contents}>
          <div className={styles.project}>
            <h2 className={styles.heading}>M.A.S.H Game</h2>
            <p className={styles.content}>
              An application that mirrors the classic middle school game called
              M.A.S.H (Mansion, Apartment, Shack or House). There are four
              categories: Spouse, Job, Animal and Transport. My project partner
              and I built an API to populate the categories, each containing 6
              options. The user selects 3 of the 6 options per category and
              Submit button, randomly generates one of their chosen options for
              each category.
            </p>
          </div>
          <div className={styles.repoWrap}>
            <a
              className={styles.anchor}
              href="https://github.com/hemcrae/mari-halley-mash"
            >
              <Github />
            </a>
          </div>
          <h3 className={styles.smallHeading}>Tech Stack:</h3>
          <p className={styles.content}>React, Express.js, SCSS and Axios.</p>
        </div>
      </Box>
    </div>
  );
};

export default Projects;

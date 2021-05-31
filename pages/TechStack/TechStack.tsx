import React from "react";
import styles from "./TechStack.module.scss";
import {
  Auth0,
  Typescript,
  Chakraui,
  Express,
  Github,
  Html5,
  Javascript,
  MaterialUi,
  Mongodb,
  Nestjs,
  Netlify,
  NextDotJs,
  NodeDotJs,
  ReactJs,
  Sass,
  Npm,
} from "@icons-pack/react-simple-icons";
import { Box } from "@chakra-ui/layout";

export const TechStack = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.skills}>Skills</h1>
      <div className={styles.wrap}>
        <Box className={styles.box}>
          <h1 className={styles.heading}>JavaScript</h1>
          <Javascript />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>TypeScript</h1>
          <Typescript />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>React</h1>
          <ReactJs />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Nextjs</h1>
          <NextDotJs />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Node</h1>
          <NodeDotJs />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Express</h1>
          <Express />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Nestjs</h1>
          <Nestjs />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>HTML5</h1>
          <Html5 />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>SASS/SCSS</h1>
          <Sass />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>SASS/SCSS</h1>
          <Sass />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>MongoDB</h1>
          <Mongodb />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Auth0</h1>
          <Auth0 />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>GitHub</h1>
          <Github />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Netlify</h1>
          <Netlify />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Material UI</h1>
          <MaterialUi />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Chakra UI</h1>
          <Chakraui />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>NPM Libraries</h1>
          <Npm />
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Mongoose</h1>
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>Web API's</h1>
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>API's</h1>
        </Box>
        <Box className={styles.box}>
          <h1 className={styles.heading}>User Auth</h1>
        </Box>
      </div>
    </div>
  );
};

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
import { Box, Container, SimpleGrid } from "@chakra-ui/layout";

const techList = [
  {
    name: "JavaScript",
    Img: Javascript,
  },
  {
    name: "TypeScript",
    Img: Typescript,
  },
  {
    name: "React",
    Img: ReactJs,
  },
  {
    name: "Next.js",
    Img: NextDotJs,
  },
  {
    name: "Node.js",
    Img: NodeDotJs,
  },
  {
    name: "Express",
    Img: Express,
  },
  {
    name: "Nest.js",
    Img: Nestjs,
  },
  {
    name: "HTML5",
    Img: Html5,
  },
  {
    name: "SASS",
    Img: Sass,
  },
  {
    name: "MongoDB",
    Img: Mongodb,
  },
  {
    name: "Auth0",
    Img: Auth0,
  },
  {
    name: "GitHub",
    Img: Github,
  },
  {
    name: "Netlify",
    Img: Netlify,
  },
  {
    name: "Material UI",
    Img: MaterialUi,
  },
  {
    name: "Chakra UI",
    Img: Chakraui,
  },
  {
    name: "NPM Libraries",
    Img: Npm,
  },
  {
    name: "Mongoose",
  },
  {
    name: "Web API's",
  },
  {
    name: "API's",
  },
  {
    name: "User Auth",
  },
];

const TechStack = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.skills}>Skills</h1>
      <SimpleGrid
        className={styles.wrap}
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        {techList.map((item) => (
          <Box className={styles.box}>
            {item.Img && <item.Img />}
            <h3 className={styles.heading}>{item.name}</h3>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TechStack;

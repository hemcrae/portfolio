import { useEffect, RefObject, MutableRefObject } from "react";
import { Container, ISourceOptions, Main, tsParticles } from "tsparticles";

interface IParticlesProps {
  id: string;
  options: ISourceOptions;
  init?: (main: Main) => void;
  loaded?: (container: Container) => void;
  container?: RefObject<Container>;
  className?: string;
}

export default function Particles(props: IParticlesProps): JSX.Element {
  useEffect(() => {
    tsParticles.init();
    if (props.init) {
      props.init(tsParticles);
    }

    tsParticles.load(props.id, props.options).then((container) => {
      if (!container) {
        return;
      }

      if (props.container) {
        (props.container as MutableRefObject<Container>).current = container;
      }

      if (props.loaded) {
        props.loaded(container);
      }
    });
  }, [
    props,
    props.container,
    props.id,
    props.options,
    props.init,
    props.loaded,
  ]);

  return <div className={props.className} id={props.id}></div>;
}

"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFirePreset } from "@tsparticles/preset-fire";
import { loadSlim } from "@tsparticles/slim";
import presset from "./particles.json";

export default function ParticlesWrapp() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
          // await loadFirePreset(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      const particlesLoaded = (container) => {
        // console.log(container);
      };
    
      // const options = useMemo(
      //   () => (presset),[]
      // );

      if (init) {
        return (
          <Particles
            id="tsparticles"
            className="z-0 absolute w-full h-full"
            particlesLoaded={particlesLoaded}
            url="/json/particles.json"
            // options={options}
          />
        );
      }
    
      return <></>;
}

"use client"
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFirePreset } from "@tsparticles/preset-fire";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesWrapp() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
          await loadFirePreset(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);

      const particlesLoaded = (container) => {
        // console.log(container);
      };
    
      const options = useMemo(
        () => ({
            autoPlay: true,
            fpsLimit: 120,
            background: {
                "color": {
                  "value": "#ffffff"
                },
                // "image": "url('/images/BG.jpg')",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover",
                "opacity": 1
            },
            preset : "fire"
        }),[]
      );

      if (init) {
        return (
          <Particles
            id="tsparticles"
            className="z-0 absolute w-full h-full"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        );
      }
    
      return <></>;
}

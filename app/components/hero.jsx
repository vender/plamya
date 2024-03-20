"use client"
import { motion } from "framer-motion";
import ParticlesWrapp from "./particles";
import AnimatedText from "./animatedText";
import Button from "./buttonWrapp";

export default function Hero() {
    const placeholderText = [
        { type: "heading1", text: "Монтаж Систем" },
        { type: "heading2", text: "Безопасности" },
    ];

    const descText = { type: "paragraph", text: "Мы создаем не только отдельные системы, но и объединяем их в единый комплекс безопасности с общим центром управления и диспетчеризации." };

    const container = {
        visible: {
          transition: {
            staggerChildren: 0.08
          }
        }
    };

    return (
        <>
            <ParticlesWrapp />

            <div className="relative flex place-items-center justify-center w-full h-full">
                <motion.div
                    className="z-10 lg:w-1/2 flex justify-end"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <video src="/video/shild.webm" autoPlay playsInline loop muted preload="auto"></video>
                </motion.div>

                    <motion.div
                        className="hidden lg:flex flex-col justify-items-start basis-1/2 z-20 w-1/2 max-w-xl pr-8"
                        initial="hidden"
                        animate="visible"
                        variants={container}
                        transition={{
                            duration: 3,
                            // delay: 5,
                            ease: [0, 0.71, 0.2, 1.01],
                            // opacity: {duration: 2, delay: 1.5},
                            // y: {duration: 1, delay: 1.5}
                        }}
                    >
                            {placeholderText.map((item, index) => {
                                return <AnimatedText {...item} key={index} className="font-mono uppercase text-[4rem]" />;
                            })}
                            <AnimatedText {...descText} className="text-lg font-sans mt-5 mb-8" />
                            
                            {/* <Button 
                                text="Получить КП"
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{
                                    ease: [0, 0.71, 0.2, 1.01],
                                    opacity: {duration: 2, delay: 1.5},
                                }}
                            /> */}

                    </motion.div>
            </div>
        </>
    )
}

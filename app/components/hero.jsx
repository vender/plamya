"use client"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Hero() {
    return (
        <div
            className="relative flex place-items-center justify-center w-full h-full"
        >
            <motion.div
                className="absolute z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <ReactPlayer className="max-w-full mt-[-50px]" url='/video/shild.webm' playing loop controls={false} volume={0} width={850} height={840} />
            </motion.div>

            <motion.div
                className="absolute z-20 max-w-2xl mt-[350px]"
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0" }}
                transition={{
                    duration: 3,
                    delay: 3,
                    ease: [0, 0.71, 0.2, 1.01],
                    opacity: {duration: 2, delay: 3},
                    y: {duration: 1, delay: 3}
                }}
            >
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase tracking-tight text-white sm:text-6xl drop-shadow-lg">
                        Монтаж систем безопасности
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-lg">
                        Решение проблем безопасности, любых строительных объектов.
                    </p>
                </div>
            </motion.div>

        </div>
    )
}

"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around overflow-hidden">

      <motion.div 
        id="logo" 
        className="relative flex place-items-center justify-center w-full h-full"
      >
        <motion.div
          className="absolute max-w-none z-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
          <ReactPlayer url='/video/shild.webm' playing loop controls={false} volume={0} width={850} height={840} />
          {/* <Image
            src="/images/shild.png"
            alt="Logo"
            width={472}
            height={540}
            priority
          /> */}
        </motion.div>

      </motion.div>

    </main>
  );
}

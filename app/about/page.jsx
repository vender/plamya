"use client"
import { motion, MotionConfig } from "framer-motion";
import ParticlesWrapp from "../components/particles-hexagon";

export default function About() {
    return (
      <>
        <ParticlesWrapp />
      
        <section className='py-12 text-white z-20'>
          <div className='container'>
            <motion.h1
              className='mb-12 text-3xl font-bold font-mono'
              initial={{
                opacity: 0,
                y: "-100%"
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 1.5,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              О компании
            </motion.h1>
            
            <div className='flex gap-12 font-sans'>
              <motion.p
                initial={{ 
                  opacity: 0,
                  x: "-100%"
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                Компания ООО «Пламя» является перспективным и динамически развивающимся предприятием
                на отечественном рынке, которая занимается решением задач, связанных с решением вопросов
                пожарной безопасности и комплексному обеспечению ваших объектов необходимыми
                системами и оборудованием.
              </motion.p>
              <motion.p
                initial={{ 
                  opacity: 0,
                  x: "-100%"
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                Противопожарная безопасность зданий и сооружений - это те условия, без которых не может
                работать ни одно предприятие, административное или общественное учреждение.
              </motion.p>
              <motion.p
                initial={{ 
                  opacity: 0,
                  x: "-100%"
                }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                Важнейшим направлением деятельности общества с ограниченной ответственностью «Пламя»
                являются техническое обслуживание и планово-предупредительный ремонт систем
                безопасности телекоммуникаций и связи:
              </motion.p>
            </div>
          </div>
        </section>
      </>
    )
  }
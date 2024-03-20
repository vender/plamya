import { motion } from "framer-motion";

export default function Button({text, initial, animate, transition}) {

  return (
    <motion.button
        type="submit"
        className="flex w-40 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 font-sans uppercase"
        initial={initial}
        animate={animate}
        transition={transition}
    >
        {text}
    </motion.button>
  )
}

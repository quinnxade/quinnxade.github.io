import { motion } from "framer-motion";

export default function TamagotchiIcon({ src, position = "top-right" }) {
  const pos = {
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <motion.img
      src={src}
      className={`absolute w-16 h-16 ${pos[position]}`}
      whileHover={{ scale: 1.3, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );
}

// src/pages/about.jsx
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-gray-800 px-6 py-16 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-3xl font-semibold mb-4 font-title">quinnxade</h1>
        <p className="text-md text-gray-600 italic mb-8">
          a little bit about me.
        </p>
        <p className="mb-4">
          Hi! I’m Quinnxade, an artist slowly finding my way back to creating after a long break. I first fell in love with art in 4th grade, drawing huge 2D house maps for little ghost characters with my friends. From that point on, I always looked forward to “art days” in our PE/music/art rotation. Music and PE never stood a chance.</p>

          <p className="mb-4">I’ve always been a messy painter (still am). There are childhood photos of me absolutely covered in paint, and that part NEVER left. In middle school, I was interested in everything.. Warrior Cats, OCs, different styles.. but I always felt like I was playing catchup with my art. High school was when I really leaned into realism. I fell in love with the grid method, Prismacolors, and poured my perfectionist soul into photorealistic portraits. That effort paid off: I earned “Best of Show” at the 2021 Houston Livestock Show and Rodeo, a gold medal in 2020, and advanced to State in the VASE competition with a self-portrait for my AP portfolio 'phobias'.</p>

          <p className="mb-4 ">After graduating high school in 2021, I didn’t make art for three years. I was busy as a computer science student. In Summer 2024, I bought an iPad and Procreate using internship money, and I was finally able to pursue my passion again. Since December 2024, I've been learning how to translate my traditional style into digital work. It’s a weird mix of my old realism habits, surreal ideas I wish I could implement, and a complete MIXED BAG of concepts (I draw a lot of animals, or day to day human things, but sometimes I just want to illustrate someone gouging their own eyes out... you know, balance).</p>

          <p className="mb-4 ">Right now, I’m still finding my voice. Some pieces are beautiful and peaceful, others are unsettling or emotionally heavy. I get stuck a lot. I have way too many WIPs. My creative process mostly involves gathering references from Pinterest and jamming to music or background noise. I work best when I’m doing art challenges with friends. It keeps me going.</p>

          <p className="mb-4 "> Outside of art, I love F1, cybersecurity/tech concepts, gaming, snakes, and cats (so don’t be surprised if those themes sneak into my work). I want my art to feel alive and to make you feel something, even if it’s a little off. I’m figuring out where it’s all going, but I’m excited to find out.
        </p>

        <Link href="/" className="inline-block mt-10 text-sm text-blue-600 hover:underline">
          ← back to home
        </Link>
      </motion.div>
    </div>
  );
}

// pages/index.jsx
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import Link from "next/link";
import Head from 'next/head';


export default function Home() {
  return (
    
    <div className="bg-[#EFF6E0] min-h-screen text-[#01161E] font-sans relative overflow-x-hidden">
    <Head>
      <title>quinnxade&rsquo;s portfolio</title>
      <meta name="description" content="Online art portfolio of Quinn Xade" />
    </Head>

      {/* HERO */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
        <motion.img
          src="/Piro.png"
          alt="Tamagotchi Icon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="w-24 h-24 mb-4 drop-shadow-xl"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#124559] tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          quinnxade
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-[#598392] max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          hiiiii! welcome to my online art portfolio
        </motion.p>
        <motion.p
          className="mt-8 text-xs text-[#AEC3B0]"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ↓ scroll to explore ↓
        </motion.p>
      </div>

      {/* FEATURED WORKS */}
      {/* <motion.section
        className="relative py-24 px-6 bg-[#AEC3B0]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      > */}
      {/* Header */}
      {/* <div className="flex flex-col items-center justify-center mb-10 relative">
          <div className="flex items-center gap-4">
            <motion.img
              src="/Dopple.png"
              alt="Nowie Icon"
              className="w-10 h-10 cursor-pointer"
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <motion.h2
              className="bg-[#EFF6E0] px-6 py-3 rounded-xl shadow-md rotate-[-1deg] text-[#124559] text-2xl md:text-4xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              ✨ Featured Works ✨
            </motion.h2>

            <motion.img
              src="/Ropo.png"
              alt="Ropo Icon"
              className="w-10 h-10 cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </div>
        </div>

        <p className="text-[#01161E] mb-6 text-center max-w-xl mx-auto">
          A curated selection of recent and meaningful pieces.
        </p>

        {/* Removed the dashed border and white background for the carousel container */}
      {/* <div className="relative shadow-md">
          <Carousel />
        </div>
      </motion.section> */}

      {/* ABOUT ME */}
      <motion.section
        className="py-32 px-6 text-center bg-[#598392] relative"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute left-8 top-10 rotate-[-5deg] text-[#EFF6E0] font-medium text-sm">
          🌱 i draw random little things 🌱
        </div>
        <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
        <div className="max-w-2xl mx-auto bg-[#EFF6E0] p-8 rounded-lg shadow-md text-[#01161E]">
          <p>
            I used to focus on prismacolors + graphite realism. I achieved “Best of Show” at the Houston Rodeo in 2021, a gold medal in 2020, and a trip to State at VASE in 2021. I took a few years off for university, but now I’m back and working digitally! I&rsquo;m blending that my traditional foundation with more emotional themes.
          </p>
          <p className="mt-2 mb-2">
            My style’s still figuring itself out! Sometimes it’s surreal themes, sometimes it’s bugs and human body, and sometimes it’s just a silly lil animal.
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 bg-[#124559] text-white text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-[#0d3342] transition"
          >
            read more →
          </Link>
        </div>
      </motion.section>

      {/* PORTFOLIO LINK */}
      <motion.section
        className="pt-24 pb-8 px-6 text-center bg-[#124559]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-white">View my full portfolio</h2>
        <p className="mb-6 max-w-xl mx-auto text-[#AEC3B0]">
          Organized recent work and older pieces!
        </p>
        <Link
          href="/portfolio"
          className="inline-block bg-white text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-[#EFF6E0] transition text-[#124559]"
        >
          explore the archive →
        </Link>
      </motion.section>

      {/* THUMBNAIL STRIP */}
      <motion.section
        className="pt-2 pb-6 px-0 bg-[#124559] overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-start items-center max-w-full">
          {[
            "/artwork/9thgrade_rodeo.JPG",
            "/artwork/Bill.jpg",
            "/artwork/coulrophobia.jpeg",
            "/artwork/gore_sketches.JPG",
            "/artwork/bug_sketches.jpeg",
            "/artwork/Entomophobia.jpg",
            "/artwork/pre-mirror-break.JPG",
            "/artwork/SkeletonCockroachesVASE.JPG",
            "/artwork/TrebuchetFinal.JPG",
            "/artwork/21stCenturyCowboy.jpeg",
            "/artwork/Somniphobia.jpg",
            "/artwork/rainbow_cat_final.JPG",
            "/artwork/OCQuinn.JPG"
          ].map((file, index) => (
            <motion.div
              key={index}
              className="h-40 w-auto flex-shrink-0"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={file}
                alt={`Artwork ${index + 1}`}
                className="h-full w-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* COMMISSIONS */}
      <motion.section
        className="relative py-32 px-6 text-center bg-[#01161E]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-10 left-6 rotate-[-8deg] text-white font-semibold text-sm">
          🧷 art shop stuff ... !
        </div>
        <h2 className="text-3xl font-bold mb-4 text-white">Quinnxade art shop will be launching soon!</h2>
        <p className="mb-6 max-w-xl mx-auto text-[#AEC3B0]">
          My shop is not open yet but check back later...!
        </p>
        <a
          href="mailto:quinnxade@gmail.com"
          className="inline-block bg-[#EFF6E0] text-sm font-medium px-6 py-2 rounded-full shadow-md hover:bg-white transition text-[#124559]"
        >
          contact me →
        </a>
      </motion.section>



      {/* FOOTER */}
      <footer className="bg-[#AEC3B0] text-center text-sm py-6 text-[#124559]">
        © {new Date().getFullYear()} quinnxade
      </footer>
    </div>
  );
}
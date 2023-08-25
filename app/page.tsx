"use client";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardTwitter from "@/components/card";
import ProjectCard from "@/components/project";
import Certificate from "@/components/certificate";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hi,I am&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>FullStack&nbsp;</h1>
        <br />
        <h1 className={title()}>Developer</h1>
      </div>

      <div className="py-6 md:px-3">
        <motion.nav
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <CardTwitter />
        </motion.nav>
      </div>

      <div className="my-14 py-14">
        <h1 className={title()}>Project 💕&nbsp;</h1>
      </div>
      <div>
        <ProjectCard />
      </div>
      <div className="my-14 py-14">
        <h1 className={title()}>Certificate &nbsp;</h1>
      </div>
      <div>
        <Certificate />
      </div>
    </section>
  );
}

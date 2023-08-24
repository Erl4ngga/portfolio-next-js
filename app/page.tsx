import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import CardTwitter from "@/components/card";
import ProjectCard from "@/components/project";
import Certificate from "@/components/certificate";

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
        <CardTwitter />
      </div>
      <div>
        <h2
          className={subtitle({ class: "mt-6 font-bold text-white text-2xl" })}
        >
          My Project
        </h2>
      </div>
      <div>
        <ProjectCard />
      </div>
      <div>
        <h2
          className={subtitle({ class: "mt-6 font-bold text-white text-2xl" })}
        >
          certificate
        </h2>
      </div>
      <div>
        <Certificate />
      </div>
    </section>
  );
}

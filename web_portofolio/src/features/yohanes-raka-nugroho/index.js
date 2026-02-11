"use client";

import { ExperienceCard } from "@/components/ui/ExperienceCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { ProjectCard } from "@/components/ui/ProjectsCard";
import { experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function MainPage() {
  return (
    <div className="bg-primary min-h-screen text-primary">
      {/* NAVBAR */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto px-12 py-4 flex items-center justify-between">
          <div className="font-semibold text-[25px]">Yohans</div>

          <nav className="flex gap-6 items-center">
            <button>Work</button>
            <button>About</button>
            <button>Experience</button>
            <PrimaryButton className="btn-primary">Hire Me</PrimaryButton>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="px-12 py-20 flex justify-between items-center ">
        <div className="flex flex-col gap-5">
          <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 badge-available">
            Available for new project
          </div>
          <div>
            <div className="heading-1">Hi There</div>
            <div className="heading-1">I'm Yohanes Raka Nugroho</div>
          </div>
          <div className="heading-3">
            An Informatics Students at Gunadarma University & <br />
            Data Enthusiast
          </div>
          <div className="flex gap-3">
            <PrimaryButton className="btn-primary">View Work</PrimaryButton>
            <PrimaryButton className="border-2 ">About Me</PrimaryButton>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl ">
          <Image
            src="/images/photo.jpg"
            alt="Yohanes Raka Nugroho"
            width={460}
            height={460}
            className="object-cover"
          />
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-secondary px-12 py-14 flex gap-12">
        <div className="flex-2 gap-3">
          <div className="mb-3.5">
            <div className="heading-3">The Journey</div>
            <div className="text-body">
              I am an Informatics student at Gunadarma University, driven by a
              mission to solve real-world problems through creative
              technological solutions. I possess a versatile interest in
              Front-End, Back-End development, and Data science, constantly
              seeking ways to build efficient and impactful applications. <br />
              <br />
              Beyond technical expertise, I am committed to professional growth
              by refining my public speaking, team coordination, and research
              skills. I thrive in collaborative environments where technology
              meets communication, aiming to contribute meaningfully to the
              digital landscape while continuously expanding my horizons.
            </div>
          </div>
          <div>
            <div className="heading-4 mb-2">Tech Stack</div>
            <div className="flex gap-2">
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                Python
              </div>
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                Next JS
              </div>
              <div className="w-fit text-body border-2 rounded-xl px-3 py-0.5 techstack-badge">
                GoLang
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="heading-3 mb-5">Experience</div>
          {experiences.map((exp) => (
            <ExperienceCard
              title={exp.title}
              comp={exp.comp}
              key={exp.id}
              desc={exp.desc}
              image={exp.image}
            />
          ))}
        </div>
      </div>

      <div className="w-full bg-primary px-12 py-16 ">
        <div className="heading-3">Featured Project</div>
        <div className="text-body mb-2">
          A selection of recent projects that combine technical complexity with
          elegant aesthetics.
        </div>
        {/* Projects */}
        <div className="flex gap-4">
          {projects.map((pro) => (
            <ProjectCard
              key={pro.id}
              title={pro.title}
              desc={pro.shortDesc}
              image={pro.image}
              type={pro.role}
              tech={pro.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

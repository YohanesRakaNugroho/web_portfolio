"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
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

      {/* MAIN CONTENT */}
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

      <div className="bg-secondary px-12 py-14 flex gap-12">
        <div className="flex-1 gap-3">
          <div className="mb-3.5">
            <div className="heading-3">The Journey</div>
            <div className="text-body">
              I am an Informatics student at Gunadarma University, driven by a
              mission to solve real-world problems through creative
              technological solutions. I possess a versatile interest in
              Front-End, Back-End development, and Data science, constantly
              seeking ways to build efficient and impactful applications. <br/><br />
              Beyond technical expertise, I am committed to professional growth
              by refining my public speaking, team coordination, and research
              skills. I thrive in collaborative environments where technology
              meets communication, aiming to contribute meaningfully to the
              digital landscape while continuously expanding my horizons.
            </div>
          </div>
          <div>
            <div className="heading-4">Tech Stack</div>
            <div>tech stack badge</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="heading-3">Experience</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}

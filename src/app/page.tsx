import React, { Fragment } from "react";
import profile from "../../public/static/profile.webp";
import Image from "next/image";
import { Work } from "@/components/work";
import transformar from "../../public/static/work/transformar.webp";
import himchari from "../../public/static/work/himchari.webp";
import descubreYa from "../../public/static/work/descubreya.webp";
import sinisterVacations from "../../public/static/work/sinister-vacations.webp";
import disturbingHome from "../../public/static/work/disturbing-home.webp";
import { socialLinks, transformarLink } from "@/constants/links";
import { HeroButton } from "@/components/heroButton";
import Socials from "@/components/socials/Socials";

const HomePage = () => {
  return (
    <Fragment>
      <div className="container flex my-32 justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="animate-typing overflow-hidden text-secondary text-[5rem] font-bold tracking-wider">
            Welcome
          </h1>
          <h2 className="text-[2rem] max-w-xl">
            My name is Roberto. I&apos;m based in Quito, Ecuador, and I love
            software.
          </h2>
          <div className="mt-9 space-x-3">
            <HeroButton href="/work" text="Let's Talk" className="text-xl" inverted />
            <HeroButton href="/work" text="See Portfolio" className="text-xl" />
          </div>
        </div>
        <div>
          <Image
            className="rounded-full w-full max-w-[450px] shadow-lg"
            src={profile}
            alt="profile"
          />
        </div>
      </div>
      <div className="bg-secondary text-primary py-14">
        <div className="container text-center">
          <h3 className="text-[2rem] font-bold mb-6">
            Let me introduce myself.
          </h3>
          <p className="text-2xl max-w-2xl mx-auto">
            I am a Computer Science Engineer with a passion for Software and Web
            Development. Dedicated to continuous improvement, my drive is
            translating ideas into practical and beautiful solutions through
            code.
          </p>
        </div>
      </div>

      <div className="container my-20">
        <h3 className="text-[2rem] font-bold mb-6">Featured Work</h3>
        <div className="grid grid-cols-2 gap-x-16 gap-y-16">
          <Work
            alt="transformar"
            description="Transformar gathers information about the bioeconomy potential in Latin America and the Caribbean by identifying opportunities to utilize and transform biomass into valuable products and services."
            technologies={["React", "SemanticUI"]}
            image={transformar}
            link={transformarLink}
            title="Transformar"
          />
          <Work
            alt="himchari"
            description="Mobile app for Himchari Dojang, a taekwondo academy in Quito, Ecuador. It's goal is to automate processes and provide a platform for students to track their progress, access schedules and resources."
            technologies={["Ionic", "Firebase", "React"]}
            image={himchari}
            link={transformarLink}
            title="Himchari Mobile"
          />
          <Work
            alt="descubreya"
            description="Mobile application for listing restaurants and entertainment venues with the aim of providing exposure to small and medium-sized businesses."
            technologies={["Ionic", "Firebase", "Angular"]}
            image={descubreYa}
            link={transformarLink}
            title="Descubre Ya!"
          />
          <Work
            alt="sinister vacations"
            description="Unleash chaos in a stranded paradise turned nightmare. Battle undead horrors, navigate a hidden lab, and fight for survival in this intense First Person Shooter."
            technologies={["Unity", "C#", "Game Design"]}
            image={sinisterVacations}
            link={transformarLink}
            title="Sinister Vacations"
          />
          <Work
            alt="disturbing home"
            description="Prepare to be captivated by the unsettling atmosphere of 'Disturbing Home VR.' Experience the suspense of a haunting virtual reality horror game as you navigate a ominous house and uncover hidden clues."
            technologies={["Unity", "C#", "Virtual Reality"]}
            image={disturbingHome}
            link={transformarLink}
            title="Disturbing Home VR"
          />
        </div>
      </div>

      <div className="container">
        <h3 className="text-[2rem] font-bold text-center mb-5">Get in Touch</h3>
        <div className="max-w-2xl mx-auto text-center border rounded-3xl py-16">
          <h4 className="text-xl">Seeking to work together or have any questions?</h4>
          <HeroButton href={`mailto:${socialLinks.email}`} text="Email me!" className="my-8" />
          <h4 className="text-lg mb-4">Or reach out!</h4>
          <div className="flex justify-center space-x-4">
            <Socials icon="github" website={socialLinks.github} />
            <Socials icon="linkedin" website={socialLinks.linkedin} />
            <Socials icon="instagram" website={socialLinks.instagram} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;

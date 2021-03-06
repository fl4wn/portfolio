import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
//Logos
import githubLogo from "../assets/logo/github.png";
import linkedinLogo from "../assets/logo/linkedin.png";
import stackoverflowLogo from "../assets/logo/stackoverflow.png";
import twitterLogo from "../assets/logo/twitter.png";
import dribbbleLogo from "../assets/logo/dribbble.png";
//Icons
import { AiFillHtml5, AiOutlineArrowDown } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa";
import { DiCss3, DiPython, DiSass } from "react-icons/di";
import {
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
//GIFS
import instagramBanner from "../assets/project/instagram_banner.gif";
import twitterBanner from "../assets/project/twitter_banner.gif";
import todoBanner from "../assets/project/todo_banner.png";
import Tech from "../components/Tech";

export async function getStaticProps() {
  const res = await axios.get("https://api.github.com/users/fl4wn", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  return {
    props: {
      data: res.data,
    },
  };
}

const Home: NextPage = ({ data }: any) => {
  const [profile, setProfile] = useState<any>(data);

  return (
    <div className="bg-slate-900">
      <Head>
        <html lang="en" />
        <title>Alkım Caner Soydan</title>
        <meta name="description" content="Hi! I'm Alkım Caner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="h-screen flex flex-col items-center justify-center gap-8 md:flex-row border-b border-slate-800">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
            {profile?.avatar_url && (
              <Image src={profile.avatar_url} alt="" layout="fill"></Image>
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="py-2 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Alkım Caner Soydan
            </h1>
            <div className="text-center text-slate-200 bg-slate-700 bg-opacity-20 border border-slate-800 p-2 rounded-md shadow-md select-none">
              Front-end Developer
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a href="https://github.com/fl4wn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={githubLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alkimcaner">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={linkedinLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://stackoverflow.com/users/17507992">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={stackoverflowLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://twitter.com/fl4wn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={twitterLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://dribbble.com/flawn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={dribbbleLogo} alt="" layout="fill"></Image>
                </div>
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="animate-bounce absolute bottom-4 p-2 bg-white bg-opacity-75 text-2xl rounded-full hover:bg-opacity-100 transition duration-500"
          >
            <AiOutlineArrowDown />
          </a>
        </section>

        <section
          id="about"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
            ABOUT ME
          </h2>
          <p className="text-2xl text-slate-400 ">
            Hello! I&apos;m a front-end developer based in Sinop, Turkey. I love
            building web apps.
          </p>
        </section>

        <section
          id="skills"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400">
            MY SKILLS
          </h2>
          <div className="flex justify-center flex-wrap gap-8 text-slate-500">
            <Tech>
              <AiFillHtml5 className="text-4xl" />
              <p>HTML</p>
            </Tech>
            <Tech>
              <DiCss3 className="text-4xl" />
              <p>CSS</p>
            </Tech>
            <Tech>
              <SiJavascript className="text-4xl" />
              <p>JAVASCRIPT</p>
            </Tech>
            <Tech>
              <SiTypescript className="text-4xl" />
              <p>TYPESCRIPT</p>
            </Tech>
            <Tech>
              <SiReact className="text-4xl" />
              <p>REACT</p>
            </Tech>
            <Tech>
              <SiNextdotjs className="text-4xl" />
              <p>NEXT.JS</p>
            </Tech>
            <Tech>
              <SiTailwindcss className="text-4xl" />
              <p>TAILWINDCSS</p>
            </Tech>
            <Tech>
              <DiSass className="text-4xl" />
              <p>SASS</p>
            </Tech>
            <Tech>
              <FaBootstrap className="text-4xl" />
              <p>BOOTSTRAP</p>
            </Tech>
            <Tech>
              <SiFirebase className="text-4xl" />
              <p>FIREBASE</p>
            </Tech>
            <Tech>
              <DiPython className="text-4xl" />
              <p>PYTHON</p>
            </Tech>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Project
              title="Instagram Clone"
              description="Instagram clone made with Next.js"
              image={instagramBanner}
              tech={[
                "Next.js",
                "NextAuth.js",
                "React",
                "Typescript",
                "Firebase",
                "Tailwindcss",
                "Headless UI",
              ]}
              liveLink="https://instagram-clone-flawn.vercel.app"
              sourceLink="https://github.com/fl4wn/instagram-clone"
            />
            <Project
              title="Twitter Clone"
              description="Twitter clone made with React"
              image={twitterBanner}
              tech={["React", "React Router", "Vite", "Firebase"]}
              liveLink="https://twitter-clone-flawn.vercel.app"
              sourceLink="https://github.com/fl4wn/twitter-clone"
            />
            <Project
              title="To Do App"
              description="Simple to do app made with React"
              image={todoBanner}
              tech={["React", "Vite"]}
              liveLink="https://react-todo-flawn.vercel.app"
              sourceLink="https://github.com/fl4wn/react-todo"
            />
          </div>
        </section>

        <section
          id="contact"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-sky-500 to-green-400">
            CONTACT ME
          </h2>
          <div className="flex flex-wrap gap-2">
            <p className="text-2xl text-slate-400 w-fit">
              You can reach me at:
            </p>
            <a href="mailto:alkimcanersoydan@gmail.com" className="group w-fit">
              <span className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-150 transition duration-500">
                alkimcanersoydan@gmail.com
              </span>
              <div className="border-t border-purple-500 w-full origin-left scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Logos
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";
import stackoverflowLogo from "../public/stackoverflow.png";
import twitterLogo from "../public/twitter.png";
import dribbbleLogo from "../public/dribbble.png";
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
    <div className="bg-slate-100">
      <Head>
        <title>Alkım Caner Soydan</title>
        <meta name="description" content="Hi! I'm Alkım Caner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <section className="h-screen flex flex-col items-center justify-center gap-8 md:flex-row bg-gradient-to-b from-slate-900 to-neutral-900">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
            {profile?.avatar_url && (
              <Image src={profile.avatar_url} alt="" layout="fill"></Image>
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="py-2 text-center font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Alkım Caner Soydan
            </h1>
            <div className="text-center text-slate-300 bg-slate-700 bg-opacity-50 p-2 rounded-md shadow-md select-none">
              Front-end Developer
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <a href="https://github.com/fl4wn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md hover:brightness-75 hover:scale-125 transition ease-in-out duration-500">
                  <Image src={githubLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alk%C4%B1m-caner-soydan-7160571a8">
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
            className="animate-bounce absolute bottom-4 p-2 bg-white bg-opacity-75 text-2xl rounded-full"
          >
            <AiOutlineArrowDown />
          </a>
        </section>

        <section
          id="about"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            ABOUT ME
          </h2>
          <p className="text-2xl font-thin text-slate-700 ">
            Hello! I&apos;m a front-end developer based in Sinop, Turkey. I love
            building web apps.
          </p>
        </section>

        <section
          id="skills"
          className="max-w-4xl p-8 mx-auto flex flex-col gap-4"
        >
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-lime-500 to-yellow-400">
            MY SKILLS
          </h2>
          <div className="flex justify-center flex-wrap gap-8 text-slate-400">
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <AiFillHtml5 className="text-4xl" />
              <p>HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <DiCss3 className="text-4xl" />
              <p>CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiJavascript className="text-4xl" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiTypescript className="text-4xl" />
              <p>TYPESCRIPT</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiReact className="text-4xl" />
              <p>REACT</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiNextdotjs className="text-4xl" />
              <p>NEXT.JS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiTailwindcss className="text-4xl" />
              <p>TAILWINDCSS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <DiSass className="text-4xl" />
              <p>SASS</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <FaBootstrap className="text-4xl" />
              <p>BOOTSTRAP</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <SiFirebase className="text-4xl" />
              <p>FIREBASE</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 p-2 rounded-md shadow-md w-28 h-28">
              <DiPython className="text-4xl" />
              <p>PYTHON</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

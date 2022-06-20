import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import githubLogo from "../public/github.png";
import linkedinLogo from "../public/linkedin.png";
import stackoverflowLogo from "../public/stackoverflow.png";
import twitterLogo from "../public/twitter.png";
import dribbbleLogo from "../public/dribbble.png";

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
    <div className="text-white min-h-screen px-2 bg-gradient-to-br from-stone-900 to-neutral-900 flex flex-col">
      <Head>
        <title>Alkım Caner Soydan</title>
        <meta name="description" content="Hi! I'm Alkım Caner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="max-w-[48rem] mx-auto flex-1">
        <section className="flex flex-col items-center gap-8 md:flex-row">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
            {profile?.avatar_url && (
              <Image src={profile.avatar_url} alt="" layout="fill"></Image>
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
            <h1 className="text-center h-12 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              Alkım Caner Soydan
            </h1>
            <div className="text-center text-gray-300">Front-end Developer</div>
            <div className="flex justify-center gap-4">
              <a href="https://github.com/fl4wn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md">
                  <Image src={githubLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alk%C4%B1m-caner-soydan-7160571a8">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md">
                  <Image src={linkedinLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://stackoverflow.com/users/17507992">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md">
                  <Image src={stackoverflowLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://twitter.com/fl4wn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md">
                  <Image src={twitterLogo} alt="" layout="fill"></Image>
                </div>
              </a>
              <a href="https://dribbble.com/flawn">
                <div className="relative w-8 h-8 rounded-md overflow-hidden shadow-md">
                  <Image src={dribbbleLogo} alt="" layout="fill"></Image>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="h-12 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-teal-600 to-amber-400">
            About me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde rem
            veritatis tempora eum facere totam nesciunt commodi incidunt at
            voluptas neque adipisci accusantium, ratione ut sequi cumque,
            ducimus nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad unde rem veritatis tempora eum facere totam nesciunt commodi
            incidunt at voluptas neque adipisci accusantium, ratione ut sequi
            cumque, ducimus nam.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

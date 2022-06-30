import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Repo from "../components/Repo";
import Head from "next/head";

export async function getStaticProps() {
  const res = await axios.get("https://api.github.com/users/fl4wn/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}

const Repositories = ({ data }: any) => {
  const [repos, setRepos] = useState(data);

  return (
    <div className="text-white min-h-screen px-2 flex flex-col bg-slate-900">
      <Head>
        <html lang="en" />
        <title>Alkım Caner Soydan</title>
        <meta name="description" content="Hi! I'm Alkım Caner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-1 mt-[4rem]">
        <section className="max-w-4xl p-8 mx-auto flex flex-col gap-4">
          <h2 className="w-fit font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
            REPOSITORIES
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {repos.map((repo: any) => (
              <Repo repo={repo} key={repo.id} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Repositories;

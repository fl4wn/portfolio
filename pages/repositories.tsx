import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Repo from "../components/Repo";
import Head from "next/head";

export async function getServerSideProps() {
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
    <div className="text-white min-h-screen px-2 bg-gradient-to-br from-stone-900 to-neutral-900 flex flex-col">
      <Head>
        <title>Alkım Caner Soydan</title>
        <meta name="description" content="Hi! I'm Alkım Caner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="max-w-[48rem] mx-auto flex-1">
        <section>
          <h2 className="h-12 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">
            Repositories
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-8">
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

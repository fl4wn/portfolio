import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
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
          <h2 className="h-12 font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-rose-500 to-slate-100">
            Contact me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde rem
            veritatis tempora eum facere totam nesciunt commodi incidunt at
            voluptas neque adipisci accusantium, ratione ut sequi cumque,
            ducimus nam.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ad unde rem veritatis tempora eum facere totam nesciunt commodi
            incidunt at voluptas neque adipisci accusantium, ratione ut sequi
            cumque, ducimus nam.Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

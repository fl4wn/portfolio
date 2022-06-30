import React from "react";

const Repo = ({ repo }: any) => {
  return (
    <a
      href={repo.html_url}
      className="p-2 bg-slate-700 bg-opacity-20 hover:bg-opacity-50 border border-slate-800 rounded-lg shadow-md transition"
    >
      <h3 className="text-xl font-semibold text-slate-200">{repo.name}</h3>
      <p className="text-slate-400">{repo.description}</p>
      <p className="font-thin text-slate-400">{repo.language}</p>
    </a>
  );
};

export default Repo;

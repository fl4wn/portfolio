import React from "react";

const Repo = ({ repo }: any) => {
  return (
    <div className="p-2 bg-slate-800 border-t border-t-slate-700 rounded-lg shadow-md">
      <a href={repo.html_url} className="text-xl font-semibold hover:underline">
        {repo.name}
      </a>
      <p>{repo.description}</p>
      <p className="font-thin">{repo.language}</p>
    </div>
  );
};

export default Repo;

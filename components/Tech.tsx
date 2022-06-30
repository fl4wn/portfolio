import React from "react";

const Tech = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-slate-700 bg-opacity-20 border border-slate-800 p-2 rounded-xl shadow-md w-28 h-28">
      {children}
    </div>
  );
};

export default Tech;

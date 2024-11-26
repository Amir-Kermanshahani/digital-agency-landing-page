import Image from "next/image";
import React from "react";

const SolidSeperator = ({ height }) => {
  return (
    <div
      className={`w-full h-[50vh] bg-[#17202C] -mt-[30vh] border-y border-slate-700 solidSeperator pt-[30vh]`}
    >
      <hr style={{ borderColor: "rgb(51 65 85 / var(--tw-border-opacity))" , marginTop: "-1px"}} />
    </div>
  );
};

export default SolidSeperator;

import React from "react";

const Tittle = (props) => {
  return (
    <>
      <p className="text-5xl pt-4 font-lilita">{props.titleSpanish}</p>
      <p className="text-sm pb-9 font-lilita">{props.titleEnglish}</p>
    </>
  );
};

export default Tittle;

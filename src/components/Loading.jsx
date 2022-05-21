import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Puff height={150} width={150} color="#00f" />
    </div>
  );
};

export default Loading;

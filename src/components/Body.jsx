import React from "react";

const Body = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
      <div className="flex items-center gap-4">
        <div>
          <img
            className="pt-5 rounded-full"
            src="https://live.staticflickr.com/65535/52784740226_cc79f42447_z.jpg"
          />
        </div>
        <div>
            <p className="text-3xl font-lilita">¡Una forma divertida y eficaz de aprender ingles!</p>
        </div>
      </div>
    </div>
  );
};

export default Body;

import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="Loader"
        width={32}
        height={32}
        className="animate-spin"
        // Optional: Use priority if this image is important for initial load
      />
      Loading .....
    </div>
  );
};

export default Loader;

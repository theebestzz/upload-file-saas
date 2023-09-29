"use client";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import dynamic from "next/dynamic";

const CustomCursor = () => {
  return (
    <>
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={false}
          // hasBlendMode={true}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;

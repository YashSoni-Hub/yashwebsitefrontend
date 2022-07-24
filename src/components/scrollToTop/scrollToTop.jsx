import React from "react";

const ScrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1000);
  return <></>;
};

export default ScrollToTop;

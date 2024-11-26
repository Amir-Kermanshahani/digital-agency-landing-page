"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const TopScroll = () => {
  return (
    <ScrollToTop
      smooth
      top={120}
      color="white"
      height="18"
      style={{
        boxShadow: 0,
        background: '#2F3742',
        width: 48,
        height: 48,
        borderRadius: 32,
        paddingLeft: 9,
      }}
    />
  );
};

export default TopScroll;

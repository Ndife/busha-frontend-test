import React from "react";

const RightArrowCircleIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#303030" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22C13.744 22 13.488 21.902 13.293 21.707C12.902 21.316 12.902 20.684 13.293 20.293L17.586 16L13.293 11.707C12.902 11.316 12.902 10.684 13.293 10.293C13.684 9.90201 14.316 9.90201 14.707 10.293L19.707 15.293C20.098 15.684 20.098 16.316 19.707 16.707L14.707 21.707C14.512 21.902 14.256 22 14 22Z"
        fill="#CBD2D9"
      />
      <mask
        id="mask0_6033_87"
        style={{ maskType: "luminance" }}  // Corrected this line
        maskUnits="userSpaceOnUse"
        x="12"
        y="9"
        width="9"
        height="13"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 22C13.744 22 13.488 21.902 13.293 21.707C12.902 21.316 12.902 20.684 13.293 20.293L17.586 16L13.293 11.707C12.902 11.316 12.902 10.684 13.293 10.293C13.684 9.90201 14.316 9.90201 14.707 10.293L19.707 15.293C20.098 15.684 20.098 16.316 19.707 16.707L14.707 21.707C14.512 21.902 14.256 22 14 22Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_6033_87)"></g>
    </svg>
  );
};

export default RightArrowCircleIcon;

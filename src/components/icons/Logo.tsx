import React from "react";

const Logo = () => {
  return (
    <svg
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_0_1"
        style={{ maskType: "alpha" }}  // Corrected to an object style
        maskUnits="userSpaceOnUse"
        x="3"
        y="0"
        width="24"
        height="17"
      >
        <path d="M3.87866 0.452759H26.584V16.1697H3.87866V0.452759Z" fill="white" />
      </mask>
      <g mask="url(#mask0_0_1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.7134 15.3379L23.4192 16.1697L20.7669 11.3652C19.2985 8.70076 16.4951 7.04588 13.4527 7.04588H3.87866L13.2541 1.03136C14.6958 0.1064 16.5883 0.306869 17.8051 1.5133L25.3818 9.02975C27.2285 10.862 26.9027 13.9329 24.7134 15.3379Z"
          fill="#18981D"
        />
      </g>
      <mask
        id="mask1_0_1"
        style={{ maskType: "alpha" }}  // Corrected to an object style
        maskUnits="userSpaceOnUse"
        x="0"
        y="8"
        width="26"
        height="20"
      >
        <path d="M0 8.98019H25.0934V27.9808H0V8.98019Z" fill="white" />
      </mask>
      <g mask="url(#mask1_0_1)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2842 27.9808H10.0199C8.89088 27.9808 7.8641 27.3247 7.38895 26.3015L0.216875 10.8727L0.110079 10.6405C-0.0410642 10.3133 -0.0292986 9.96851 0.101029 9.67663C0.110079 9.65581 0.120487 9.63636 0.130895 9.61554C0.255792 9.37253 0.463501 9.17387 0.725514 9.06844C0.860819 9.01232 1.01015 8.98019 1.16854 8.98019H13.4528C15.7914 8.98019 17.9441 10.2518 19.0731 12.299L21.7869 17.2162L24.6148 22.3392C26.0131 24.8751 24.1803 27.9808 21.2842 27.9808Z"
          fill="#04A700"
        />
      </g>
    </svg>
  );
};

export default Logo;

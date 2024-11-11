import React from "react";

interface CancelIconProps {
  color?: string; 
  size?: number; 
}

const CancelIcon: React.FC<CancelIconProps> = ({ color = "black", size = 16 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M15.4834 12.9889C16.1722 13.6777 16.1722 14.7946 15.4834 15.4834C14.7946 16.1722 13.6777 16.1722 12.9889 15.4834L8 10.4945L3.01108 15.4834C2.32225 16.1722 1.20545 16.1722 0.51662 15.4834C-0.172207 14.7946 -0.172207 13.6777 0.51662 12.9889L5.50554 8L0.51662 3.01108C-0.172207 2.32225 -0.172207 1.20545 0.51662 0.51662C1.20545 -0.172207 2.32225 -0.172207 3.01108 0.51662L8 5.50554L12.9889 0.51662C13.6777 -0.172207 14.7946 -0.172207 15.4834 0.51662C16.1722 1.20545 16.1722 2.32225 15.4834 3.01108L10.4945 8L15.4834 12.9889Z" 
        fill={color}
      />
    </svg>
  );
};

export default CancelIcon;

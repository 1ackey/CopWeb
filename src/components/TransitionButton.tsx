import React from "react";

interface TransitionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TransitionButton: React.FC<TransitionButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full px-6 py-2 font-semibold text-white bg-indigo-600 
                  transition-all duration-300 ease-out hover:bg-indigo-700
                  hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
                  ${className}`}
    >
      {/* 按钮渐变过渡光效 */}
      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 opacity-0 hover:opacity-20 transition-opacity duration-500"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default TransitionButton;

import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  className
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  className?: string;
}) => {
  return (
    <button
      className={`relative inline-flex overflow-hidden rounded-lg p-px px-0.5 focus:outline-none ${className}`}
      onClick={handleClick}
      type="button"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} ${position === "left" ? 'flex-row-reverse' : ''}`}
      >
        {title}
        {icon}
      </span>
    </button>
  );
};

export default MagicButton;

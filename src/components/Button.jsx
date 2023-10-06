const Button = ({ label, iconURL, bgColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-montserrat sm:text-lg ${
        borderColor || "border-coral-red"
      } ${bgColor || "bg-coral-red"} px-7 py-4 leading-none ${
        textColor || "text-white"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;

import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "btn_white":
      return "bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300";
    case "btn_dark_green_outline":
      return "border border-green-50 text-green-50 hover:bg-green-50 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300";
    case "btn_green":
      return "bg-green-50 text-white hover:opacity-90 hover:scale-105 transition-all duration-300";
    case "btn_white_text":
      return "bg-white text-green-50 hover:bg-gray-100 hover:scale-105 transition-all duration-300";
    default:
      return "";
  }
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full px-2 py-4 ${getVariantClasses(
        variant
      )} ${full ? "w-full" : ""}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;

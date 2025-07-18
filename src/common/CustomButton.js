import React from "react";
import Spinner from "./Spinner";
const buttonStyles = {
  underline:
    "bg-transparent transition-all hover:border-b-secondaryColor flex border-b-[1px] border-b-transparent !rounded-none !p-0 hover:bg-transparent !text-secondaryColor ",
  clear: "bg-white/90  !text-black border hover:!bg-white  shadow-sm",
  close: "bg-orange-400 shadow-sm",
  primary: "bg-primaryColor hover:bg-primaryColor/90 shadow-sm ",
  secondary: "bg-green-700 hover:bg-green-600 shadow-sm  ",
  outline: "bg-white !text-primary hover:bg-white border-[1px] border-primary",
};
const CustomButton = ({
  text,
  PrefixIcon,
  loading,
  extraClass,
  SuffixIcon,
  spinnerSize,
  disabled,
  type,
  ...otherProps
}) => {
  //
  return (
    <button
      {...otherProps}
      disabled={loading || disabled}
      className={`flex  items-center py-[.4rem] px-4 text-white rounded-md text-sm ${
        buttonStyles[type]
      }  ${loading && "bg-primaryColor/60"} ${extraClass}`}
    >
      {SuffixIcon && <SuffixIcon className="mr-2 text-lg" />}
      {loading && <Spinner size={spinnerSize || 20} />} {text}
      {PrefixIcon && <PrefixIcon className="ml-2 text-lg" />}
    </button>
  );
};

export default CustomButton;

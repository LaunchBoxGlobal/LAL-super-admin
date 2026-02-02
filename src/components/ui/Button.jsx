import ButtonLoader from "./ButtonLoader";

const Button = ({ type, text, isPending }) => {
  return (
    <button
      disabled={isPending}
      type={type ? type : "button"}
      className="w-full font-medium gradient-bg h-[49px] max-h-[49px] text-center text-white rounded-[12px] disabled:cursor-not-allowed"
    >
      {isPending ? <ButtonLoader /> : text}
    </button>
  );
};

export default Button;

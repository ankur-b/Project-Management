import { forwardRef, RefObject } from "react";

const Input = forwardRef(function Input({
  textarea,
  label,
  type,
  ...props
}: {
  label: string;
  textarea?: boolean;
  type?: string;
},ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref as RefObject<HTMLTextAreaElement>}
          className={classes}
        />
      ) : (
        <input
          ref={ref as RefObject<HTMLInputElement>}
          type={type}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
});

export default Input;

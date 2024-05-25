import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  RefObject,
} from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  {
    children,
    buttonCaption,
  }: {
    children: React.ReactNode;
    buttonCaption: string;
  },
  ref
) {
  const dialog = useRef<HTMLDialogElement>();
  useImperativeHandle(ref, () => {
    return {
      show() {
        dialog.current?.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog as RefObject<HTMLDialogElement>}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right" > 
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root") as HTMLDialogElement
  );
});

export default Modal;

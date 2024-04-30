// Import Dependencies
import * as React from "react";

// Import Assets
import close from "./../../assets/Close.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-zinc-800 rounded-lg shadow-lg w-[463px]">
        <div className="flex justify-end relative top-6 right-4 h-0">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close modal"
          >
            <img
              loading="lazy"
              src={close}
              className="shrink-0 self-start w-8 aspect-square cursor-pointer"
              alt="Sign up icon"
              onClick={onClose}
            />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

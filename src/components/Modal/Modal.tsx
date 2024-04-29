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
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-zinc-800 rounded-lg shadow-lg">
        <div className="flex justify-end p-4">
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
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

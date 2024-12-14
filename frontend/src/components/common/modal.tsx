import {createPortal} from "react-dom";
import {MaterialSymbol} from "react-material-symbols";



interface ModalProps {
  children: React.ReactNode;
  onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
  return createPortal(
    <div className="bg-black/50 fixed z-50 top-0 left-0 w-full h-screen backdrop-blur flex items-center justify-center">
      <div className="bg-white px-8 py-9 rounded-2xl shadow-[0px_4px_12px_5px_#00000040] relative">
        <MaterialSymbol icon="close" size={24} className="absolute top-2 right-2 cursor-pointer" onClick={onClose}/>
        <div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

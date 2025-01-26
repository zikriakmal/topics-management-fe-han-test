import { forwardRef, useImperativeHandle, useState } from "react";

type ModalProps = {
    children: React.ReactNode;
    title?: string;
};

const Modal = forwardRef<{
    open: () => void;
    close: () => void;
}, ModalProps>((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => closeModal(),
    }));

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={`items-center justify-center flex flex-col h-full w-full ${isOpen ? 'fixed' : 'hidden'}`}>
            <div className="relative bg-gray-400/40  items-center justify-center flex flex-col h-full w-full">
                <div className="absolute bg-gray-400/40  items-center justify-center flex flex-col h-full w-full" onClick={() => closeModal()} />
                <div className="w-80 sm:w-96   bg-white shadow-lg rounded py-3 z-50">
                    <div className="border-b-[0.5px] border-b-gray-200 px-3 pb-2">
                        <p className="text-md font-bold">{props?.title}</p>
                    </div>
                    <div>
                        {props?.children}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Modal;
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="relative w-full h-full">
        <div
            className="fixed top-[40vh] inset-0 z-[100] flex items-center justify-center"
            onClick={onClose}
            >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn" />

            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                relative
                w-full max-w-md
                bg-white
                rounded-2xl
                shadow-2xl
                p-8
                animate-scaleIn
                "
            >
                {/* Close Button */}
                <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-black transition cursor-pointer"
                >
                <X size={20} />
                </button>

                <h3 className="text-2xl font-semibold mb-6">
                Contact Me
                </h3>

                <form className="space-y-5">

                <input
                    type="text"
                    placeholder="Your Name"
                    className="
                    w-full
                    border border-gray-300
                    rounded-lg
                    px-4 py-2.5
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    transition
                    "
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="
                    w-full
                    border border-gray-300
                    rounded-lg
                    px-4 py-2.5
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    transition
                    "
                />

                <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="
                    w-full
                    border border-gray-300
                    rounded-lg
                    px-4 py-2.5
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    transition
                    resize-none
                    "
                />

                <button
                    type="submit"
                    className="
                    w-full
                    bg-black
                    text-white
                    py-2.5
                    rounded-lg
                    font-medium
                    hover:opacity-90
                    transition
                    cursor-pointer
                    "
                >
                    Send Message
                </button>
                </form>
            </div>

            {/* Animations */}
            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.25s ease;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.25s ease;
                }
                `}
            </style>
            </div>
    </div>
  );
}
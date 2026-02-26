import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const SCROLL_THRESHOLD = 50;

function JumpTo() {
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      setIsScrollable(scrollHeight > clientHeight + 5);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (!isScrollable) return;

      if (scrollTop < SCROLL_THRESHOLD) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      if (scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD) {
        setDirection("up");
      }
    };

    checkScrollable();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      checkScrollable();
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, [isScrollable]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isScrollable || !direction) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={direction === "up" ? scrollToTop : scrollToBottom}
        aria-label={`Scroll ${direction}`}
        className="
          group
          bg-black/80
          backdrop-blur-md
          text-white
          shadow-xl
          w-12 h-12
          rounded-full
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
          hover:bg-black
          active:scale-95
          cursor-pointer
        "
      >
        {direction === "up" ? (
          <ArrowUp size={20} />
        ) : (
          <ArrowDown size={20} />
        )}
      </button>
    </div>
  );
}

export default JumpTo;
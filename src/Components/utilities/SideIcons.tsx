import {
  Mail,
  MessageCircle,
} from "lucide-react";
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandYoutube as Youtube,
  IconBrandFacebook as Facebook,
} from "@tabler/icons-react";

function SocialFloat() {
  const links = [
    { icon: <Youtube size={18} />, url: "https://www.youtube.com/@learningwithvishwajeet", label: "YouTube" },
    { icon: <Facebook size={18} />, url: "https://www.facebook.com/JeetTheDev", label: "Facebook" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com/in/vishwajeethaldar", label: "LinkedIn" },
    { icon: <Github size={18} />, url: "https://github.com/vishwajeethaldar", label: "GitHub" },
    { icon: <Mail size={18} />, url: "mailto:vishwajeet.haldar@outlook.com", label: "Email" },
    { icon: <MessageCircle size={18} />, url: "https://wa.me/7489208485", label: "WhatsApp" },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      <div className="flex flex-col gap-3 backdrop-blur-md bg-white/70 border border-gray-200 shadow-lg p-3 rounded-2xl">

        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center justify-end"
          >
            {/* Label */}
            <span
              className="
                absolute right-12
                whitespace-nowrap
                text-sm
                px-3 py-1.5
                rounded-md
                bg-black
                text-white
                opacity-0
                translate-x-2
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all duration-300
                pointer-events-none
              "
            >
              {item.label}
            </span>

            {/* Icon Button */}
            <div
              className="
                w-10 h-10
                flex items-center justify-center
                rounded-xl
                text-gray-600
                hover:bg-black
                hover:text-white
                transition-all duration-300
              "
            >
              {item.icon}
            </div>
          </a>
        ))}

      </div>
    </div>
  );
}

export default SocialFloat;
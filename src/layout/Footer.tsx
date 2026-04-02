import { Globe, Share2 } from "lucide-react";
import React from "react";

const IconButton = ({ icon: Icon }: { icon: React.ElementType }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-[#111] border border-gray-700 flex items-center justify-center hover:bg-[#1a1a1a] transition cursor-pointer">
      <Icon className="text-gray-300 w-5 h-5" />
    </div>
  );
};

const Footer = () => {
  const footerItems = [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Support",
  ];

  return (
    <footer className="bg-[#0E0E0E] text-white">
      <div className=" container max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start  justify-between gap-8">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 max-w-sm">
          <img src="/brand_icon.svg" alt="logo" />
          <p className="text-gray-400 text-sm">
            © 2024 Matchify+. The Digital Gala Experience. Elevating
            connections through intelligence and design.
          </p>
        </div>

        {/* Middle */}
        <div>
          <ul className="flex items-center gap-4 text-sm text-gray-300">
            {footerItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-pink-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <IconButton icon={Share2} />
          <IconButton icon={Globe} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
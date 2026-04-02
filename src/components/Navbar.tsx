import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  console.log("Location in Navbar",location)
  const navigate = useNavigate();

  const navlist = [
    {
      label:"Features",
      path:"/features"
    },
    {
      label:"Stories",
      path:"/stories"
    },
    {
      label:"Safety",
      path:"/safety"
    },
    {
      label:"Premium",
      path:"/premium"
    }
  ];

  // 👇 Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 
      ${scrolled 
        ? "bg-[#0a0a0a]/80 backdrop-blur-lg shadow-md" 
        : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/brand_icon.svg" alt="logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-md text-gray-300">
          {navlist.map((item, index) => (
            <li key={index}>
              <a href="#" className={`hover:text-pink-400 transition `} onClick={()=>navigate(item.path)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="text-md text-gray-300 hover:text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-md"
            onClick={() => navigate("/login")}
          >
            Signup
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-black/95 backdrop-blur-lg">
          <ul className="flex flex-col gap-4 text-gray-300">
            {navlist.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block hover:text-pink-400"
                  onClick={() => setOpen(false)} // 👈 close on click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button
              className="text-left text-gray-300"
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
            >
              Login
            </button>
            <button
              className="w-full py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
            >
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
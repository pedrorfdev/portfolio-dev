import { useEffect, useRef, useState } from "react";
import github from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Cria uma ref para o menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsOpen(false); // Fechar o menu após rolar (para mobile)
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <header className="fixed top-0 z-10 bg-background sm:relative flex w-full justify-between h-20 items-center px-4">
        <nav className="flex-1 hidden sm:block">
          {" "}
          {/* Ocultar em mobile */}
          <ul className="flex text-white justify-evenly">
            <li
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => scrollToSection("projects")}
            >
              Projetos
            </li>

            <li
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => scrollToSection("about")}
            >
              Sobre mim
            </li>

            <li
              className="cursor-pointer hover:text-indigo-400"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </li>
          </ul>
        </nav>

        <ul className="flex justify-between items-center gap-4">
          <li className="cursor-pointer">
            <a href="https://github.com/pedrorfdev" target="_blank">
              <img src={github} alt="" className="size-8 md:size-5" />
            </a>
          </li>

          <li className="cursor-pointer">
            <a href="https://www.linkedin.com/in/pedroff/" target="_blank">
              <img src={linkedin} alt="" className="size-8 md:size-5" />
            </a>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="block sm:hidden p-2 focus:outline-none"
        >
          <svg
            className="size-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
            />
          </svg>
        </button>
      </header>

      {/* Menu Mobile */}
      <div
        ref={menuRef}
        className={`${
          isOpen
            ? "fixed inset-y-0 right-0 bg-gray-900/90 z-50 transform -translate-x-0 transition-transform duration-300 ease-in-out"
            : "fixed inset-y-0 right-0 bg-gray-900/90 z-50 transform translate-x-full transition-transform duration-300 ease-in-out"
        } sm:hidden`}
      >
        <div className="flex flex-col justify-between w-72 h-full p-4 text-zinc-100">
          <button
            onClick={toggleMenu}
            className="focus:outline-none mb-4 self-end"
          >
            <svg
              className="size-10 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7 5.3a1 1 0 0 1 0 1.4L13.4 12l5.3 5.3a1 1 0 0 1-1.4 1.4L12 13.4l-5.3 5.3a1 1 0 0 1-1.4-1.4L10.6 12 5.3 6.7a1 1 0 0 1 1.4-1.4L12 10.6l5.3-5.3a1 1 0 0 1 1.4 0z"
              />
            </svg>
          </button>

          <nav className="h-full mt-10">
            <ul className="flex flex-col items-center gap-10 text-xl">
              <li
                className="cursor-pointer hover:text-indigo-400"
                onClick={() => scrollToSection("projects")}
              >
                Projetos
              </li>

              <li
                className="cursor-pointer hover:text-indigo-400"
                onClick={() => scrollToSection("about")}
              >
                Sobre mim
              </li>

              <li
                className="cursor-pointer hover:text-indigo-400"
                onClick={() => scrollToSection("contact")}
              >
                Contato
              </li>
            </ul>
          </nav>

          <p className="text-center">
            By{" "}
            <a href="https://www.linkedin.com/in/pedroff/" target="_blank">
              Pedro Ferreira
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

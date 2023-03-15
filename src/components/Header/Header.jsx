import React, { useState } from "react";
import { BsFillPeaceFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowlMenu] = useState(false);

  return (
    <header className="flex justify-between laptop:justify-start items-center w-full p-4  h-[10vh] z-50">
      <div className="laptop:w-1/6 text-center">
        <a
          href="http://"
          className="tracking-tighter  text-primary text-2xl font-bold relative p-1 "
        >
          ERIKA<span className="text-5xl">.</span>
          <BsFillPeaceFill className="absolute -left-3 -bottom-3 -z-10 " />
        </a>
      </div>
      <nav
        className={`fixed laptop: w-[80%] h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 laptop:static flex-1 flex flex-col laptop:flex-row bg-black items-center justify-center gap-10 text-primary transition-all duration-500`}
      >

        <a href="http://">Inicio</a>
        <a href="http://">Sobre de mi</a>
        <a href="http://">Proyectos</a>
        <a href="http://">Habilidades</a>
        <a href="http://" className="text-primary">
          Contactarme{" "}
        </a>
      </nav>
      <button onClick={() => setShowlMenu(!showMenu)} className="text-2xl p-2">
        <CgMenuGridR className="text-white" />
      </button>
    </header>
  );
};

export default Header;

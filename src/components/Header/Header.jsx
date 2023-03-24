import React, { useState } from "react";
import { BsFillPeaceFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineClose, AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowlMenu] = useState(false);

  return (
    <header className="flex justify-between items-center w-full py-2 movil:pr-4 px-8  h-[10vh] z-50 laptop:justify-start">
      <div className="text-center -mt-4 laptop:w-1/6">
        <a
          href="http://"
          className="tracking-tighter text-primary text-2xl font-bold relative p-1 bg-black "
        >
          Erika Aviles<span className="text-5xl">.</span>
          <BsFillPeaceFill className="absolute -left-3 -bottom-3 laptop:-z-10 " />
        </a>
      </div>
      <nav
        className={`fixed text-white w-[80%] h-full ${showMenu ? "left-0" : "-left-full"} top-0 flex-1 flex flex-col bg-black items-center justify-center gap-10 text-primary transition-all duration-500 z-20 table:w-[40%] laptop:w-full laptop:flex-row laptop:static`}
      >
        <a href="http://">Inicio</a>
        <a href="http://">Sobre de mi</a>
        <a href="http://">Proyectos</a>
        <a href="http://">Habilidades</a>
        <a href="http://" className="">
          Contactarme
        </a>
        <button className="flex gap-1 text-primary ">
          Curriulum
          <span>
            <AiOutlineArrowDown className="text-2xl" />
          </span>
        </button>
      </nav>
      <button onClick={() => setShowlMenu(!showMenu)} className="text-2xl p-2 ">
        {showMenu ? (
          <AiOutlineClose className=" text-secundary  laptop:hidden" />
        ) : (
          <CgMenuGridR className="text-secundary laptop:hidden" />
        )}
      </button>
    </header>
  );
};

export default Header;

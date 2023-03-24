import React from "react";
import YO from "../../../public/clients.jpg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="relative grid grid-flow-row tablet:grid-rows-6 tablet:grid-cols-5  tablet:gap-4 pt-4 laptop:h-screen ">
      <h2 className="mx-5 row-span-1 flex justify-center items-center text-5xl text-primary font-semibold italic tracking-[4px] border-dotted tablet:col-span-5 table:row-span-1 tablet:border-b-[1px]">
        ABOUT ME
      </h2>
      {/* Imagen y resdes sociales */}
      <div className="p-5 row-span-1 flex flex-col border-r-[1px] border-dotted tablet:col-span-2 tablet:row-span-5">
        <img className="h-[70%] object-cover" src={YO} alt="mi foto" />
        <div className="mt-6 font flex justify-evenly items-center text-xs text-secundary h-[20%] tablet:items-end tablet:border-t-[1px] tablet:border-dotted laptop:m-6">
          CONECTATE CON ERIKA:
          <span className="text-white text-2xl laptop:text-4xl">
            <BsGithub />
          </span>
          <span className="text-white text-2xl laptop:text-4xl">
            <AiOutlineLinkedin />
          </span>
          <span className="text-white text-2xl laptop:text-4xl">
            <AiFillTwitterSquare />
          </span>
        </div>
      </div>
      {/* Desccripcion */}
      <div className="row-span-4 flex flex-col gap-2 p-5 text-white text-base leading-7 tablet:col-span-3 tablet:row-span-5  tablet:leading-9 laptop:text-2xl">
        <h3 className="pt-4 text-secundary border-white border-t-[1px]   border-dotted font-semibold text-[40px] tablet:py-4 tablet:border-b-[1px] tablet:border-t-0">
          Hola.
        </h3>
        <p className="pt-4 pb-4 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi
          molestias qui temporibus maxime impedit quos iure, ex vitae mollitia
          esse et? Nisi, delectus dicta sequi neque placeat est sapiente!{" "}
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi
          molestias qui temporibus maxime impedit quos iure, ex vitae mollitia
          esse et? Nisi, delectus dicta sequi neque placeat est sapiente!
        </p>
        <a
          href="#"
          className="inline-block fixed bottom-4 right-2 text-sm px-2 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 transition ease-in-out duration-500"
        >
         up
        </a>
      </div>

        

    </div>
  );
};

export default AboutMe;

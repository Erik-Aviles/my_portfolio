import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaReact, FaNode } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb } from "react-icons/si";

const Hero = () => {
  return (
    <section className=" min-h-[80vh] grid grid-cols-1 gap-4 laptop:grid-cols-8 mb-5">
      {/* Information */}
      <div className="flex items-center justify-center  laptop:col-span-5 laptop:px-10 laptop:py-2 ">
        <div className="
         w-full h-auto flex flex-col justify-center gap-6 p-5 laptop:p-0">
          <h1 className="font-bold text-[46px] leading-[4.5rem] tablet:leading-[6rem]">
            Profesionsal en el Desarrollo {" "}
            <span className="relative text-primary ml-3 px-4 border-4 border-primary">
              Front-End
              <BsFillCircleFill className="text-xs absolute -left-4 -top-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -right-4 -top-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -right-4 -bottom-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -left-4 -bottom-4 p-1 bg-primary text-black rounded-full box-content" />
            </span>
          </h1>
          <p className="text-base text-gray-500 leading-[1.5rem]">
            Bienvenido a mi pagina web, donde encontraras informacion sobre mi y todos los proyecto que he realizado a lo largo de mi trayectoria profesional, en los que demuestro mis habilidades tecnicas con la aplicacion de herramientas de software en tendencia.
          </p>
          <div className="flex flex-col tablet:flex-row gap-8 tablet:gap-0 justify-evenly ">
            <button className="bg-primary py-2 font-bold px-8 rounded-full movil:text-lg text-xl">
              Contactame
            </button>
            <button className="bg-black border-2 border-primary py-2 font-bold px-8 rounded-full text-xl ">
              Portafolio
            </button>
          </div>
        </div>
      </div>

      {/*Imagen */}
      <div className="relative flex flex-col items-center justify-center py-2 laptop:py-0 laptop:col-span-3 ">
        <div className="relative flex flex-col gap-1 items-center justify-center ">
          <img
            src="hero_erika.png"
            className=" w-[250px] h-[250px]  tablet:w-[350px] tablet:h-[350px] object-cover z-10"
          />
          <BsFillCircleFill className=" absolute top-1/4 text-[255px] tablet:text-[325px] p-[6px] text-black bg-gradient-to-b from-primary  rounded-full " />

          <div className="min-w-[140px] text-xs bg-white w-1/2 shadow-md shadow-white p-2 flex flex-col justify-center gap-1 z-10">
            <div className="relative flex">
              <img
                src="hero_erika.png"
                className=" bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-full"
              />
              <img
                src="hero_erika.png"
                className="-ml-1 bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-full"
              />
              <img
                src="hero_erika.png"
                className="-ml-1 bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-full"
              />
              <img
                src="hero_erika.png"
                className="-ml-1 bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-full"
              />
              <img
                src="hero_erika.png"
                className="-ml-1 bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-full"
              />
            </div>
            <h2 className=" text-black font-bold tracking-[2px]">
              120 + Employess
            </h2>
            <div className="flex items-center text-gray-500">
              <AiFillStar className="text-primary mr-2" /> 5.0 (1.1k Revices)
            </div>
          </div>
          <BsFillCircleFill className="absolute right-16 -bottom-6 text-primary text-5xl " />
          <div className="absolute flex items-center justify-center right-10 top-5 bg-black p-2 tablet:text-4xl ring-2 ring-primary rounded-full">
            <FaReact className="text-primary" />
          </div>
          <div className="absolute flex items-center justify-center right-1 top-28 bg-black p-2 tablet:text-3xl ring-2 ring-white rounded-full">
            <SiMongodb className="text-lime-600" />
          </div>
          <div className="absolute flex items-center justify-center left-10 top-16 bg-black p-2 tablet:text-3xl ring-2 ring-primary rounded-full">
            <DiJavascript1 className="text-yellow-400" />
          </div>
          <div className="absolute flex items-center justify-center left-4 top-3 bg-black p-2 tablet:text-2xl ring-2 ring-white rounded-full">
            <SiExpress className="text-gray-300" />
          </div>
          <div
            className="absolute z-10 flex items-center justify-center bottom-5 left-3 bg-black p-2 tablet:text-2xl ring-2 ring-white rounded-full"
          >
            <FaNode className="text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

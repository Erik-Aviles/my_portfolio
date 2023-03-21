import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { FaReact, FaNode } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Hero = () => {
  return (
    <section className=" laptop:h-[80vh] grid grid-cols-1 laptop:grid-cols-8 ">
      {/* Information */}
      <div className="desktop:col-span-4 laptop:col-span-5 flex justify-center px-12">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-bold leading-[4.5rem] ">
            Ponte en forma, Mantente saludable, Siéntete
            <span className="relative text-primary ml-5 px-5 border-4 border-primary">
              Genial
              <BsFillCircleFill className="text-xs absolute -left-4 -top-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -right-4 -top-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -right-4 -bottom-4 p-1 bg-primary text-black rounded-full box-content" />
              <BsFillCircleFill className="text-xs absolute -left-4 -bottom-4 p-1 bg-primary text-black rounded-full box-content" />
            </span>
          </h1>
          <p className="text-base text-gray-500 leading-[1.5rem]">
            Bienvenido a nuestra comunidad donde puedes alcanzar tus objetivos
            con nuestro programa de clase mundial, entrenadores e instalaciones
          </p>
          <div className="flex justify-evenly gap-8">
            <button className="bg-primary py-2 font-bold px-8 rounded-full text-xl">
              Contactame
            </button>
            <button className="bg-black border-2 border-primary py-2 font-bold px-8 rounded-full text-xl ">
              Portafolio
            </button>
          </div>
        </div>
      </div>

      {/*Imagen */}
      <div className="desktop:col-span-4 laptop:col-span-3 relative flex flex-col items-center justify-center ">
        <div className="relative flex flex-col gap-1 items-center justify-center ">
          <img
            src="hero_erika.png"
            className=" w-[350px] h-[350px] object-cover z-10"
          />
          <BsFillCircleFill className=" absolute top-1/4 text-[300px] p-[6px] text-black bg-primary rounded-full " />

          <div className="text-xs bg-white w-1/2 shadow-md shadow-white p-2 flex flex-col justify-center gap-1 z-10">
            <div className="relative flex">
              <img
                src="hero_erika.png"
                className=" bg-white ring-2 ring-gray-300 w-[20px] h-[20px] object-cover rounded-ful
                l"
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
          <BsFillCircleFill className="absolute right-16 -bottom-6 text-primary  text-5xl" />
          <div className="absolute flex items-center justify-center -right-16 top-5 bg-black p-2 text-4xl ring-2 ring-primary rounded-full">
            <FaReact className="text-primary" />
          </div>
          <div className="absolute flex items-center justify-center -left-10 top-12 bg-black p-2 text-3xl ring-2 ring-primary rounded-full">
            <DiJavascript1 className="text-yellow-400" />
          </div>
          <div className="absolute flex items-center justify-center -left-16 -top-3 bg-black p-2 text-2xl ring-2 ring-white rounded-full">
            <SiExpress className="text-gray-300" />
          </div>
          <div className="absolute z-10 flex items-center justify-center bottom-16
           -left-5 bg-black p-2 text-3xl ring-2 ring-white rounded-full">
            <FaNode className="text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import YO from "../../../public/clients.jpg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="relative laptop:h-screen grid grid-flow-row tablet:grid-rows-6 tablet:grid-cols-5  tablet:gap-4 pt-4">
      <h2 className="mx-5 row-span-1 tablet:col-span-5 table:row-span-1 flex justify-center items-center text-5xl text-primary font-semibold italic tracking-[4px] tablet:border-b-[1px]  border-dotted">
        ABOUT ME
      </h2>
      {/* Imagen y resdes sociales */}
      <div className="p-5 row-span-1 tablet:col-span-2 tablet:row-span-5 flex flex-col border-r-[1px] border-dotted">
        <img className="h-[80%] object-cover" src={YO} alt="mi foto" />
        <div className="mt-6  flex justify-evenly items-end text-white h-[20%] tablet:m-5 tablet:border-t-[1px] tablet:border-dotted">
          <span className="text-4xl">
            <BsGithub />
          </span>
          <span className="text-4xl">
            <AiOutlineLinkedin />
          </span>
          <span className="text-4xl">
          <AiFillTwitterSquare />
          </span>
        </div>
      </div>
      {/* Desccripcion */}
      <div className="row-span-4 tablet:col-span-3 tablet:row-span-5 flex flex-col gap-2 p-5 text-white text-base laptop:text-2xl leading-7 tablet:leading-10">
        <h3 className="pt-4 tablet:py-4 text-primary  border-white border-t-[1px] tablet:border-b-[1px] tablet:border-t-0 border-dotted font-semibold text-[40px] ">
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
      </div>
      <span></span>
    </div>
  );
};

export default AboutMe;

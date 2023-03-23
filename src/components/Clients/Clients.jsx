import React from "react";
import YO from "../../../public/clients.jpg";

const Clients = () => {
  return (
    <div className="relative h-screen grid grid-flow-row tablet:grid-rows-6 tablet:grid-cols-4 pt-4 tablet:gap-4">
      <h2 className="row-span-1 tablet:col-span-4 table:row-span-1 flex justify-center items-center text-5xl text-white font-semibold italic tracking-[4px]">
        ABOUT ME
      </h2>
      <div className="p-5  row-span-1 tablet:col-span-2 tablet:row-span-5">
        <img className="h-full object-cover" src={YO} alt="mi foto" />
      </div>
      <div className="row-span-4 tablet:col-span-2 tablet:row-span-5 flex flex-col gap-2 p-5 text-white text-lg leading-6">
        <h3 className="py-2 border-primary border-b-2 font-semibold text-[30px]">Hola.</h3>
        <p className="pt-2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi molestias qui temporibus maxime impedit quos iure, ex vitae mollitia esse et? Nisi, delectus dicta sequi neque placeat est sapiente! </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi molestias qui temporibus maxime impedit quos iure, ex vitae mollitia esse et? Nisi, delectus dicta sequi neque placeat est sapiente!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet quasi molestias qui temporibus maxime impedit quos iure, ex vitae mollitia esse et? Nisi, delectus dicta sequi neque placeat est sapiente!</p>
      </div>
    </div>
  );
};

export default Clients;

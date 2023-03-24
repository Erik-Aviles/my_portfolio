import React from "react";
import { Card, Carousel } from "flowbite-react";
import Yelow from "../../../public/amarillo.jpg";
import White from "../../../public/blanca.jpg";
import Rosado from "../../../public/rosapastel.jpg";
import Naranja from "../../../public/naranja.jpg";
import Violeta from "../../../public/violeta.jpg";
import Roja from "../../../public/roja.jpg";

const Projets = () => {
  return (
    <section className="h-screen m-5 flex justify-evenly flex-col">
      <h2 className="mx-5 row-span-1 flex justify-center items-center text-5xl text-primary font-semibold italic tracking-[4px] tablet:col-span-5 table:row-span-1">
        PROYECTOS
      </h2>
      <div className="h-96 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slide={false} className="p-4">
          <div className="w-1/2 flex gap-3">
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg shadow-lg hover:shadow-secundary hover:bg-slate-600  hover:border-transparent hover:text-black  transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover " src={Yelow} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg hover:border-transparent hover:text-black hover:bg-slate-600 shadow-lg hover:shadow-secundary transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover" src={Roja} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
          </div>
          <div className="w-1/2 flex gap-3">
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg hover:border-transparent hover:text-black hover:bg-slate-600 shadow-lg hover:shadow-secundary transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover" src={Violeta} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg hover:border-transparent hover:text-black hover:bg-slate-600 shadow-lg hover:shadow-secundary transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover" src={Rosado} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
          </div>
          <div className="w-1/2 flex gap-3">
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg hover:border-transparent hover:text-black hover:bg-slate-600 shadow-lg hover:shadow-secundary transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover" src={Naranja} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
            <article
              src={Yelow}
              className="w-1/2 flex bg-darkBlack rounded-lg hover:border-transparent hover:text-black hover:bg-slate-600 shadow-lg hover:shadow-secundary transition ease-in-out duration-100 "
            >
              <img className="w-1/2 object-cover" src={White} alt="..." />
              <div className="m-2">
                <h5 className="p-3 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="p-3 font-normal text-gray-50">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </article>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projets;

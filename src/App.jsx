import { useState } from "react";
import "./App.css";
import Burger from "./components/Burger/Burger";

// import icon
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { CiMail } from "react-icons/ci";

// import img
import icon1 from "./assets/icons.svg";
import icon2 from "./assets/icons2.svg";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icons4.svg";
import about from "./assets/about-img.webp";
import emat from "./assets/emat.png";
import two from "./assets/olis.png";
import snimok3 from "./assets/snimok3.png";

function App() {
  const [count, setCount] = useState(0);

  const [modalMenu, setModalMenu] = useState(false);

  return (
    <div className="bg-[#f9f9f9]">
      <header className="shadow-md   fixed z-30 w-full top-0 bg_header">
        <div className="container max-w-[1100px] mx-auto flex justify-between items-center p-[12px] px-[25px] ">
          <div className="logo cursor-pointer font-medium text-[24px]">
            Virkan.dev
          </div>
          <ul className=" nav md:flex gap-8 text-[18px] font-medium not-italic hidden ">
            <li className="">Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          {/* mobal-menu */}
          <div
            onClick={() => setModalMenu(true)}
            className="md:hidden cursor-pointer "
          >
            <IoIosMenu className="text-[38px] mobal_menu" />
          </div>
        </div>
      </header>
      <section className=" drop-shadow-md">
        <div className="container max-w-[1100px] mx-auto pt-[80px] p-[20px] ">
          <div className="sm:flex sm:flex-col md:flex md:flex-row justify-between mt-[80px]">
            <div className="">
              <h1 className="text-[50px] md:text-[53px] text-center md:text-start font-bold">
                Front-End React Developer
              </h1>
              <p className="mt-[30px] text-[#555] text-[18px] max-w-[480px] text-center md:text-start">
                Hi, I'm Virkan Shirinov. A passionate Front-end React Developer
                based in Russia, Moscow.
              </p>
              <div className="mt-[30px] flex items-center gap-4 justify-center md:justify-start">
                <LinkedInIcon />
                <GitHubIcon />
                <MailOutlineIcon />
                <a target="_blank" href="@virkan91">
                  <TelegramIcon />
                </a>
              </div>
            </div>
            <div className="avatar mt-[50px] md:mt-auto mx-auto"></div>
          </div>
          <div className="flex gap-14 items-center py-[40px] flex-col md:flex-row">
            <div>
              <h3 className="text-[20px] font-medium ">Технический стек</h3>
            </div>
            <div className="grid grid-cols-4 gap-8 items-center">
              <img src={icon1} alt="" />
              <img src={icon4} alt="" />
              <img src={icon2} alt="" />
              <img src={icon3} alt="" className="w-[105px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="section_2 bg-[#FFFFFF] py-[70px]">
        <div className="container max-w-[1100px] mx-auto p-[12px]">
          <div className="grid md:grid-cols-2 gap-[90px] grid-col-1">
            <div className="rounded-[20px]">
              <img src={about} alt="" className="rounded-[30px]" />
            </div>
            <div className="p-[0px_20px]">
              <h2 className="text-[#147efb] font-bold text-[18px] text-center md:text-start">
                ABOUT ME
              </h2>
              <p className="text-[#2d2e32] text-[22px] font-bold leading-8 text-center md:text-start">
                A dedicated Front-end Developer based in Russia, Moscow{" "}
              </p>
              <p className="text-[#767676] text-center md:text-start">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section_3 bg-[#f9f9f9] py-[70px]">
        <div className="container max-w-[1100px] mx-auto p-[12px]">
          <div className="mb-[50px] ">
            <p className="text-[#147efb] font-bold text-[18px] text-center md:text-start">
              MY PROJECTS
            </p>
            <p className="text-[#2d2e32] text-[22px] font-bold leading-8 text-center md:text-start mt-[10px]">
              Each project is a unique piece of development 🧩
            </p>
          </div>
          <div className="flex flex-col">
            <div className="projects flex-col md:flex md:flex-row ">
              <div className="box_scrol rounded-[20px]">
                <a target="_blank" href="https://emat.netlify.app/">
                  <img src={emat} alt="" className=" scrol_bar " />
                </a>
              </div>
              <div className="flex flex-col gap-5 mt-[30px] md:mt-0">
                <h2>Emet (FEBRUARY 2023)</h2>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars...
                </p>
                <div className="flex justify-center gap-4 items-center mt-[20px] flex-col md:flex-row">
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold ">
                    React
                  </p>
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold ">
                    Tailwind CSS
                  </p>
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold ">
                    React-router
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center mt-[40px]">
                  <a
                    target="_blank"
                    href="https://github.com/virkan91/emat"
                    className="hover:text-[blue] font-medium"
                  >
                    Code
                  </a>
                  <GitHubIcon />
                </div>
              </div>
            </div>

            <div className="projects flex-col md:flex md:flex-row mt-[30px]">
              <div className="flex flex-col gap-5 mt-[30px] md:mt-0">
                <h2>COINDOM (FEBRUARY 2023)</h2>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div className="flex justify-center gap-4 items-center mt-[20px] flex-col md:flex-row">
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold  ">
                    React
                  </p>
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold  ">
                    Tailwind CSS
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center mt-[40px]">
                  <a
                    target="_blank"
                    href="https://github.com/virkan91/emat"
                    className="hover:text-[blue] font-medium"
                  >
                    Code
                  </a>
                  <GitHubIcon />
                </div>
              </div>
              <div className="box_scrol rounded-[20px] ">
                <img src={two} alt="" className="rounded-[20px] scrol_bar" />
              </div>
            </div>
            <div className="projects flex-col md:flex md:flex-row mt-[30px]">
              <div className="box_scrol rounded-[20px] ">
                <img
                  src={snimok3}
                  alt=""
                  className="rounded-[20px] scrol_bar"
                />
              </div>
              <div className="flex flex-col gap-5 mt-[30px] md:mt-0">
                <h2>Product (FEBRUARY 2023)</h2>
                <p>
                  Coindom is a crypto app that allows users to search for
                  information about various cryptocurrencies in real-time.
                </p>
                <div className="flex justify-center gap-4 items-center mt-[20px] flex-col md:flex-row">
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold  ">
                    Resct
                  </p>
                  <p className="bg-[#FFF] shadow-md p-[8px_12px] rounded-md font-semibold  ">
                    Tailwind CSS
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center mt-[40px]">
                  <a
                    target="_blank"
                    href="https://github.com/virkan91/emat"
                    className="hover:text-[blue] font-medium"
                  >
                    Code
                  </a>
                  <GitHubIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact bg-[#FFFFFF] py-[70px]">
        <div className="container max-w-[1100px] mx-auto p-[12px]">
          <p className="text-[#147efb] font-bold text-[18px] text-center md:text-start">
            CONTACT
          </p>
          <h2 className="text-[#2d2e32] text-[24px] font-bold mt-[10px] text-center md:text-start">
            Don't be shy! Hit me up! 👇
          </h2>
          <div className="mt-[50px] flex gap-20 flex-col md:flex-row items-center ">
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div>
                <h4 className="font-bold text-center md:text-start">
                  Location
                </h4>
                <a>Russia, Moscow</a>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div>
                <h4 className="font-bold text-center md:text-start">Mail</h4>
                <a>virkan@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#2d2e32] p-[40px]">
        <div className="container max-w-[1100px] mx-auto p-[12px]">
          <div className="flex md:justify-between items-center flex-col md:flex-row justify-center">
            <h3 className="text-[#FFF] font-bold md:text-[16px] text-[12px]">
              Copyright © 2023. All rights are reserved
            </h3>
            <div className="flex gap-2 items-center mt-[30px] md:mt-auto">
              <LinkedInIcon className="text-[#FFF]" />
              <GitHubIcon className="text-[#FFF]" />
            </div>
          </div>
        </div>
      </footer>

      {/*modalmenu */}
      {modalMenu && (
        <div className="fixed z-30 top-0 w-full h-screen overflow-y-hidden bg-[#FFF] py-[9px] px-[35px]">
          <div className=" flex justify-end">
            <button
              onClick={() => setModalMenu(false)}
              className="text-[32px] hover:text-[#000] hover:scale-[0.90] duration-200"
            >
              <IoClose className="close-menu" />
            </button>
          </div>
          <ul className="flex flex-col  items-center h-full gap-[15px] text-[24px] font-medium  ">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Burger from "./components/Burger/Burger";

// import icon
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";

// import img
import icon1 from "./assets/icons.svg";
import icon2 from "./assets/icons2.svg";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icons4.svg";
import about from "./assets/about-img.webp"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#f9f9f9]">
      <header className="shadow-md  bg-[#FFF]">
        <div className="container max-w-[1100px] mx-auto flex justify-between items-center p-[12px]">
          <div className="logo cursor-pointer font-medium text-[30px]">
            Virkan.dev
          </div>
          <ul className=" nav md:flex gap-8 text-[18px] font-medium not-italic hidden">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          {/* mobal-menu */}
          <div className="md:hidden">
            <MenuIcon />
          </div>
        </div>
      </header>
      <section>
        <div className="container max-w-[1100px] mx-auto pt-[80px] p-[20px] ">
          <div className="sm:flex sm:flex-col md:flex md:flex-row justify-between ">
            <div className="">
              <h1 className="text-[50px] md:text-[64px] text-center md:text-start">
                Front-End React Developer
              </h1>
              <p className="mt-[30px] text-[#555] text-[18px] max-w-[400px] text-center md:text-start">
                Hi, I'm Virkan Shirinov. A passionate Front-end React Developer
                based in Russia, Moscow.
              </p>
              <div className="mt-[30px] flex items-center gap-4 justify-center md:justify-start">
                <LinkedInIcon />
                <GitHubIcon />
                <MailOutlineIcon />
                <a href="@virkan91">
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
      <section className="bg-[#FFFFFF] pt-[50px]">
        <div className="container max-w-[1100px] mx-auto p-[12px]">
          <div className="grid md:grid-cols-2 gap-[110px] grid-col-1">
            <div className="rounded-[20px]">
              <img src={about} alt="" className="rounded-[30px]"  />
            </div>
            <div>
              <h2>About</h2>
              <p>
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
    </div>
  );
}

export default App;

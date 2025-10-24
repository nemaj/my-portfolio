import { TypeAnimation } from "react-type-animation";
import "./App.scss";

function App() {
  return (
    <div className="">
      <div className="bg-[#100f22]">
        <div className="relative main-bg bg-[#151332] grid gap-[50px]">
          <div className="absolute top-0 left-0 w-full top-fade-bg h-[400px]"></div>

          <section className="section-container relative">
            <div className="min-h-screen flex gap-4 flex-col justify-center items-center">
              <code className="flex gap-4 items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xl sm:text-xl md:text-3xl font-mono tracking-wide drop-shadow-lg backdrop-blur-md">
                <div className="pulse-base pulse-circle"></div>
                {`<Jamen A. Mama />`}
              </code>
              <TypeAnimation
                sequence={["Front End Developer"]}
                wrapper="div"
                speed={35}
                className="title text-[200px] font-bold text-white font-mono leading-[1em]"
              />
            </div>
          </section>

          <section className="section-container py-[150px] context-fade">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              ABOUT
            </h2>
            <p
              className="text-white text-lg sm:text-2xl md:text-3xl opacity-90 w-4/5 m-auto"
              style={{ lineHeight: "1.7em" }}
            >
              Hi, I'm Jamen Mama, I am a Experienced Front-End Developer with 8+
              years of expertise in building responsive and scalable web
              applications, high-performing solutions tailored to both user
              needs and business objectives.
            </p>
          </section>

          <section className="section-container py-[150px] context-fade">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              PREPERED TECH
            </h2>
            <p className="text-white text-lg sm:text-2xl md:text-3xl opacity-80 leading-[50px] w-3/5 m-auto">
              ReactJS, Angular, Tailwind, Restful APIs, Redux, Javacript, Sass
              and more.
            </p>
          </section>

          <section className="section-container pt-[150px] pb-[500px] context-fade">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              STACKS
            </h2>
            <p className="text-white text-lg sm:text-2xl md:text-3xl opacity-80 leading-[50px]">
              React, Tailwind, Restful APIs, Redux, and more.
            </p>
          </section>

          <div className="absolute z-0 bottom-0 left-0 w-full bottom-fade-bg h-[400px]"></div>
        </div>
        <div className="section-container py-[100px] context-fade">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[Exo]">
            EXPERIENCE
          </p>
        </div>
        <section className="bg-[#0f0e1f]">
          <div className="section-container pt-[100px] pb-[30px] flex flex-col justify-center items-center">
            <p className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-[Exo] mb-6">
              Contact
            </p>
            <a
              href="mailto:jamen-dev@gmail.com"
              className="text-white mb-auto text-center text-lg sm:text-2xl md:text-3xl opacity-80 leading-[50px] font-[Exo] hover:underline"
            >
              jamen-dev@gmail.com
            </a>
            <p className="text-white text-center text-lg opacity-80 leading-[50px] font-[Exo] mt-8">
              © 2025, Jamen Mama, All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

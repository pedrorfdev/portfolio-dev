import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Timeline } from "./components/timeline";

import github from "./assets/github-icon.svg";
import linkedin from "./assets/linkedin-icon.svg";

export function App() {
  return (
    <div className="max-w-[1240px] mx-auto space-y-12 md:space-y-28 pb-15 scroll-smooth">
      <Header />

      <div className="flex flex-col gap-10 items-center md:items-start md:text-start text-center w-full pt-28 sm:p-0">
        <h1 className="text-zinc-100 font-semibold text-3xl">
          Olá, me chamo Pedro Ferreira
        </h1>

        <p className="text-zinc-500 font-semibold text-2xl max-w-2xl">
          Engenheiro de software e Desenvolvedor FullStack, focado em criar
          aplicações web modernas e escaláveis
        </p>

        <a
          href="https://www.linkedin.com/in/pedroff/"
          target="_blank"
          className="bg-linear-to-r/oklch from-purple-500 to-sky-400 w-40 h-10 text-zinc-100 font-semibold rounded-full flex items-center justify-center"
        >
          Saber mais
        </a>
      </div>

      <Projects />

      <Timeline />

      <footer
        className="grid grid-rows-3 md:grid-rows-1 gap-10 md:grid-cols-3 text-center"
        id="contact"
      >
        <div>
          <h1 className="text-2xl font-semibold mb-2">Fale comigo</h1>
          <p>
            <a href="https://wa.me/5555999394603" target="_blank">
              (55) 9 9939 4603
            </a>
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2">Email</h1>
          <p>pedrorf.dev@gmail.com</p>
        </div>

        <div>
          <ul className="flex justify-center items-center gap-7">
            <li className="cursor-pointer">
              <a href="https://github.com/pedrorfdev" target="_blank">
                <img src={github} alt="" className="size-12" />
              </a>
            </li>

            <li className="cursor-pointer">
              <a href="https://www.linkedin.com/in/pedroff/" target="_blank">
                <img src={linkedin} alt="" className="size-12" />
              </a>
            </li>

            {/* <li className="cursor-pointer">
              <i>
                <img src={figma} alt="" className="size-12" />
              </i>
            </li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
}

import arqSite from "../assets/project-arq.png";
import salesDashboard from "../assets/project-sales-dashboard.png";
import taskBoard from "../assets/project-task-board.png";
import timer from "../assets/project-timer.png";

export function Projects() {
  return (
    <div id="projects" className="pt-24 sm:pt-0">
      <h1 className="text-zinc-100 text-5xl font-bold mb-14 text-center md:text-start">
        <span className="text-indigo-600 tracking-wider">Pro</span>
        jetos
      </h1>

      <div className="grid md:grid-cols-3 gap-8 space-y-5 px-4 justify-center">
        <div className="max-w-[450px] h-[550px] flex flex-col p-5 rounded-ss-3xl rounded-ee-3xl ring ring-zinc-100/70">
          <div>
            <img className="w-full rounded-sm" src={timer} alt="" />
          </div>

          <div className="text-zinc-100 flex flex-col justify-center gap-5 flex-1">
            <h1 className="text-2xl font-semibold text-sky-500">
              Pomodoro Timer
            </h1>

            <p className="h-1/2">
              Baseado na técnica pomodoro, onde você define o nome da tarefa e
              quanto tempo deseja trabalhar nela, também é possível ver um
              pequenho histórico das últimas tarefas
            </p>
          </div>

          <div>
            <button
              className="bg-linear-to-r/oklch from-purple-500 to-sky-400 w-full md:w-40 h-10 text-zinc-100 font-semibold rounded-full"
              // onClick={navigateToProject("ignite-timer")}
            >
              Ver Reposítório
            </button>
          </div>
        </div>

        <div className="max-w-[450px] h-[550px] flex flex-col p-5 rounded-ss-3xl rounded-ee-3xl ring ring-zinc-100/70">
          <div>
            <img className="w-full rounded-sm" src={salesDashboard} alt="" />
          </div>

          <div className="text-zinc-100 flex flex-col justify-center gap-5 flex-1">
            <h1 className="text-2xl font-semibold text-sky-500">
              Sales Dashboard
            </h1>

            <p className="h-1/2">
              Dashboard de vendas, com gráficos, fluxo de autenticação, e testes
              para garantir um bom funcionamento do cógido
            </p>
          </div>

          <div>
            <button
              className="bg-linear-to-r/oklch from-purple-500 to-sky-400 w-full md:w-40 h-10 text-zinc-100 font-semibold rounded-full"
              // onClick={navigateToProject("ignite-timer")}
            >
              Ver Reposítório
            </button>
          </div>
        </div>

        <div className="max-w-[450px] h-[550px] flex flex-col p-5 rounded-ss-3xl rounded-ee-3xl ring ring-zinc-100/70">
          <div>
            <img className="w-full rounded-sm" src={taskBoard} alt="" />
          </div>

          <div className="text-zinc-100 flex flex-col justify-center gap-5 flex-1">
            <h1 className="text-2xl font-semibold text-sky-500">Task Board</h1>

            <p className="h-1/2">
              Lista de tarefas, com os dados armazenados no navegador do usuário
            </p>
          </div>

          <div>
            <button
              className="bg-linear-to-r/oklch from-purple-500 to-sky-400 w-full md:w-40 h-10 text-zinc-100 font-semibold rounded-full"
              // onClick={navigateToProject("ignite-timer")}
            >
              Ver Reposítório
            </button>
          </div>
        </div>

        <div className="max-w-[450px] h-[550px] flex flex-col p-5 rounded-ss-3xl rounded-ee-3xl ring ring-zinc-100/70">
          <div>
            <img className="w-full rounded-sm" src={arqSite} alt="" />
          </div>

          <div className="text-zinc-100 flex flex-col justify-center gap-5 flex-1">
            <h1 className="text-2xl font-semibold text-sky-500">Arq site</h1>

            <p className="h-1/2">
              Site pensado para a área de arquitetura com internacionalização em
              dois idiomas, inglês e português
            </p>
          </div>

          <div>
            <button
              className="bg-linear-to-r/oklch from-purple-500 to-sky-400 w-full md:w-40 h-10 text-zinc-100 font-semibold rounded-full"
              // onClick={navigateToProject("ignite-timer")}
            >
              Ver Reposítório
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

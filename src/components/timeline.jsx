export function Timeline() {
  return (
    <div className="relative pt-20 sm:pt-0" id="about">
      {/* Timeline Horizontal (Telas Maiores) */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Linha Horizontal */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2"></div>

        {/* 2018 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center font-semibold mt-8 ">
            2018
            <br />
            Fundamentos da Programação
          </h1>
          <p className="text-sm mt-20 text-center h-full flex items-center">
            Lógica de programação e orientação a objetos.
          </p>
        </div>

        {/* 2020 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center font-semibold mt-8 ">
            2020: Desenvolvimento Full-Stack
          </h1>

          <p className="text-sm mt-20 text-center h-80 flex items-center">
            React, Node.js e construção de aplicações web.
          </p>
        </div>

        {/* 2022 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center font-semibold mt-8 ">
            2022
            <br />
            Ecossistema React e Front-End
          </h1>

          <p className="text-sm mt-20 text-center h-full flex items-center">
            Aprofundamento em React e tecnologias front-end avançadas.
          </p>
        </div>

        {/* 2023 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center w-full font-semibold mt-8 ">
            2023
            <br />
            Aplicação
            <br />
            Prática
          </h1>

          <p className="text-sm mt-20 text-center h-full flex items-center">
            Projetos práticos e exploração de novas tecnologias.
          </p>
        </div>

        {/* 2024 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center font-semibold mt-8 ">
            2024
            <br />
            Aprofundamento Tecnológico
          </h1>

          <p className="text-sm mt-20 text-center h-full flex items-center">
            React, TypeScript e Node.js avançados.
          </p>
        </div>

        {/* 2025 */}
        <div className="relative flex flex-col justify-around text-center items-center max-w-[200px] h-80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-100 z-10"></div>
          <h1 className="text-lg text-center font-semibold mt-8 ">
            2025
            <br />
            Desenvolvimento e Prática Intensiva
          </h1>

          <p className="text-sm mt-20 text-center h-full flex items-center">
            Aplicação de conhecimentos em projetos e aprimoramento contínuo.
          </p>
        </div>
      </div>

      {/* Timeline Vertical (Telas Menores) */}
      <div className="lg:hidden flex flex-col items-center px-4">
        {/* 2018 */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lg text-center font-semibold">
            2018: Fundamentos da Programação
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              Lógica de programação e orientação a objetos.
            </p>
          </div>
        </div>

        {/* 2020 */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lg text-center font-semibold">
            2020: Desenvolvimento Full-Stack
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              React, Node.js e construção de aplicações web.
            </p>
          </div>
        </div>

        {/* 2022 */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lg text-center font-semibold">
            2022: Ecossistema React e Front-End
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              Aprofundamento em React e tecnologias front-end avançadas.
            </p>
          </div>
        </div>

        {/* 2023 */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lg text-center font-semibold">
            2023: Aplicação Prática
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              Projetos práticos e exploração de novas tecnologias.
            </p>
          </div>
        </div>

        {/* 2024 */}
        <div className="flex flex-col items-center mb-8 w-full">
          <h1 className="text-lg text-center font-semibold">
            2024: Aprofundamento Tecnológico
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              React, TypeScript e Node.js avançados.
            </p>
          </div>
        </div>

        {/* 2025 */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-lg text-center font-semibold">
            2025: Desenvolvimento e Prática Intensiva
          </h1>
          <div className="w-0.5 h-8 bg-gray-300 mt-2"></div>
          <div className="relative border border-gray-300 p-4 rounded-md">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 w-0.5 h-4 bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-0.5 h-4 bg-gray-300"></div>
            <p className="text-sm text-center">
              Aplicação de conhecimentos em projetos e aprimoramento contínuo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

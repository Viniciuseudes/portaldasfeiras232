"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Itens do grid ajustados para o layout final e exato do seu esquema
const gridItems = [
  {
    id: "moda",
    content: (
      <h2 className="text-6xl font-extrabold text-white tracking-wider">
        MODA
      </h2>
    ),
    className: "bg-brand-red",
    gridArea: "1 / 1 / 2 / 4", // Mais largo
    animationDelay: "0s",
  },
  {
    id: "green-square",
    content: null,
    className: "bg-lime-300", // Menor
    gridArea: "1 / 4 / 2 / 5",
    animationDelay: "0.5s",
  },
  {
    id: "logo",
    content: (
      <Image
        src="/image.png"
        alt="Logo Portal das Feiras 232"
        width={100}
        height={25}
      />
    ),
    className: "bg-white border border-gray-100",
    gridArea: "2 / 1 / 3 / 3",
    animationDelay: "1s",
  },
  {
    id: "empreendedorismo",
    content: (
      <h3 className="text-5xl font-semibold text-white text-center leading-tight">
        empreen- dedorismo
      </h3>
    ),
    className: "bg-teal-400",
    gridArea: "2 / 3 / 3 / 5",
    animationDelay: "1.5s",
  },
  {
    id: "inovacao",
    content: (
      <h2 className="text-7xl font-bold text-white tracking-wide">inovação</h2>
    ),
    className: "bg-brand-blue",
    gridArea: "3 / 1 / 9 / 6",
    animationDelay: "2s",
  },
  {
    id: "do-do-do",
    content: (
      <div className="flex flex-col items-center justify-around h-full text-2xl font-bold text-gray-700 py-2">
        <span>D</span>
        <span>o</span>
        <span className="hidden sm:inline">D</span>
        <span className="hidden sm:inline">o</span>
      </div>
    ),
    className: "bg-white border-2 border-black",
    gridArea: "1 / 5 / 3 / 6", // Novo elemento vertical
    animationDelay: "2.5s",
  },
  {
    id: "tall-image",
    // --- ATENÇÃO: SUBSTITUIR PELA IMAGEM CORRETA ---
    content: (
      <Image
        src="/modern-commercial-complex-3d-mockup-fashion-retail.jpg"
        alt="Imagem alta de placeholder"
        layout="fill"
        objectFit="cover"
      />
    ),
    className: "p-0 overflow-hidden bg-gray-200",
    gridArea: "1 / 6 / 9 / 8", // Nova imagem alta
    animationDelay: "3s",
  },
];

export function HeroSection() {
  return (
    <Dialog>
      <section
        id="inicio"
        className="relative w-full min-h-screen bg-white flex items-center"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-x-8 items-center min-h-screen px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
          {/* Lado do Texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-4">
              O Futuro do Comércio de Moda do Nordeste Começa Aqui.
            </h1>
            <p className="text-lg md:text-xl max-w-xl text-muted-foreground mb-8">
              Conheça o Portal das Feiras 232: a infraestrutura completa e as
              conexões estratégicas que o seu negócio precisa para decolar em
              São Caetano.
            </p>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 font-bold text-lg px-8 py-4 h-auto rounded-lg transition-transform transform hover:scale-105"
              >
                QUERO SABER MAIS E SAIR NA FRENTE
              </Button>
            </DialogTrigger>
          </div>

          {/* Lado do Mosaico Animado */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative w-full aspect-[1.4/1] max-w-xl">
              <div
                className="grid h-full w-full gap-2"
                style={{
                  gridTemplateColumns: "repeat(6, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-center justify-center rounded-lg p-4 text-center transition-opacity duration-500",
                      item.className
                    )}
                    style={{
                      gridArea: item.gridArea,
                      animation: `cycle-visibility 8s infinite`,
                      animationDelay: item.animationDelay,
                    }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary font-bold">
            Portal das Feiras 232
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 text-muted-foreground">
          <p>
            Um projeto inovador que vai muito além da construção física — é a
            criação de um{" "}
            <strong className="text-primary">
              novo polo de desenvolvimento
            </strong>
            , pensado para impulsionar o comércio, gerar conexões estratégicas e
            fortalecer toda a cadeia do setor têxtil e de confecções.
          </p>
          <p>
            Com uma infraestrutura completa, o empreendimento foi idealizado
            para oferecer{" "}
            <strong className="text-primary">
              conforto, acessibilidade e modernidade
            </strong>{" "}
            tanto para quem vende quanto para quem compra.
          </p>
          <p>
            Mais do que um espaço de negócios, o Portal das Feiras 232 será um{" "}
            <strong className="text-primary">ambiente de oportunidades</strong>,
            capaz de movimentar a economia local, atrair investimentos e
            consolidar São Caetano como referência no cenário da moda regional.
          </p>
          <p className="font-semibold text-primary">
            Aqui, tradição e inovação se encontram para transformar a forma de
            fazer negócios e abrir caminho para um novo tempo no comércio do
            Nordeste.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

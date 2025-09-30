"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter, // 1. Importado o DialogFooter
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { GoogleFormModal } from "@/components/GoogleFormModal"; // 2. Importado o modal do Google Form
import { FileText } from "lucide-react"; // 3. Importado o ícone

const gridItems = [
  {
    id: "empreendedorismo",
    content: (
      <h2 className="text-1xl sm:text-8xl lg:text-xl font-extrabold text-white tracking-wider leading-tight text-center">
        EMPREEN
        <br className="sm:hidden" />
        DEDO
        <br className="sm:hidden" />
        RISMO
      </h2>
    ),
    className:
      "bg-brand-red row-start-2 col-start-3 col-span-2 lg:row-start-1 lg:col-start-1 lg:col-span-3",
    animationDelay: "2.4s",
  },
  {
    id: "green-square",
    content: null,
    className: "bg-lime-300 row-start-1 col-start-4 col-span-1",
    animationDelay: "0.8s",
  },
  {
    id: "logo",
    content: (
      <Image
        src="/logo2.png"
        alt="Logo Portal das Feiras 232"
        width={300}
        height={100}
      />
    ),
    className:
      "bg-white border border-gray-100 row-start-2 col-start-1 col-span-2",
    animationDelay: "1.6s",
  },
  {
    id: "moda",
    content: (
      <h3 className="text-[10vw] sm:text-4xl lg:text-6xl font-semibold text-white text-center leading-tight">
        MODA
      </h3>
    ),
    className:
      "bg-teal-400 row-start-1 col-start-1 col-span-3 lg:row-start-2 lg:col-start-3 lg:col-span-2",
    animationDelay: "0s",
  },
  {
    id: "inovacao",
    content: (
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide">
        inovação
      </h2>
    ),
    className: "bg-brand-blue row-start-3 col-start-1 col-span-5",
    animationDelay: "3.2s",
  },
  {
    id: "do-do-do",
    content: (
      <Image
        src="/LOGOVERTICAL.png"
        alt="Portal das Feiras 232"
        layout="fill"
        objectFit="contain"
      />
    ),
    className:
      "bg-white border-0 border-black relative overflow-hidden p-0 row-start-1 row-span-2 col-start-5 col-span-1",
    animationDelay: "4s",
  },
  {
    id: "tall-image",
    content: (
      <Image
        src="/mulher.png"
        alt="mulher232"
        layout="fill"
        objectFit="cover"
      />
    ),
    className:
      "relative p-0 overflow-hidden bg-gray-200 row-start-1 row-span-3 col-start-6 col-span-3",
    animationDelay: "4.8s",
  },
];

export function HeroSection() {
  return (
    <Dialog>
      <section
        id="inicio"
        className="relative w-full min-h-screen bg-white flex items-center"
      >
        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-5 gap-x-8 items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
          <div className="flex items-center justify-center w-full lg:justify-start order-1 lg:order-2 lg:col-span-3">
            <div className="relative w-full aspect-[1.5/1]">
              <div
                className="grid h-full w-full gap-2"
                style={{
                  gridTemplateColumns: "repeat(8, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                }}
              >
                {gridItems.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "flex items-center justify-center rounded-lg p-4 text-center",
                      item.className
                    )}
                    style={{
                      animation: `cycle-visibility 12s infinite`,
                      animationDelay: item.animationDelay,
                    }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1 lg:col-span-2 mt-12 lg:mt-0">
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

        {/* 4. BOTÃO ADICIONADO AQUI DENTRO DO FOOTER DO POPUP */}
        <DialogFooter>
          <GoogleFormModal>
            <Button
              size="lg"
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl"
            >
              <FileText className="w-4 h-4 mr-2" />
              Garanta já o seu espaço!
            </Button>
          </GoogleFormModal>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

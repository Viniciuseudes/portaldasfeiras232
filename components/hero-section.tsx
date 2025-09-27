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
import { SectionDivider } from "./section-divider";

export function HeroSection() {
  return (
    <Dialog>
      <section id="inicio" className="relative w-full min-h-screen bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center min-h-screen px-4 sm:px-6 lg:px-8">
          {/* Lado do Texto */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 py-16 lg:py-0">
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

          {/* Lado dos Carrosséis com Placeholders (Apenas em Desktop) */}
          <div className="hidden lg:flex relative h-[600px] gap-4 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10" />

            {/* Coluna 1: Rola para cima */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {/* Placeholders - Repetidos para loop */}
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
            </div>

            {/* Coluna 2: Rola para baixo */}
            <div className="flex flex-col gap-4 animate-scroll-down">
              {/* Placeholders - Repetidos para loop */}
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-300" />
              <div className="w-full h-[400px] rounded-2xl bg-gray-200" />
            </div>
          </div>

          {/* Imagem Estática (Apenas em Mobile) */}
          <div className="lg:hidden w-full px-4">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-commercial-complex-3d-mockup-fashion-retail.jpg"
                alt="Visão do complexo Portal das Feiras 232"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <SectionDivider />
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

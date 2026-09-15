"use client";

import { WatermarkShapes } from "./watermark-shapes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LaunchSection() {
  // URL do WhatsApp formatada com a mesma mensagem
  const whatsappUrl = "https://wa.me/5581993831048?text=Olá!%20Gostaria%20de%20garantir%20meu%20espaço.";

  return (
    <section
      id="lanc"
      className="relative bg-white py-20 lg:py-32 overflow-hidden"
    >
      <WatermarkShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Imagem da campanha e Identificação do Influenciador */}
          <div className="relative flex flex-col items-center">
            <Image
              src="/indicathalyson.png"
              alt="Lançamentoo2 do Portal das Feiras 232 em Março de 2026"
              width={600}
              height={600}
              className="rounded-2xl mx-auto"
            />
            
            {/* Nome e Instagram do influenciador */}
            <div className="mt-4 text-center text-lg">
              <span className="font-bold text-gray-800">Thalyson Girão · </span>
              <a
                href="https://www.instagram.com/thalysongirao/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline hover:opacity-80 transition-opacity"
              >
                @thalysongirao
              </a>
            </div>
          </div>

          {/* Conteúdo de texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-4xl font-bold mb-6">
              Início das atividades
            </div>

            <div className="flex flex-col w-full items-center lg:items-start">
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
               NOVEMBRO DE
              </h2>
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
                2026
              </h2>
            </div>

            <p className="text-3xl lg:text-4xl font-bold text-primary/90 mt-4">
              Garanta já seu espaço!
            </p>

            {/* Botão com link para o WhatsApp */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 h-auto rounded-lg transition-transform transform hover:scale-105"
              >
                GARANTA SEU ESPAÇO
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
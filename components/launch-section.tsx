"use client";

import { WatermarkShapes } from "./watermark-shapes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GoogleFormModal } from "./GoogleFormModal"; // 1. Importado o componente do Modal
import { FileText } from "lucide-react"; // 2. Importado o ícone para consistência

export function LaunchSection() {
  // A função de scroll foi removida, pois não é mais necessária aqui
  // const scrollToContact = () => { ... };

  return (
    <section
      id="lanc"
      className="relative bg-white py-20 lg:py-32 overflow-hidden"
    >
      <WatermarkShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Imagem da campanha */}
          <div className="relative">
            <Image
              src="/images/camisa.png"
              alt="Lançamento do Portal das Feiras 232 em Março de 2026"
              width={600}
              height={600}
              className="rounded-2xl mx-auto"
            />
          </div>

          {/* Conteúdo de texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-lg text-4xl font-bold mb-6">
              Início das atividades
            </div>

            <div className="flex flex-col w-full items-center lg:items-start">
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
                EM
              </h2>
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
                BREVE!!
              </h2>
            </div>

            <p className="text-3xl lg:text-4xl font-bold text-primary/90 mt-4">
              Garanta já seu espaço!
            </p>

            {/* 3. Botão agora está envolvido pelo GoogleFormModal */}
            <GoogleFormModal>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 mt-8 h-auto rounded-lg transition-transform transform hover:scale-105"
                // O onClick foi removido daqui
              >
                <FileText className="w-5 h-5 mr-2" />
                PREENCHER FORMULÁRIO
              </Button>
            </GoogleFormModal>
          </div>
        </div>
      </div>
    </section>
  );
}

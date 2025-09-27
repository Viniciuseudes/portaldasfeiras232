"use client";

import { WatermarkShapes } from "./watermark-shapes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LaunchSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              Lançamento!
            </div>

            <div className="flex flex-col w-full items-center lg:items-start">
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
                MARÇO
              </h2>
              <h2 className="text-6xl lg:text-8xl font-bold text-primary leading-none font-[family-name:var(--font-poppins)]">
                2026
              </h2>
            </div>

            <p className="text-3xl lg:text-4xl font-bold text-primary/90 mt-4">
              Garanta já seu espaço!
            </p>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 mt-8 h-auto rounded-lg transition-transform transform hover:scale-105"
              onClick={scrollToContact}
            >
              PREENCHER FORMULÁRIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

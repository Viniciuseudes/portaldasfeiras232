"use client"; // 1. Adicionado para permitir a função de clique

import { WatermarkShapes } from "./watermark-shapes";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react"; // 2. Importado o ícone de telefone

export function InfrastructureSection() {
  return (
    <section
      id="estrutura"
      className="relative bg-primary py-20 lg:py-32 overflow-hidden"
    >
      <WatermarkShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl mb-2 text-balance">
              Infraestrutura moderna,
              <br />
              planejada para o mercado
            </h2>

            <h3
              className="text-5xl lg:text-6xl font-bold mb-12 text-white"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.5)" }}
            >
              Esteja entre os pioneiros!
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div
                className="bg-primary text-primary-foreground px-6 py-4 rounded-2xl text-4xl"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + de 500 boxes
              </div>
              <div
                className="bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl text-3xl"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + de 40 lojas
              </div>
              <div
                className="bg-muted text-primary px-6 py-4 rounded-2xl text-3xl sm:col-span-2"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + praça de alimentação completa
              </div>
              <div
                className="bg-accent text-white px-6 py-4 rounded-2xl text-3xl sm:col-span-2"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + estacionamento amplo <br /> e estrutura de apoio
              </div>
            </div>

            {/* 3. Botão atualizado com a função onClick para abrir o WhatsApp */}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
              onClick={() => {
                const whatsappNumber = "5581993831048"; // Seu número
                const whatsappMessage =
                  "Olá! Tenho interesse em garantir meu espaço e gostaria de mais informações sobre a infraestrutura.";
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`;
                window.open(whatsappLink, "_blank");
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Quero falar com especialista!
            </Button>
          </div>

          {/* Espaço para o vídeo */}
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              >
                <source src="/video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

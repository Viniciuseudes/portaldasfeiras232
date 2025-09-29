import { WatermarkShapes } from "./watermark-shapes";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
            >
              Quero Garantir Meu Espaço
            </Button>
          </div>

          {/* Espaço para a imagem */}
          <div className="relative">
            <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
              <Image
                src="/estrutura.png"
                alt="Mulher feliz segurando caixas de compras no Portal das Feiras 232"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { WatermarkShapes } from "./watermark-shapes";
import { Button } from "@/components/ui/button";

export function InfrastructureSection() {
  return (
    <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
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
                className="bg-primary text-primary-foreground px-6 py-4 rounded-2xl text-xl"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + de 500 boxes
              </div>
              <div
                className="bg-secondary text-secondary-foreground px-6 py-4 rounded-2xl text-xl"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + de 40 lojas
              </div>
              <div
                className="bg-muted text-primary px-6 py-4 rounded-2xl text-xl sm:col-span-2"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                + praça de alimentação completa
              </div>
              <div
                className="bg-accent text-white px-6 py-4 rounded-2xl text-xl sm:col-span-2"
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
            <div className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm">Espaço para foto da mulher com caixas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

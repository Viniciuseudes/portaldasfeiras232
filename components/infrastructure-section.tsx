"use client";

import { useEffect, useRef } from "react";
import { WatermarkShapes } from "./watermark-shapes";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function InfrastructureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Observa a secção inteira
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // Quando 30% da secção entrar no ecrã
        if (entry.isIntersecting && videoRef.current) {
          // Tenta iniciar o vídeo (com áudio)
          videoRef.current.play().catch((error) => {
            console.warn(
              "O navegador bloqueou o autoplay com áudio. A iniciar sem som.",
              error,
            );
            // Fallback: Se o navegador bloquear o áudio, reproduz o vídeo sem som
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .catch((e) =>
                  console.error("Erro ao reproduzir vídeo sem som:", e),
                );
            }
          });
        } else if (!entry.isIntersecting && videoRef.current) {
          // Pausa o vídeo quando o utilizador sair da secção
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="estrutura"
      className="relative bg-primary py-20 lg:py-32 overflow-hidden"
    >
      <WatermarkShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo da Esquerda */}
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
              onClick={() => {
                const whatsappNumber = "5581993831048";
                const whatsappMessage =
                  "Olá! Tenho interesse em garantir meu espaço e gostaria de mais informações sobre a infraestrutura.";
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`;
                window.open(whatsappLink, "_blank");
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Quero falar com especialista!
            </Button>
          </div>

          {/* Espaço para o vídeo Vertical (9:16) */}
          <div className="flex justify-center lg:justify-end w-full">
            {/* O max-w-[360px] impede que o vídeo estoure a altura da tela no desktop */}
            <div className="relative w-full max-w-[360px] shadow-2xl rounded-2xl transition-transform hover:scale-[1.02] duration-500">
              <div className="aspect-[9/16] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group">
                <video
                  ref={videoRef}
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/trafegolojistas.mp4" type="video/mp4" />O seu
                  navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

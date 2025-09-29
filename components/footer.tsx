"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image"; // 1. Importe o componente Image

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            {/* 2. Substitua o texto pela imagem do logo */}
            <div className="mb-4">
              <Image
                src="/image.png" // Caminho para a sua logo na pasta public
                alt="Logo Portal das Feiras 232"
                width={200} // Ajuste a largura conforme necessário
                height={50} // Ajuste a altura conforme necessário
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 text-pretty">
              O novo complexo de moda de São Caetano-PE. Transformando o
              comércio regional e fortalecendo o polo têxtil do Agreste.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                {/* 3. Atualize o número de telefone */}
                <span>(81) 9 9383-1048</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>contato@portaldasfeiras232.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>BR-232, São Caetano - PE</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("lanc")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Oportunidade
              </button>
              <button
                onClick={() => scrollToSection("estrutura")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Estrutura
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Benefícios
              </button>
            </nav>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Interesse</h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                className="px-3 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-3 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <input
                type="tel"
                placeholder="Seu telefone"
                className="px-3 py-2 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded font-medium transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Portal das Feiras 232. @EZZECOMUNICACAO.
          </p>
        </div>
      </div>
    </footer>
  );
}

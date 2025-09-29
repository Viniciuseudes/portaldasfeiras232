"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react"; // 1. Mudei o ícone de 'Phone' para 'FileText'
import { GoogleFormModal } from "./GoogleFormModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Início", sectionId: "inicio" },
    { label: "Lançamento", sectionId: "lanc" },
    { label: "Estrutura", sectionId: "estrutura" },
    { label: "Polo Têxtil", sectionId: "polo-textil" },
    { label: "Localização", sectionId: "localizacao" },
    { label: "Benefícios", sectionId: "beneficios" },
    { label: "Contato", sectionId: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("inicio");
              }}
              className="cursor-pointer"
            >
              <Image
                src="/image.png"
                alt="Logo Portal das Feiras 232"
                width={180}
                height={45}
                priority
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <GoogleFormModal>
              {/* 2. Cor do botão e ícone atualizados */}
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl"
              >
                <FileText className="w-4 h-4 mr-2" />
                Garanta seu Espaço
              </Button>
            </GoogleFormModal>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-blue transition-colors"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => scrollToSection(link.sectionId)}
                  className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </button>
              ))}
              <GoogleFormModal>
                {/* 3. Cor e ícone atualizados também no botão mobile */}
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-bold mt-4 rounded-xl w-full"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Garanta seu Espaço
                </Button>
              </GoogleFormModal>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. IMPORTAR O 'usePathname'
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";
import { GoogleFormModal } from "./GoogleFormModal";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. CAPTURAR A ROTA ATUAL

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
    { label: "Início", sectionId: "inicio", href: "/#inicio" },
    { label: "Lançamento", sectionId: "lanc", href: "/#lanc" },
    { label: "Estrutura", sectionId: "estrutura", href: "/#estrutura" },
    { label: "Polo Têxtil", sectionId: "polo-textil", href: "/#polo-textil" },
    { label: "Localização", sectionId: "localizacao", href: "/#localizacao" },
    { label: "Benefícios", sectionId: "beneficios", href: "/#beneficios" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", sectionId: "contato", href: "/#contato" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionId?: string
  ) => {
    // 3. LÓGICA ATUALIZADA
    // Se for um link de seção E estivermos na página inicial, faz a rolagem suave
    if (sectionId && pathname === "/") {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    // Se for o menu mobile, sempre fecha ao clicar
    setIsMenuOpen(false);
    // Para todos os outros casos (ex: clicar em "Estrutura" estando no "/blog"),
    // o comportamento padrão do Link (href="/#estrutura") vai funcionar.
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={(e) => handleLinkClick(e, "/", "inicio")}
              className="cursor-pointer"
            >
              <Image
                src="/image.png"
                alt="Logo Portal das Feiras 232"
                width={180}
                height={45}
                priority
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.sectionId)}
                className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <GoogleFormModal>
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.sectionId)}
                  className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <GoogleFormModal>
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

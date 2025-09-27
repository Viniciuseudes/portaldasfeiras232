"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl lg:text-3xl font-bold text-brand-blue">
              Portal das Feiras <span className="text-brand-red">232</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("oportunidade")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Oportunidade
            </button>
            <button
              onClick={() => scrollToSection("estrutura")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Estrutura
            </button>
            <button
              onClick={() => scrollToSection("polo-textil")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Polo Têxtil
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-bold rounded-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/5581999999999?text=Olá! Gostaria de garantir meu espaço no Portal das Feiras 232",
                  "_blank",
                )
              }
            >
              <Phone className="w-4 h-4 mr-2" />
              Garanta seu Espaço
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-brand-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("oportunidade")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Oportunidade
              </button>
              <button
                onClick={() => scrollToSection("estrutura")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Estrutura
              </button>
              <button
                onClick={() => scrollToSection("polo-textil")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Polo Têxtil
              </button>
              <button
                onClick={() => scrollToSection("localizacao")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-gray-700 hover:text-brand-blue transition-colors font-medium py-2"
              >
                Contato
              </button>
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold mt-4 rounded-xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/5581999999999?text=Olá! Gostaria de garantir meu espaço no Portal das Feiras 232",
                    "_blank",
                  )
                }
              >
                <Phone className="w-4 h-4 mr-2" />
                Garanta seu Espaço
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

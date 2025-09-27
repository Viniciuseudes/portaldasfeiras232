"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, FileText } from "lucide-react"
import { DecorativeShapes } from "@/components/decorative-shapes"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <DecorativeShapes />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Logo placeholder */}
            <div className="w-64 h-16 bg-brand-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Portal das Feiras 232</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-blue leading-tight">
                Infraestrutura moderna,
                <br />
                planejada para o mercado
              </h1>

              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue">Esteja entre os pioneiros!</h2>
            </div>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-blue text-white px-6 py-4 rounded-2xl font-bold text-lg">+ de 500 boxes</div>
              <div className="bg-brand-red text-white px-6 py-4 rounded-2xl font-bold text-lg">+ de 40 lojas</div>
              <div className="bg-brand-yellow text-brand-blue px-6 py-4 rounded-2xl font-bold text-lg col-span-full">
                + praça de alimentação completa
              </div>
              <div className="bg-brand-green text-white px-6 py-4 rounded-2xl font-bold text-lg col-span-full">
                + estacionamento amplo e estrutura de apoio
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-4 h-auto rounded-xl"
                onClick={() =>
                  window.open(
                    "https://wa.me/5581999999999?text=Olá! Quero garantir meu espaço no Portal das Feiras 232",
                    "_blank",
                  )
                }
              >
                <Phone className="w-5 h-5 mr-2" />
                Quero Garantir Meu Espaço
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-lg px-8 py-4 h-auto bg-white rounded-xl border-2"
                onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
              >
                <FileText className="w-5 h-5 mr-2" />
                Pré-cadastro Online
              </Button>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Imagem da mulher com pacotes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

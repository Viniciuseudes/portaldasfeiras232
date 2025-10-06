"use client";

import { Button } from "@/components/ui/button";
import { Phone, FileText, ArrowRight } from "lucide-react";
import { DecorativeShapes } from "@/components/decorative-shapes";
import { GoogleFormModal } from "./GoogleFormModal"; // 1. Importe o novo componente

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <DecorativeShapes />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Ilustração do personagem com óculos
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-brand-red text-white px-8 py-4 rounded-2xl font-bold text-2xl">
                  Início das atividades!
                </div>
                <h2 className="text-5xl lg:text-6xl font-bold text-brand-blue">
                  tttt
                  <br />
                  2026
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-blue">
                  Garanta já seu espaço!
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-4 h-auto rounded-xl"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5581993831048?text=Olá! Quero garantir meu espaço no Portal das Feiras 232",
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Comercial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* 2. Envolva o botão do formulário com o GoogleFormModal */}
                <GoogleFormModal>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-lg px-8 py-4 h-auto bg-white border-2 rounded-xl"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Formulário Online
                  </Button>
                </GoogleFormModal>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>📞 Atendimento: Segunda a Sexta, 8h às 18h</p>
                <p>📧 E-mail: contato@portaldasfeiras232.com.br</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

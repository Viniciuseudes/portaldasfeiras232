"use client";

import { useState } from "react";
import Image from "next/image"; // Importado o componente Image
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GoogleFormModalProps {
  children: React.ReactNode;
}

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf2Vj8D0lHen1WIPxKavfMVrHI-vaKsMQbw9UzXmjhRPF1zmg/viewform?embedded=true";

export function GoogleFormModal({ children }: GoogleFormModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog onOpenChange={(open) => !open && setIsLoading(true)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* 1. O DialogContent agora é um container flex-col */}
      <DialogContent className="sm:max-w-[900px] w-[95vw] h-[85vh] p-0 border-none flex flex-col bg-white rounded-lg overflow-hidden">
        {/* 2. Imagem do Cabeçalho */}
        <div className="w-full h-auto relative">
          <Image
            src="/banerform2.jpeg" // <-- Coloque o caminho da sua imagem aqui
            alt="Banner do Portal das Feiras 232"
            width={800}
            height={200} // Ajuste a altura conforme o design da sua imagem
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* 3. Container para o formulário e o carregamento */}
        <div className="relative flex-1 w-full">
          {/* Indicador de "Carregando..." que fica sobre o iframe */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="flex items-center text-muted-foreground">
                <svg
                  className="animate-spin h-6 w-6 text-primary mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Carregando formulário...
              </div>
            </div>
          )}

          {/* Iframe do Formulário */}
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            className={cn(
              "w-full h-full transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setIsLoading(false)}
          >
            Carregando…
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

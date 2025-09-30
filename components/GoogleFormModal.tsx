"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Interface para definir as propriedades que o componente aceita
interface GoogleFormModalProps {
  children: React.ReactNode;
}

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf2Vj8D0lHen1WIPxKavfMVrHI-vaKsMQbw9UzXmjhRPF1zmg/viewform?embedded=true";

export function GoogleFormModal({ children }: GoogleFormModalProps) {
  // 1. Estado para controlar a visibilidade do "Carregando..."
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog onOpenChange={(open) => !open && setIsLoading(true)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px] w-[95vw] h-[85vh] p-0 border-none flex items-center justify-center">
        {/* 2. Indicador de "Carregando..." que aparece enquanto o iframe não carregar */}
        {isLoading && (
          <div className="absolute flex flex-col items-center justify-center text-center text-muted-foreground">
            <svg
              className="animate-spin h-8 w-8 text-primary mb-4"
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
        )}

        {/* 3. O iframe fica invisível até carregar e chama a função para esconder o "Carregando..." */}
        <iframe
          src={GOOGLE_FORM_EMBED_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className={cn(
            "rounded-lg transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100" // Fica invisível enquanto carrega
          )}
          onLoad={() => setIsLoading(false)} // Esconde o "Carregando..." quando o iframe terminar de carregar
        >
          Carregando…
        </iframe>
      </DialogContent>
    </Dialog>
  );
}

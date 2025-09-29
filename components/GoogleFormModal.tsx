"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Interface para definir as propriedades que o componente aceita
interface GoogleFormModalProps {
  children: React.ReactNode;
}

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf2Vj8D0lHen1WIPxKavfMVrHI-vaKsMQbw9UzXmjhRPF1zmg/viewform?embedded=true";

export function GoogleFormModal({ children }: GoogleFormModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[900px] w-[95vw] h-[85vh] p-0 border-none">
        <iframe
          src={GOOGLE_FORM_EMBED_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
        >
          Carregando…
        </iframe>
      </DialogContent>
    </Dialog>
  );
}

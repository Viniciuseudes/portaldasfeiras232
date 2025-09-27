"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react"; // Using a similar icon from lucide-react

export function FloatingWhatsappButton() {
  const whatsappLink =
    "https://wa.me/5581999999999?text=Olá! Gostaria de tirar umas dúvidas sobre o Portal das Feiras 232";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              size="icon"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transition-transform transform hover:scale-110"
            >
              <MessageCircle className="w-8 h-8" />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tirar dúvidas</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

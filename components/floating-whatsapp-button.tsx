"use client";

export function FloatingWhatsappButton() {
  const whatsappNumber = "5581993831048"; // Substitua pelo seu número
  const whatsappMessage = "Olá! Vim pelo site e preciso de ajuda.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      href={whatsappLink}
      className="group fixed bottom-10 right-10 z-50 flex items-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      {/* AJUSTE: Adicionada a classe 'hidden md:inline-block' 
        Isso faz com que o texto só exista em telas médias (md) ou maiores.
        A classe 'invisible' foi removida por não ser mais necessária.
      */}
      <div className="whatsapp-text hidden md:inline-block -translate-x-2 transform whitespace-nowrap rounded-full bg-white py-2 px-4 text-sm font-semibold text-gray-800 opacity-0 shadow-md transition-all duration-300 ease-in-out group-hover:visible group-hover:-translate-x-0 group-hover:opacity-100">
        Tirar Dúvidas!
      </div>

      <div className="animate-pulse-whatsapp flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </div>
    </a>
  );
}

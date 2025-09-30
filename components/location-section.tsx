import { Card } from "@/components/ui/card";
import { Clock, Car, Plane } from "lucide-react";
import { WatermarkShapes } from "./watermark-shapes";

export function LocationSection() {
  const distances = [
    { city: "Caruaru", time: "15 min", icon: Car },
    { city: "Recife", time: "1h 30min", icon: Car },
    { city: "Toritama", time: "20 min", icon: Car },
    { city: "Aeroporto", time: "1h 15min", icon: Plane },
  ];
  const mapUrl =
    "https://maps.google.com/maps?q=-8.320443,-36.073400&z=17&output=embed&hl=pt-BR";

  return (
    <section
      id="localizacao"
      className="relative py-20 lg:py-32 bg-brand-blue overflow-hidden"
    >
      <WatermarkShapes />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header following brand style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-8">
              LOCALIZAÇÃO PRIVILEGIADA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Estamos perto de tudo!
            </h2>
            <h2 className="text-1xl lg:text-2xl font-bold text-white mb-8">
              Br-232 ligando Recife ao Sertão
            </h2>

            {/* Interactive Map */}
            <div className="bg-white rounded-3xl p-4 sm:p-8 max-w-4xl mx-auto shadow-2xl">
              <iframe
                src={mapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
            {distances.map((distance, index) => (
              <Card
                key={index}
                // AJUSTE FINAL: Adicionado aspect-square e justify-center para o mobile
                className="p-2 sm:p-4 text-center flex flex-col justify-center aspect-square sm:aspect-auto hover:shadow-lg transition-shadow bg-white"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <distance.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-brand-blue mb-0.5 sm:mb-1 leading-tight">
                  {distance.city}
                </h3>
                <div className="flex items-center justify-center gap-1 text-gray-600 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{distance.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

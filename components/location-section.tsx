import { Card } from "@/components/ui/card"
import { Clock, Car, Plane } from "lucide-react"
import { DecorativeShapes } from "@/components/decorative-shapes"

export function LocationSection() {
  const distances = [
    { city: "Caruaru", time: "15 min", icon: Car },
    { city: "Recife", time: "1h 30min", icon: Car },
    { city: "Toritama", time: "20 min", icon: Car },
    { city: "Aeroporto", time: "1h 15min", icon: Plane },
  ]

  return (
    <section id="localizacao" className="relative py-20 lg:py-32 bg-brand-blue overflow-hidden">
      <DecorativeShapes />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header following brand style */}
          <div className="text-center mb-16">
            <div className="inline-block bg-brand-green text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-8">
              LOCALIZAÇÃO PRIVILEGIADA
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">BR-232 ligando Recife ao sertão</h2>

            {/* Map placeholder */}
            <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500 text-lg">Mapa da localização BR-232</span>
              </div>
            </div>
          </div>

          {/* Distance Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {distances.map((distance, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <distance.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue mb-2">{distance.city}</h3>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{distance.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

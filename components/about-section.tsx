import { Card } from "@/components/ui/card"
import { DecorativeShapes } from "@/components/decorative-shapes"

export function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-brand-blue overflow-hidden">
      <DecorativeShapes />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Apresentação da Operação</h2>
              <p className="text-lg lg:text-xl leading-relaxed text-pretty opacity-90">
                O Portal das Feiras 232 é o novo complexo de moda de São Caetano-PE, criado para transformar o comércio
                regional e fortalecer o polo têxtil do Agreste.
              </p>
              <p className="text-lg lg:text-xl leading-relaxed text-pretty mt-4 opacity-90">
                Com infraestrutura moderna e localização estratégica às margens da BR-232, oferecemos a oportunidade
                perfeita para empreendedores que desejam fazer parte do futuro da moda no Nordeste.
              </p>
            </div>

            {/* Visual Element */}
            <Card className="p-8 bg-white">
              <div className="aspect-video bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Complexo Moderno 3D</span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-blue mb-2">Complexo Moderno</h3>
                <p className="text-gray-600">Infraestrutura planejada para o sucesso do seu negócio</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

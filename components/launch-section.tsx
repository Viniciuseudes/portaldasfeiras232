import { DecorativeShapes } from "./decorative-shapes"
import { Button } from "@/components/ui/button"

export function LaunchSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <DecorativeShapes variant="subtle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Espaço para a imagem/ilustração */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm">Espaço para ilustração de moda</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-accent text-white px-6 py-3 rounded-full text-lg font-bold mb-8">
              Lançamento!
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
              MARÇO
              <br />
              <span className="text-6xl lg:text-7xl">2026</span>
            </h2>

            <p className="text-2xl lg:text-3xl font-bold text-primary mb-8">Garanta já seu espaço!</p>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              Quero Garantir Meu Espaço
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

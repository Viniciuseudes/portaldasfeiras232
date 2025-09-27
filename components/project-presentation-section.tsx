import { DecorativeShapes } from "./decorative-shapes"
import { Button } from "@/components/ui/button"

export function ProjectPresentationSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <DecorativeShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 text-balance">
            Portal das Feiras 232
          </h1>

          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 space-y-6">
            <p>
              Um projeto inovador que vai muito além da construção física — é a criação de um
              <strong className="text-primary"> novo polo de desenvolvimento</strong>, pensado para impulsionar o
              comércio, gerar conexões estratégicas e fortalecer toda a cadeia do setor têxtil e de confecções.
            </p>

            <p>
              Com uma infraestrutura completa, o empreendimento foi idealizado para oferecer
              <strong className="text-primary"> conforto, acessibilidade e modernidade</strong> tanto para quem vende
              quanto para quem compra.
            </p>

            <p>
              Mais do que um espaço de negócios, o Portal das Feiras 232 será um
              <strong className="text-primary"> ambiente de oportunidades</strong>, capaz de movimentar a economia
              local, atrair investimentos e consolidar São Caetano como referência no cenário da moda regional.
            </p>

            <p className="text-xl font-semibold text-primary">
              Aqui, tradição e inovação se encontram para transformar a forma de fazer negócios e abrir caminho para um
              novo tempo no comércio do Nordeste.
            </p>
          </div>

          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
            Saiba Mais Sobre o Projeto
          </Button>
        </div>
      </div>
    </section>
  )
}

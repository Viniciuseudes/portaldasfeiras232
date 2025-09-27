import { Card } from "@/components/ui/card"
import { Building2, Users, Trophy, TrendingUp } from "lucide-react"

export function OpportunitySection() {
  const opportunities = [
    {
      icon: Building2,
      title: "Estrutura Moderna",
      description: "Instalações planejadas com tecnologia e conforto para lojistas e clientes",
    },
    {
      icon: Users,
      title: "Fluxo Garantido",
      description: "Localização estratégica garante alto fluxo de clientes da região",
    },
    {
      icon: Trophy,
      title: "Pioneirismo",
      description: "Seja um dos primeiros no mais moderno complexo de moda do Agreste",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Potencial de crescimento em um mercado em constante expansão",
    },
  ]

  return (
    <section id="oportunidade" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-primary mb-6 text-balance">
              A Oportunidade
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Descubra por que o Portal das Feiras 232 é a escolha certa para o seu negócio
            </p>
          </div>

          {/* Opportunity Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow border-primary/10 hover:border-primary/30"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <opportunity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{opportunity.title}</h3>
                <p className="text-muted-foreground text-pretty">{opportunity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

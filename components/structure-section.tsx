import { Card } from "@/components/ui/card"
import { Store, ShoppingBag, Utensils, Car } from "lucide-react"

export function StructureSection() {
  const features = [
    {
      icon: Store,
      number: "+500",
      title: "Boxes",
      description: "Espaços otimizados para diferentes tipos de negócios",
    },
    {
      icon: ShoppingBag,
      number: "+40",
      title: "Lojas",
      description: "Lojas amplas para grandes operações comerciais",
    },
    {
      icon: Utensils,
      number: "3",
      title: "Praças de Alimentação",
      description: "Espaços gastronômicos para atrair mais clientes",
    },
    {
      icon: Car,
      number: "1000+",
      title: "Vagas de Estacionamento",
      description: "Estacionamento amplo e seguro para todos",
    },
  ]

  return (
    <section id="estrutura" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-primary mb-6 text-balance">
              Estrutura do Empreendimento
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Um complexo completo pensado para oferecer a melhor experiência de compra
            </p>
          </div>

          {/* Structure Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-card hover:bg-accent/5 transition-colors border-primary/10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-secondary mb-2">{feature.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

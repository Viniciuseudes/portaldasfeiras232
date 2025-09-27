import { Card } from "@/components/ui/card";
import { Users, RefreshCw, Shield, Eye } from "lucide-react";
import { DecorativeShapes } from "./decorative-shapes";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Alta Rotatividade de Clientes",
      description:
        "Fluxo constante de compradores de toda a região do Agreste e além",
    },
    {
      icon: RefreshCw,
      title: "Estoque Sempre Renovado",
      description: "Facilidade para renovar produtos com fornecedores locais",
    },
    {
      icon: Shield,
      title: "Segurança e Acessibilidade",
      description: "Ambiente seguro e acessível para todos os públicos",
    },
    {
      icon: Eye,
      title: "Visibilidade Regional",
      description:
        "Exposição da sua marca para milhares de clientes diariamente",
    },
  ];

  return (
    <section
      id="beneficios"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      <DecorativeShapes />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-primary mb-6 text-balance">
              Benefícios para os Lojistas
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Vantagens exclusivas para quem escolhe fazer parte do Portal das
              Feiras 232
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:scale-105 border-primary/10 hover:border-primary/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-balance">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-pretty">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

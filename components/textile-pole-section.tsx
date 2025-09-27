import { Card } from "@/components/ui/card"
import { TrendingUp, MapPin, Users } from "lucide-react"

export function TextilePoleSection() {
  return (
    <section id="polo-textil" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-poppins)] text-primary mb-6 text-balance">
                Importância do Polo Têxtil do Agreste
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty mb-6">
                Caruaru, Toritama e Santa Cruz já movimentam bilhões todos os anos. Agora, o Portal das Feiras 232
                potencializa esse movimento com uma experiência moderna e planejada.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Faça parte do maior polo de confecção do Brasil e aproveite o crescimento contínuo deste mercado
                estratégico.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6">
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">R$ 8 Bi</div>
                    <div className="text-muted-foreground">Movimentação anual do polo</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/5 to-accent/5 border-secondary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">3 Cidades</div>
                    <div className="text-muted-foreground">Principais centros têxteis</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">500k+</div>
                    <div className="text-muted-foreground">Empregos gerados</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

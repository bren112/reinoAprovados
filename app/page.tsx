"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  Zap,
  Trophy,
  Target,
  BookOpen,
  TrendingUp,
  Flame,
  Sparkles,
  Crown,
  X,
} from "lucide-react"

export default function GuiaRedacaoPerfeita() {
  const [timeLeft, setTimeLeft] = useState(3600) // 1 hora em segundos
  const [isUrgent, setIsUrgent] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 300) setIsUrgent(true) // Últimos 5 minutos
        return prev > 0 ? prev - 1 : 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className={`w-full py-2 px-4 text-center text-xs sm:text-sm font-bold ${isUrgent ? "bg-primary animate-pulse" : "bg-primary"} text-primary-foreground shadow-lg`}
      >
        🔥 DESCONTO DE HOJE: Apenas {formatTime(timeLeft)} restantes! Últimas 263 vagas disponíveis! 🔥
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Lado esquerdo - Copy principal */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary text-secondary-foreground font-bold px-4 py-2 text-sm sm:text-base shadow-lg border-2 border-secondary/50">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />🏆 MÉTODO #1 NO BRASIL
                </Badge>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-black leading-tight text-balance">
                  <span className="text-primary drop-shadow-lg">A VERDADE SOBRE A "REDAÇÃO DO ENEM"</span>  QUE OS{" "}
                  <span className="text-secondary drop-shadow-lg">CURSINHOS MILIONÁRIOS</span> ESCONDERAM DE VOCÊ…{" "}
                  <span className="text-primary">ATÉ AGORA.</span>
                </h1>

                <div className="text-center py-4 sm:py-6 lg:py-8">
                  <div className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-secondary drop-shadow-2xl animate-pulse">
                    NOTA 1000
                  </div>
                </div>

                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed text-pretty">
                  <span className="text-primary font-bold">O MÉTODO SECRETO</span> QUE TRANSFORMA{" "}
                  <strong className="text-secondary bg-secondary/10 px-2 py-1 rounded">QUALQUER TEMA</strong> EM UMA{" "}
                  <strong className="text-primary bg-primary/10 px-2 py-1 rounded">REDAÇÃO PERFEITA</strong> {" "}
                  <span className="text-secondary font-bold"></span>
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-success/10 to-secondary/10 rounded-xl border-2 border-success/30 shadow-lg">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-primary to-secondary border-2 sm:border-3 border-background shadow-lg"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-secondary text-secondary drop-shadow-sm" />
                    ))}
                    <span className="text-base sm:text-lg font-bold ml-2 text-secondary">4.9/5</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    Você terá acesso a{" "}
                    <strong className="text-secondary text-sm sm:text-lg">100 modelos prontos</strong> de redação nota
                    máxima
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-card via-primary/5 to-secondary/10 border-2 border-primary/30 shadow-2xl original-border">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center">
                      <div className="relative">
                        <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-primary mb-4 drop-shadow-lg" />
                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 absolute -top-2 -right-2 text-secondary animate-pulse" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-primary">Guia da Redação Perfeita</h3>
                      <p className="text-secondary font-bold">Método Infalível #NOTA1000</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {[
                        { icon: Target, label: "100+ Modelos", color: "text-primary" },
                        { icon: TrendingUp, label: "Técnicas Secretas", color: "text-success" },
                        { icon: Trophy, label: "Casos de Sucesso", color: "text-secondary" },
                        { icon: Zap, label: "Resultados Rápidos", color: "text-accent" },
                      ].map(({ icon: Icon, label, color }) => (
                        <div
                          key={label}
                          className="text-center p-3 sm:p-4 bg-gradient-to-br from-background/80 to-primary/5 rounded-xl border border-primary/20 hover:scale-105 transition-transform"
                        >
                          <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mx-auto ${color} mb-2 drop-shadow-sm`} />
                          <p className="text-xs sm:text-sm font-bold">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20">
             
              </div>
<br />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 z-20">
                <Badge className="bg-success text-success-foreground animate-pulse shadow-lg border-2 border-white/50 text-xs sm:text-sm">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />✅ GARANTIA 7 DIAS
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-card/50 via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              O QUE NOSSOS <span className="text-secondary">ALUNOS</span> ESTÃO DIZENDO:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {[
              { img: "https://imgs-rho.vercel.app/img1.jpg", alt: "Depoimento aluno 1" },
              { img: "https://imgs-rho.vercel.app/img2.jpg", alt: "Depoimento aluno 2" },
              { img: "https://imgs-rho.vercel.app/img3.jpg", alt: "Depoimento aluno 3" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={testimonial.img || "/placeholder.svg"}
                  alt={testimonial.alt}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-card/50 via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              <span className="text-primary">ESCOLHA SEU</span> <span className="text-secondary">PLANO</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Transforme sua redação em uma <strong className="text-secondary">NOTA 1000</strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {/* Plano Completo */}
            <Card className="relative p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-card via-primary/5 to-secondary/10 border-2 border-success/50 shadow-2xl hover:scale-105 transition-transform">
          

              <div className="text-center mb-4 sm:mb-6 lg:mb-8 pt-3 sm:pt-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">Plano Completo</h3>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-success mb-2">R$27</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Ou 5x de R$5,89</p>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                {[
                  "100 Modelos Prontos de Redação Nota Máxima",
                  "Estrutura de texto validada pelos corretores",
                  "Bônus 01: Pacote com 200 Citações de Impacto",
                  "Bônus 02: 100 Temas Quentes com Argumentação Guiada",
                  "Bônus 03: Técnicas de Argumentação",
                  "Bônus 04: Técnicas de Conclusão Imbatível",
                  "Bônus 05: Banco de Conectivos e Expressões-Chave",
                  "Bônus 06: Mapas Mentais de Redação",
                  "Garantia de 30 dias",
                  "Suporte vitalício",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-10 sm:h-12 lg:h-14 text-xs sm:text-sm lg:text-lg font-bold bg-success text-success-foreground hover:bg-success/90 shadow-lg">
                <a href="https://pay.kiwify.com.br/8CxSJ8z" className="w-full h-full flex items-center justify-center">
                 PLANO COMPLETO
                </a>
              </Button>
            </Card>

            {/* Plano Básico */}
            <Card className="relative p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-card via-muted/5 to-primary/5 border-2 border-primary/30 shadow-xl hover:scale-105 transition-transform">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">Plano Básico</h3>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-success mb-2">R$10</div>
                <p className="text-xs sm:text-sm text-muted-foreground">De R$97 por apenas R$10</p>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                {[
                  { text: "100 modelos prontos de redação nota máxima", included: true },
                  { text: "Pacote com 200 Citações de Impacto", included: false },
                  { text: "100 Temas Quentes com Argumentação Guiada", included: false },
                  { text: "Técnicas de Argumentação", included: false },
                  { text: "Técnicas de Conclusão Imbatível", included: false },
                  { text: "Banco de Conectivos e Expressões-Chave", included: false },
                  { text: "Mapas Mentais de Redação", included: false },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {feature.included ? (
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-success mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-destructive mt-0.5 flex-shrink-0" />
                    )}
                    <span
                      className={`text-xs sm:text-sm font-medium leading-tight ${feature.included ? "" : "line-through text-destructive"}`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-10 sm:h-12 lg:h-14 text-xs sm:text-sm lg:text-lg font-bold bg-success text-success-foreground hover:bg-success/90 shadow-lg mb-3 sm:mb-4">
                <a href="https://pay.kiwify.com.br/nYBpoSc" className="w-full h-full flex items-center justify-center">
                 PLANO BÁSICO
                </a>
              </Button>

              <div className="bg-destructive text-destructive-foreground p-2 sm:p-3 lg:p-4 rounded-lg text-center">
                <p className="font-bold text-xs sm:text-sm">AINDA DÁ TEMPO DE LEVAR A MELHOR OPÇÃO!</p>
                <p className="text-xs">Leve mais e pague menos, 97% escolhem o super oferta!</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-card/50 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              O QUE É O <span className="text-secondary">REINO DOS APROVADOS</span>?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-card via-secondary/5 to-accent/10 border-2 border-secondary/30 shadow-2xl">
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/1-dMBOWyy5ZYMHs298SJduEDrrzD7q6Y.jpeg"
                    alt="Reino dos Aprovados Logo"
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-2xl shadow-2xl border-4 border-secondary/50"
                  />
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                    <Crown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-secondary animate-pulse drop-shadow-lg" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 text-center">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                  O REINO DOS APROVADOS é o seu <span className="text-secondary font-bold">atalho direto</span> para
                  impressionar a banca e tirar notas máximas em qualquer concurso e também no ENEM.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                  Dentro dele, você terá acesso a{" "}
                  <span className="text-secondary font-bold bg-secondary/10 px-2 py-1 rounded">
                    100 modelos prontos
                  </span>
                  , divididos por banca, todos construídos dentro da{" "}
                  <span className="text-secondary font-bold">Estrutura Oculta das Bancas</span>®, o mesmo padrão de
                  escrita que os corretores seguem para dar as maiores notas.
                </p>

                <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                  Não importa qual a banca do seu concurso: você vai entregar um texto que transmite{" "}
                  <span className="text-secondary font-bold">segurança, clareza e preparação</span> acima da média.
                </p>

                <div className="bg-secondary/10 p-4 sm:p-6 rounded-xl border-2 border-secondary/30 mt-6 sm:mt-8">
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary italic">
                    É como fazer a prova com o "gabarito da redação" na mão.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-card/50 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              <AlertTriangle className="inline w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-accent mr-3 animate-bounce" />
              <span className="text-accent">ATENÇÃO:</span> <span className="text-primary">Vagas Limitadas!</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl">
              Para manter a qualidade, liberamos apenas{" "}
              <strong className="text-accent bg-accent/10 px-2 sm:px-3 py-1 rounded-full">1000 vagas por mês</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            {[
              { number: "737", label: "Vagas Preenchidas", color: "text-accent", bgColor: "bg-accent/10" },
              {
                number: "263",
                label: "Vagas Restantes",
                color: "text-secondary animate-pulse",
                bgColor: "bg-secondary/10",
              },
              { number: "2.847", label: "Na Lista de Espera", color: "text-primary", bgColor: "bg-primary/10" },
            ].map(({ number, label, color, bgColor }) => (
              <Card
                key={label}
                className={`p-4 sm:p-6 lg:p-8 text-center border-2 shadow-xl hover:scale-105 transition-transform ${bgColor}`}
              >
                <div className={`text-3xl sm:text-4xl lg:text-6xl font-black ${color} mb-2 sm:mb-3 drop-shadow-lg`}>
                  {number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground">{label}</div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Professora - Corretora do ENEM desde 2017",
                result: "APROVADO!",
                text: "Após analisar totalmente e fazer parte da criação do curso, garanto que a nota 1000 vem!",
                gradient: "from-success/10 to-secondary/10",
                border: "border-success/50",
              },
              {
                name: "João Santos",
                role: "Professora - Corretora do ENEM desde 2021",
                result: "APROVADO!",
                text: "Após o curso, meus alunos saíram do absoluto ZERO e estão tirando mais de 940 pontos nas redações!!",
                gradient: "from-primary/10 to-accent/10",
                border: "border-primary/50",
              },
            ].map((testimonial) => (
              <Card
                key={testimonial.name}
                className={`p-4 sm:p-6 lg:p-8 border-2 ${testimonial.border} bg-gradient-to-br ${testimonial.gradient} shadow-xl hover:scale-105 transition-transform`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-secondary text-secondary drop-shadow-sm"
                    />
                  ))}
                </div>
                <p className="mb-4 sm:mb-6 italic text-sm sm:text-base lg:text-lg font-medium">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-sm sm:text-base lg:text-lg">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                  </div>
                  <Badge className="bg-success text-success-foreground text-xs sm:text-sm lg:text-lg px-2 sm:px-3 lg:px-4 py-1 lg:py-2 shadow-lg">
                    {testimonial.result}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-black text-white text-balance drop-shadow-2xl">
              ÚLTIMA CHANCE!
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/95 text-pretty font-bold">
              Não deixe essa oportunidade passar. Amanhã você pode estar
              <strong className="text-secondary bg-secondary/20 px-2 sm:px-3 py-1 rounded-lg mx-2">
                {" "}
                tirando sua primeira nota 1000
              </strong>{" "}
              na redação!
            </p>

            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 border-2 border-white/30 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-secondary mb-4 drop-shadow-2xl">
                  R$ 27,00
                </div>
                <div className="text-white/70 line-through text-xl sm:text-2xl mb-4 sm:mb-6">R$ 147,00</div>
                <Badge className="bg-primary text-primary-foreground text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 shadow-xl animate-pulse">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 mr-2" />
                  Expira em {formatTime(timeLeft)}
                </Badge>
              </div>

              <Button
                size="lg"
                className={`w-full h-16 sm:h-20 lg:h-24 text-xl sm:text-2xl lg:text-3xl font-black bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-secondary/50 ${isUrgent ? "animate-pulse pulse-glow" : ""}`}
              >
                <a href="https://pay.kiwify.com.br/8CxSJ8z" className="w-full h-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-2 sm:mr-4 text-secondary-foreground" />
                  MEU ACESSO AGORA!
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 sm:ml-4 text-secondary-foreground animate-spin" />
                </a>
              </Button>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-white/90 text-sm sm:text-base lg:text-lg font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  <span>Resultado Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  <span>Garantia 30 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  <span>Acesso vitalício  </span>
                </div>
              </div>
            </div>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg font-bold bg-black/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              ⚠️ Esta oferta não será repetida. Após o timer zerar, o preço volta para R$ 147,00
            </p>
          </div>
        </div>
      </section>

      <footer className="py-6 sm:py-8 bg-gradient-to-r from-background to-primary/5 border-t-4 border-primary/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4 font-medium text-sm sm:text-base">
            © 2025 Reino dos Aprovados - Todos os direitos reservados
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-3 text-base sm:text-lg">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-success animate-pulse" />
            <span className="text-success font-black text-lg sm:text-xl">2.847 pessoas</span>
            <span className="text-primary font-bold">compraram hoje</span>
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-accent animate-bounce" />
          </div>
        </div>
      </footer>
    </div>
  )
}

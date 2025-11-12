"use client"

import { useState, useEffect } from "react"
import { Bell, Droplets, Utensils, Clock, CheckCircle2, AlertCircle, TrendingUp, Calendar, Dumbbell, Heart, Zap, Target, Award, Flame, Star, Quote, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MounjaroCompanion() {
  const [waterIntake, setWaterIntake] = useState(0)
  const [mealsCompleted, setMealsCompleted] = useState<number[]>([])
  const [exercisesCompleted, setExercisesCompleted] = useState<number[]>([])
  const [currentTime, setCurrentTime] = useState<Date | null>(null)
  const [streak, setStreak] = useState(7)
  const [mounted, setMounted] = useState(false)

  const waterGoal = 2.5
  const waterProgress = (waterIntake / waterGoal) * 100

  useEffect(() => {
    setMounted(true)
    setCurrentTime(new Date())
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const addWater = (amount: number) => {
    setWaterIntake(prev => Math.min(prev + amount, waterGoal))
  }

  const toggleMeal = (mealId: number) => {
    setMealsCompleted(prev => 
      prev.includes(mealId) 
        ? prev.filter(id => id !== mealId)
        : [...prev, mealId]
    )
  }

  const toggleExercise = (exerciseId: number) => {
    setExercisesCompleted(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    )
  }

  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      age: 42,
      weight_lost: "18kg",
      time: "4 meses",
      avatar: "👩",
      rating: 5,
      text: "O Mounjaro Pro mudou minha vida! Perdi 18kg em 4 meses e o melhor: sem passar fome. O app me ajudou a manter a rotina e entender o que comer. Minha diabetes tipo 2 está controlada e me sinto com 20 anos de novo!",
      highlight: "Diabetes controlada"
    },
    {
      id: 2,
      name: "Carlos Eduardo",
      age: 38,
      weight_lost: "25kg",
      time: "6 meses",
      avatar: "👨",
      rating: 5,
      text: "Tentei várias dietas antes, mas nada funcionou como o Mounjaro. Com o app consegui organizar minhas refeições e exercícios. Já eliminei 25kg e meu médico está impressionado com meus exames. Recomendo demais!",
      highlight: "Exames perfeitos"
    },
    {
      id: 3,
      name: "Ana Paula",
      age: 35,
      weight_lost: "15kg",
      time: "3 meses",
      avatar: "👩‍🦰",
      rating: 5,
      text: "Estava cética no início, mas os resultados falam por si. 15kg a menos em 3 meses! O app é essencial - me lembra de beber água, me guia nas refeições e motiva nos exercícios. Nunca me senti tão bem!",
      highlight: "Autoestima renovada"
    },
    {
      id: 4,
      name: "Roberto Santos",
      age: 51,
      weight_lost: "22kg",
      time: "5 meses",
      avatar: "👨‍🦳",
      rating: 5,
      text: "Com 51 anos achei que seria impossível emagrecer. O Mounjaro Pro provou que eu estava errado! 22kg eliminados, pressão normalizada e energia que não tinha há anos. O acompanhamento do app foi fundamental!",
      highlight: "Pressão normalizada"
    },
    {
      id: 5,
      name: "Juliana Costa",
      age: 29,
      weight_lost: "12kg",
      time: "2 meses",
      avatar: "👩‍💼",
      rating: 5,
      text: "Trabalho muito e sempre foi difícil manter uma rotina saudável. O Mounjaro Pro me ajudou a organizar tudo! Perdi 12kg rapidamente e o melhor: sem efeito sanfona. Estou mais disposta e confiante!",
      highlight: "Rotina organizada"
    },
    {
      id: 6,
      name: "Fernando Lima",
      age: 45,
      weight_lost: "30kg",
      time: "7 meses",
      avatar: "👨‍💻",
      rating: 5,
      text: "Minha transformação foi incrível! 30kg a menos em 7 meses. O app me ensinou a comer corretamente e manter a disciplina. Minha família não acredita na mudança. Sou outra pessoa, mais saudável e feliz!",
      highlight: "Transformação total"
    }
  ]

  const meals = [
    {
      id: 1,
      name: "Café da Manhã",
      time: "07:00 - 08:00",
      icon: "☀️",
      calories: "300-400 kcal",
      tips: [
        "2 ovos mexidos + 1 fatia de pão integral",
        "Iogurte grego (150g) + frutas vermelhas",
        "Aveia (40g) com leite desnatado e canela",
        "Evite sucos - prefira a fruta inteira"
      ]
    },
    {
      id: 2,
      name: "Lanche da Manhã",
      time: "10:00 - 10:30",
      icon: "🥤",
      calories: "100-150 kcal",
      tips: [
        "1 maçã ou pera com 10 amêndoas",
        "Iogurte natural (100g) sem açúcar",
        "Cenoura baby com homus (2 colheres)",
        "Chá verde ou água de coco"
      ]
    },
    {
      id: 3,
      name: "Almoço",
      time: "12:00 - 13:00",
      icon: "🍽️",
      calories: "400-500 kcal",
      tips: [
        "Proteína: 120g de frango, peixe ou carne magra",
        "Vegetais: prato cheio de salada colorida",
        "Carboidrato: 3 colheres de arroz integral ou batata doce",
        "Mastigue cada garfada 20-30 vezes",
        "Pare quando sentir 80% de saciedade"
      ]
    },
    {
      id: 4,
      name: "Lanche da Tarde",
      time: "15:30 - 16:00",
      icon: "🥗",
      calories: "100-150 kcal",
      tips: [
        "Queijo cottage (100g) com tomate cereja",
        "Ovo cozido + pepino fatiado",
        "Smoothie de proteína com espinafre",
        "Castanhas (porção de 30g)"
      ]
    },
    {
      id: 5,
      name: "Jantar",
      time: "19:00 - 20:00",
      icon: "🌙",
      calories: "300-400 kcal",
      tips: [
        "Sopa de legumes com frango desfiado",
        "Peixe grelhado (150g) + brócolis no vapor",
        "Omelete de claras com vegetais",
        "Evite carboidratos após 19h",
        "Jantar até 3h antes de dormir"
      ]
    }
  ]

  const exercises = [
    {
      id: 1,
      name: "Caminhada Matinal",
      duration: "20-30 min",
      intensity: "Leve",
      icon: "🚶",
      color: "from-green-400 to-emerald-500",
      benefits: [
        "Melhora digestão e metabolismo",
        "Reduz náuseas pós-medicação",
        "Aumenta energia para o dia",
        "Queima 150-200 calorias"
      ],
      tips: [
        "Faça 1h após o café da manhã",
        "Mantenha ritmo confortável",
        "Hidrate-se antes e depois"
      ]
    },
    {
      id: 2,
      name: "Alongamento",
      duration: "10-15 min",
      intensity: "Muito Leve",
      icon: "🧘",
      color: "from-purple-400 to-pink-500",
      benefits: [
        "Reduz tensão muscular",
        "Melhora flexibilidade",
        "Alivia estresse",
        "Prepara corpo para exercícios"
      ],
      tips: [
        "Faça ao acordar ou antes de dormir",
        "Respire profundamente",
        "Não force além do confortável"
      ]
    },
    {
      id: 3,
      name: "Exercícios de Resistência",
      duration: "20-30 min",
      intensity: "Moderada",
      icon: "💪",
      color: "from-orange-400 to-red-500",
      benefits: [
        "Preserva massa muscular",
        "Acelera metabolismo",
        "Melhora composição corporal",
        "Queima 200-300 calorias"
      ],
      tips: [
        "3x por semana (dias alternados)",
        "Comece com peso leve",
        "Foque em forma correta",
        "Não faça logo após comer"
      ]
    },
    {
      id: 4,
      name: "Caminhada Pós-Jantar",
      duration: "15-20 min",
      intensity: "Leve",
      icon: "🌆",
      color: "from-blue-400 to-cyan-500",
      benefits: [
        "Auxilia digestão",
        "Reduz picos de glicose",
        "Melhora qualidade do sono",
        "Queima 100-150 calorias"
      ],
      tips: [
        "Faça 30min após o jantar",
        "Ritmo tranquilo e relaxante",
        "Ótimo para relaxar antes de dormir"
      ]
    }
  ]

  const notifications = [
    {
      time: "07:00",
      message: "☀️ Bom dia! Hora do café da manhã rico em proteínas",
      type: "meal",
      hour: 7
    },
    {
      time: "08:30",
      message: "🚶 Que tal uma caminhada leve de 20 minutos?",
      type: "exercise",
      hour: 8
    },
    {
      time: "09:00",
      message: "💧 Já bebeu 500ml de água? Mantenha-se hidratado!",
      type: "water",
      hour: 9
    },
    {
      time: "12:00",
      message: "🍽️ Almoço! Lembre-se: mastigue devagar e pare aos 80%",
      type: "meal",
      hour: 12
    },
    {
      time: "15:00",
      message: "💧 Check de hidratação: já bebeu 1,5L hoje?",
      type: "water",
      hour: 15
    },
    {
      time: "16:00",
      message: "💪 Hora ideal para exercícios de resistência!",
      type: "exercise",
      hour: 16
    },
    {
      time: "19:00",
      message: "🌙 Jantar leve! Evite carboidratos pesados",
      type: "meal",
      hour: 19
    },
    {
      time: "20:00",
      message: "🚶 Caminhada pós-jantar ajuda na digestão",
      type: "exercise",
      hour: 20
    }
  ]

  // Filtra notificações ativas apenas no cliente
  const activeNotifications = mounted && currentTime 
    ? notifications.filter(n => n.hour === currentTime.getHours())
    : []

  const dailyProgress = {
    water: waterProgress,
    meals: (mealsCompleted.length / meals.length) * 100,
    exercises: (exercisesCompleted.length / exercises.length) * 100
  }

  const overallProgress = (dailyProgress.water + dailyProgress.meals + dailyProgress.exercises) / 3

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header Premium */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-2xl shadow-lg">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Mounjaro Pro
                </h1>
                <p className="text-sm text-gray-600">Seu nutricionista pessoal 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-2 px-3 py-1">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="font-semibold">{streak} dias</span>
              </Badge>
              {mounted && currentTime && (
                <Badge variant="outline" className="gap-2 px-3 py-1">
                  <Calendar className="w-4 h-4" />
                  {currentTime.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        {/* Hero Section - Landing Page */}
        <div className="mb-12">
          <Card className="border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white shadow-2xl overflow-hidden">
            <CardContent className="pt-12 pb-12 relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-8 h-8 animate-pulse" />
                  <Badge className="bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                    Mais de 10.000 vidas transformadas
                  </Badge>
                  <Sparkles className="w-8 h-8 animate-pulse" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Transforme Sua Vida com
                  <span className="block mt-2 text-yellow-300">Mounjaro Pro</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                  O aplicativo completo que te guia em cada passo da sua jornada com Mounjaro
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-5xl font-bold mb-2">20kg</div>
                    <div className="text-white/90">Perda média de peso</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-5xl font-bold mb-2">98%</div>
                    <div className="text-white/90">Taxa de satisfação</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-5xl font-bold mb-2">24/7</div>
                    <div className="text-white/90">Suporte inteligente</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-xl">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Começar Agora Grátis
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-sm">
                    Ver Depoimentos
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6 text-white/80">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sem cartão de crédito • Grátis para sempre</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefícios Principais */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Por que escolher Mounjaro Pro?
            </h3>
            <p className="text-lg text-gray-600">
              Tudo que você precisa para ter sucesso em um só lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Lembretes Inteligentes</CardTitle>
                <CardDescription>
                  Notificações personalizadas para refeições, hidratação e exercícios no momento certo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-blue-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Guia Alimentar Completo</CardTitle>
                <CardDescription>
                  Plano de refeições detalhado com opções práticas e deliciosas para cada momento do dia
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-green-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-3">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Exercícios Personalizados</CardTitle>
                <CardDescription>
                  Rotina de atividades físicas adaptada para quem usa Mounjaro, com intensidade progressiva
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-orange-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Acompanhamento de Progresso</CardTitle>
                <CardDescription>
                  Visualize sua evolução diária com gráficos e estatísticas motivadoras
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-pink-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Gestão de Efeitos Colaterais</CardTitle>
                <CardDescription>
                  Dicas práticas para lidar com náuseas, fadiga e outros efeitos comuns do tratamento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-yellow-200 hover:shadow-xl transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Sistema de Conquistas</CardTitle>
                <CardDescription>
                  Mantenha-se motivado com metas diárias, sequências e recompensas por consistência
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Notificações Inteligentes */}
        {activeNotifications.length > 0 && (
          <Card className="mb-6 border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Bell className="w-5 h-5 text-white animate-pulse" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-orange-900 text-lg">Lembrete Inteligente</h3>
                  {activeNotifications.map((notif, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <p className="text-orange-800 font-medium">{notif.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Dashboard de Progresso */}
        <Card className="mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-2xl">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">Progresso de Hoje</h2>
                <p className="text-white/80">Continue assim! Você está indo muito bem 🎉</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold">{Math.round(overallProgress)}%</div>
                <div className="text-white/80 text-sm">Completo</div>
              </div>
            </div>
            <Progress value={overallProgress} className="h-3 bg-white/20" />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <Droplets className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round(dailyProgress.water)}%</div>
                <div className="text-sm text-white/80">Hidratação</div>
              </div>
              <div className="text-center">
                <Utensils className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round(dailyProgress.meals)}%</div>
                <div className="text-sm text-white/80">Refeições</div>
              </div>
              <div className="text-center">
                <Dumbbell className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">{Math.round(dailyProgress.exercises)}%</div>
                <div className="text-sm text-white/80">Exercícios</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
            <TabsTrigger value="today">Hoje</TabsTrigger>
            <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
            <TabsTrigger value="meals">Refeições</TabsTrigger>
            <TabsTrigger value="exercises">Exercícios</TabsTrigger>
            <TabsTrigger value="guide">Guia</TabsTrigger>
          </TabsList>

          {/* Aba: Depoimentos */}
          <TabsContent value="testimonials" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Star className="w-8 h-8" />
                  Histórias de Sucesso
                </CardTitle>
                <CardDescription className="text-white/90 text-base">
                  Pessoas reais que transformaram suas vidas com Mounjaro Pro
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-2 hover:shadow-2xl transition-all hover:scale-[1.02] bg-white">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-5xl">{testimonial.avatar}</div>
                        <div>
                          <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                          <CardDescription className="flex flex-col gap-1 mt-1">
                            <span>{testimonial.age} anos</span>
                            <div className="flex items-center gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-purple-600">-{testimonial.weight_lost}</div>
                        <div className="text-sm text-gray-600">{testimonial.time}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="relative">
                      <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                      <p className="text-gray-700 leading-relaxed pl-6 italic">
                        {testimonial.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 pt-4 border-t">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        {testimonial.highlight}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Estatísticas Gerais */}
            <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                  Resultados Comprovados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-4xl font-bold text-purple-600">20kg</div>
                    <div className="text-sm text-gray-600 mt-1">Perda média</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-4xl font-bold text-pink-600">4.5</div>
                    <div className="text-sm text-gray-600 mt-1">Meses médio</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-4xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfação</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-md">
                    <div className="text-4xl font-bold text-green-600">5.0</div>
                    <div className="text-sm text-gray-600 mt-1">Avaliação</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-green-900">
                    Você também pode ter resultados incríveis!
                  </h3>
                  <p className="text-green-800">
                    Comece hoje mesmo sua jornada de transformação com Mounjaro Pro
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Acompanhamento personalizado 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba: Hoje */}
          <TabsContent value="today" className="space-y-6">
            {/* Hidratação */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl shadow-md">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Hidratação Diária</CardTitle>
                      <CardDescription>Meta: {waterGoal}L • Essencial para resultados</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-blue-600">{waterIntake.toFixed(1)}L</div>
                    <div className="text-sm text-gray-600">{Math.round(waterProgress)}% completo</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={waterProgress} className="h-4" />
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={() => addWater(0.25)} variant="outline" size="sm" className="flex-1 min-w-[100px]">
                    + 250ml 🥤
                  </Button>
                  <Button onClick={() => addWater(0.5)} variant="outline" size="sm" className="flex-1 min-w-[100px]">
                    + 500ml 💧
                  </Button>
                  <Button onClick={() => addWater(1)} variant="outline" size="sm" className="flex-1 min-w-[100px]">
                    + 1L 🚰
                  </Button>
                  <Button 
                    onClick={() => setWaterIntake(0)} 
                    variant="ghost" 
                    size="sm"
                    className="ml-auto"
                  >
                    Resetar
                  </Button>
                </div>
                {waterIntake >= waterGoal && (
                  <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                    <Award className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-bold">Meta de hidratação atingida! Parabéns! 🎉</span>
                  </div>
                )}
                <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 text-sm text-blue-800">
                  <strong>💡 Dica:</strong> Distribua a água ao longo do dia. Evite beber muito durante as refeições.
                </div>
              </CardContent>
            </Card>

            {/* Refeições Resumo */}
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl shadow-md">
                      <Utensils className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Refeições de Hoje</CardTitle>
                      <CardDescription>
                        {mealsCompleted.length} de {meals.length} concluídas
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    <Target className="w-5 h-5 mr-2" />
                    {mealsCompleted.length}/{meals.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={dailyProgress.meals} className="mb-6 h-3" />
                <div className="space-y-3">
                  {meals.slice(0, 3).map((meal) => (
                    <div
                      key={meal.id}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-[1.02] ${
                        mealsCompleted.includes(meal.id)
                          ? 'bg-green-50 border-green-400 shadow-md'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleMeal(meal.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{meal.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-900">{meal.name}</h4>
                            <p className="text-sm text-gray-600">{meal.time} • {meal.calories}</p>
                          </div>
                        </div>
                        {mealsCompleted.includes(meal.id) ? (
                          <CheckCircle2 className="w-7 h-7 text-green-600" />
                        ) : (
                          <div className="w-7 h-7 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => document.querySelector('[value="meals"]')?.dispatchEvent(new Event('click', { bubbles: true }))}>
                  Ver todas as refeições →
                </Button>
              </CardContent>
            </Card>

            {/* Exercícios Resumo */}
            <Card className="border-2 border-orange-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl shadow-md">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Atividades Físicas</CardTitle>
                      <CardDescription>
                        {exercisesCompleted.length} de {exercises.length} realizadas
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    <Zap className="w-5 h-5 mr-2" />
                    {exercisesCompleted.length}/{exercises.length}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={dailyProgress.exercises} className="mb-6 h-3" />
                <div className="space-y-3">
                  {exercises.slice(0, 2).map((exercise) => (
                    <div
                      key={exercise.id}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:scale-[1.02] ${
                        exercisesCompleted.includes(exercise.id)
                          ? 'bg-orange-50 border-orange-400 shadow-md'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleExercise(exercise.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{exercise.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-900">{exercise.name}</h4>
                            <p className="text-sm text-gray-600">{exercise.duration} • {exercise.intensity}</p>
                          </div>
                        </div>
                        {exercisesCompleted.includes(exercise.id) ? (
                          <CheckCircle2 className="w-7 h-7 text-orange-600" />
                        ) : (
                          <div className="w-7 h-7 rounded-full border-2 border-gray-300" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => document.querySelector('[value="exercises"]')?.dispatchEvent(new Event('click', { bubbles: true }))}>
                  Ver todos os exercícios →
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba: Refeições Detalhadas */}
          <TabsContent value="meals" className="space-y-4">
            {meals.map((meal) => (
              <Card key={meal.id} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${
                  meal.id === 1 ? 'from-yellow-50 to-orange-50' :
                  meal.id === 2 ? 'from-green-50 to-emerald-50' :
                  meal.id === 3 ? 'from-blue-50 to-cyan-50' :
                  meal.id === 4 ? 'from-purple-50 to-pink-50' :
                  'from-indigo-50 to-purple-50'
                }`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{meal.icon}</span>
                      <div>
                        <CardTitle className="text-xl">{meal.name}</CardTitle>
                        <CardDescription className="flex items-center gap-3 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {meal.time}
                          </span>
                          <Badge variant="secondary">{meal.calories}</Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      onClick={() => toggleMeal(meal.id)}
                      variant={mealsCompleted.includes(meal.id) ? "default" : "outline"}
                      size="lg"
                      className="min-w-[120px]"
                    >
                      {mealsCompleted.includes(meal.id) ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Concluído
                        </>
                      ) : (
                        'Marcar como feito'
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-bold mb-4 text-gray-900 flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Opções Recomendadas:
                  </h4>
                  <ul className="space-y-3">
                    {meal.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Aba: Exercícios Detalhados */}
          <TabsContent value="exercises" className="space-y-4">
            {exercises.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${exercise.color}`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3 text-white">
                      <span className="text-4xl">{exercise.icon}</span>
                      <div>
                        <CardTitle className="text-xl text-white">{exercise.name}</CardTitle>
                        <CardDescription className="flex items-center gap-3 mt-1 text-white/90">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {exercise.duration}
                          </span>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {exercise.intensity}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      onClick={() => toggleExercise(exercise.id)}
                      variant={exercisesCompleted.includes(exercise.id) ? "secondary" : "outline"}
                      size="lg"
                      className="min-w-[120px] bg-white hover:bg-gray-100"
                    >
                      {exercisesCompleted.includes(exercise.id) ? (
                        <>
                          <CheckCircle2 className="w-5 h-5 mr-2" />
                          Feito!
                        </>
                      ) : (
                        'Marcar como feito'
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-bold mb-3 text-gray-900 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      Benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {exercise.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-gray-900 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Dicas Importantes:
                    </h4>
                    <ul className="space-y-2">
                      {exercise.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Aviso sobre exercícios */}
            <Card className="border-2 border-yellow-300 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div className="space-y-2 text-yellow-900">
                    <h4 className="font-bold text-lg">Importante sobre Exercícios com Mounjaro:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Comece devagar e aumente intensidade gradualmente</li>
                      <li>• Evite exercícios intensos logo após as refeições</li>
                      <li>• Hidrate-se bem antes, durante e depois</li>
                      <li>• Se sentir náuseas ou tonturas, pare imediatamente</li>
                      <li>• Consulte seu médico antes de iniciar novos exercícios</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba: Guia Completo */}
          <TabsContent value="guide" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white shadow-2xl border-0">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <TrendingUp className="w-8 h-8" />
                  Guia Completo Mounjaro
                </CardTitle>
                <CardDescription className="text-white/90 text-base">
                  Tudo que você precisa saber para maximizar seus resultados
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Alimentos Detalhados */}
            <Card className="border-2 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-green-600" />
                  Guia Alimentar Completo
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-bold text-green-700 flex items-center gap-2 text-lg">
                      <CheckCircle2 className="w-5 h-5" />
                      Alimentos Prioritários
                    </h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-1">Proteínas Magras</h5>
                        <p className="text-sm text-gray-700">Frango, peixe, ovos, peru, carne magra, tofu</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-1">Vegetais</h5>
                        <p className="text-sm text-gray-700">Brócolis, espinafre, couve, alface, tomate, pepino</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-1">Frutas</h5>
                        <p className="text-sm text-gray-700">Maçã, pera, frutas vermelhas, melão (porções pequenas)</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-1">Carboidratos Complexos</h5>
                        <p className="text-sm text-gray-700">Arroz integral, quinoa, batata doce, aveia</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-900 mb-1">Laticínios</h5>
                        <p className="text-sm text-gray-700">Iogurte grego, queijo cottage, leite desnatado</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-red-700 flex items-center gap-2 text-lg">
                      <AlertCircle className="w-5 h-5" />
                      Alimentos a Evitar
                    </h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-1">Frituras e Gorduras</h5>
                        <p className="text-sm text-gray-700">Fast food, alimentos fritos, carnes gordas</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-1">Açúcares</h5>
                        <p className="text-sm text-gray-700">Doces, refrigerantes, sucos industrializados</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-1">Álcool</h5>
                        <p className="text-sm text-gray-700">Bebidas alcoólicas (podem intensificar efeitos colaterais)</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-1">Carboidratos Refinados</h5>
                        <p className="text-sm text-gray-700">Pão branco, massas refinadas, arroz branco</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <h5 className="font-semibold text-red-900 mb-1">Alimentos Processados</h5>
                        <p className="text-sm text-gray-700">Embutidos, salgadinhos, comidas prontas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hidratação Detalhada */}
            <Card className="border-2 border-blue-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Droplets className="w-6 h-6 text-blue-600" />
                  Protocolo de Hidratação
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h5 className="font-bold text-blue-900 mb-2">Meta Diária</h5>
                    <p className="text-3xl font-bold text-blue-600 mb-2">2,5 - 3L</p>
                    <p className="text-sm text-gray-700">Distribua ao longo do dia</p>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg">
                    <h5 className="font-bold text-cyan-900 mb-2">Horários Ideais</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ao acordar: 500ml</li>
                      <li>• Manhã: 750ml</li>
                      <li>• Tarde: 750ml</li>
                      <li>• Noite: 500ml</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="font-bold text-gray-900">Dicas Importantes:</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Beba água gelada ou em temperatura ambiente</span>
                    </li>
                    <li className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Evite beber muito durante as refeições (pode causar desconforto)</span>
                    </li>
                    <li className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Chás sem açúcar e água de coco contam para a meta</span>
                    </li>
                    <li className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Aumente a ingestão em dias de exercício</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Efeitos Colaterais e Cuidados */}
            <Card className="border-2 border-red-300 bg-red-50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 text-red-900">
                  <AlertCircle className="w-6 h-6" />
                  Efeitos Colaterais e Como Lidar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h5 className="font-bold text-red-900 mb-3">Náuseas</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Coma devagar e em pequenas porções</li>
                      <li>• Evite alimentos gordurosos</li>
                      <li>• Gengibre pode ajudar</li>
                      <li>• Não se deite logo após comer</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h5 className="font-bold text-red-900 mb-3">Constipação</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Aumente fibras gradualmente</li>
                      <li>• Beba mais água</li>
                      <li>• Caminhe após refeições</li>
                      <li>• Considere probióticos</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h5 className="font-bold text-red-900 mb-3">Fadiga</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Durma 7-8 horas por noite</li>
                      <li>• Mantenha alimentação regular</li>
                      <li>• Exercícios leves ajudam</li>
                      <li>• Monitore vitaminas e minerais</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-red-200">
                    <h5 className="font-bold text-red-900 mb-3">Perda de Apetite</h5>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Não pule refeições</li>
                      <li>• Faça refeições menores</li>
                      <li>• Priorize proteínas</li>
                      <li>• Use alarmes para lembrar</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                  <h5 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Quando Procurar Ajuda Médica:
                  </h5>
                  <ul className="text-sm text-red-900 space-y-1">
                    <li>• Vômitos persistentes ou desidratação</li>
                    <li>• Dor abdominal intensa</li>
                    <li>• Alterações na visão</li>
                    <li>• Reações alérgicas</li>
                    <li>• Qualquer sintoma preocupante</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dicas de Sucesso */}
            <Card className="border-2 border-purple-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-600" />
                  Dicas para Máximo Sucesso
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h5 className="font-bold text-purple-900 mb-2">🎯 Consistência</h5>
                    <p className="text-sm text-gray-700">Mantenha horários regulares para medicação e refeições</p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                    <h5 className="font-bold text-pink-900 mb-2">📊 Monitore</h5>
                    <p className="text-sm text-gray-700">Acompanhe seu progresso, peso e como se sente</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="font-bold text-blue-900 mb-2">💪 Exercite-se</h5>
                    <p className="text-sm text-gray-700">Atividade física regular potencializa resultados</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-bold text-green-900 mb-2">😴 Durma Bem</h5>
                    <p className="text-sm text-gray-700">7-8 horas de sono de qualidade são essenciais</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h5 className="font-bold text-orange-900 mb-2">🧘 Gerencie Estresse</h5>
                    <p className="text-sm text-gray-700">Meditação e relaxamento ajudam nos resultados</p>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <h5 className="font-bold text-cyan-900 mb-2">👨‍⚕️ Acompanhamento</h5>
                    <p className="text-sm text-gray-700">Consultas regulares com seu médico são fundamentais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Aviso Legal */}
            <Card className="border-2 border-gray-300 bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p className="font-bold text-gray-900">Aviso Importante:</p>
                    <p>Este aplicativo é apenas um guia informativo e educacional. Não substitui orientação médica profissional.</p>
                    <p>Sempre siga as orientações do seu médico endocrinologista e nutricionista. Em caso de dúvidas ou efeitos colaterais, consulte seu médico imediatamente.</p>
                    <p>O Mounjaro (tirzepatida) é um medicamento que requer prescrição e acompanhamento médico regular.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t mt-12">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500" />
            <p className="text-lg font-semibold text-gray-900">Mounjaro Pro</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Seu nutricionista pessoal 24/7</p>
          <p className="text-xs text-gray-500">Sempre consulte seu médico ou nutricionista • Este app não substitui orientação médica</p>
        </div>
      </footer>
    </div>
  )
}

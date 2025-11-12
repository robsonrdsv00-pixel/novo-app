"use client"

import { useState, useEffect } from "react"
import { Bell, Droplets, Utensils, Clock, CheckCircle2, AlertCircle, TrendingUp, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function MounjaroCompanion() {
  const [waterIntake, setWaterIntake] = useState(0)
  const [mealsCompleted, setMealsCompleted] = useState<number[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())
  const [lastDoseDate, setLastDoseDate] = useState<Date | null>(null)

  const waterGoal = 2.5 // litros por dia
  const waterProgress = (waterIntake / waterGoal) * 100

  useEffect(() => {
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

  const meals = [
    {
      id: 1,
      name: "Café da Manhã",
      time: "07:00 - 08:00",
      icon: "☀️",
      tips: [
        "Proteína magra (ovos, iogurte grego)",
        "Frutas com baixo índice glicêmico",
        "Evite alimentos muito gordurosos"
      ]
    },
    {
      id: 2,
      name: "Lanche da Manhã",
      time: "10:00 - 10:30",
      icon: "🥤",
      tips: [
        "Frutas frescas ou oleaginosas",
        "Hidratação constante",
        "Porções pequenas"
      ]
    },
    {
      id: 3,
      name: "Almoço",
      time: "12:00 - 13:00",
      icon: "🍽️",
      tips: [
        "Proteína magra (frango, peixe)",
        "Vegetais variados",
        "Carboidratos complexos (arroz integral)",
        "Mastigue devagar"
      ]
    },
    {
      id: 4,
      name: "Lanche da Tarde",
      time: "15:30 - 16:00",
      icon: "🥗",
      tips: [
        "Iogurte natural ou frutas",
        "Evite açúcares refinados",
        "Mantenha porções pequenas"
      ]
    },
    {
      id: 5,
      name: "Jantar",
      time: "19:00 - 20:00",
      icon: "🌙",
      tips: [
        "Refeição leve",
        "Proteína e vegetais",
        "Evite carboidratos pesados à noite",
        "Pare de comer 3h antes de dormir"
      ]
    }
  ]

  const guidelines = [
    {
      title: "Hidratação",
      icon: Droplets,
      color: "text-blue-500",
      items: [
        "Beba 2,5 a 3 litros de água por dia",
        "Distribua ao longo do dia",
        "Evite beber muito durante as refeições",
        "Prefira água, chás sem açúcar"
      ]
    },
    {
      title: "Alimentação",
      icon: Utensils,
      color: "text-green-500",
      items: [
        "Faça 5-6 refeições pequenas por dia",
        "Priorize proteínas magras",
        "Evite alimentos gordurosos e fritos",
        "Mastigue bem e coma devagar",
        "Evite açúcares e carboidratos simples"
      ]
    },
    {
      title: "Horários",
      icon: Clock,
      color: "text-orange-500",
      items: [
        "Mantenha horários regulares",
        "Não pule refeições",
        "Última refeição 3h antes de dormir",
        "Tome a medicação no mesmo horário"
      ]
    },
    {
      title: "Cuidados Importantes",
      icon: AlertCircle,
      color: "text-red-500",
      items: [
        "Evite álcool",
        "Monitore náuseas e enjoos",
        "Consulte seu médico regularmente",
        "Não faça exercícios intensos logo após comer",
        "Atenção a sinais de desidratação"
      ]
    }
  ]

  const notifications = [
    {
      time: "07:00",
      message: "Hora do café da manhã! Comece com proteínas",
      active: currentTime.getHours() === 7
    },
    {
      time: "09:00",
      message: "Já bebeu água hoje? Meta: 500ml até agora",
      active: currentTime.getHours() === 9
    },
    {
      time: "12:00",
      message: "Hora do almoço! Lembre-se: mastigue devagar",
      active: currentTime.getHours() === 12
    },
    {
      time: "15:00",
      message: "Hidratação! Já bebeu 1,5L hoje?",
      active: currentTime.getHours() === 15
    },
    {
      time: "19:00",
      message: "Jantar leve! Evite carboidratos pesados",
      active: currentTime.getHours() === 19
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Mounjaro Companion</h1>
                <p className="text-sm text-gray-600">Seu guia nutricional diário</p>
              </div>
            </div>
            <Badge variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              {currentTime.toLocaleDateString('pt-BR')}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Notificações Ativas */}
        {notifications.some(n => n.active) && (
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-orange-600 mt-0.5 animate-pulse" />
                <div className="flex-1">
                  <h3 className="font-semibold text-orange-900 mb-2">Lembrete Importante</h3>
                  {notifications.filter(n => n.active).map((notif, idx) => (
                    <p key={idx} className="text-orange-800">{notif.message}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="today" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="today">Hoje</TabsTrigger>
            <TabsTrigger value="meals">Refeições</TabsTrigger>
            <TabsTrigger value="guide">Guia</TabsTrigger>
          </TabsList>

          {/* Aba: Hoje */}
          <TabsContent value="today" className="space-y-6">
            {/* Progresso de Água */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle>Hidratação Diária</CardTitle>
                      <CardDescription>Meta: {waterGoal}L por dia</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{waterIntake.toFixed(1)}L</div>
                    <div className="text-sm text-gray-600">{Math.round(waterProgress)}%</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={waterProgress} className="h-3" />
                <div className="flex gap-2 flex-wrap">
                  <Button onClick={() => addWater(0.25)} variant="outline" size="sm">
                    + 250ml
                  </Button>
                  <Button onClick={() => addWater(0.5)} variant="outline" size="sm">
                    + 500ml
                  </Button>
                  <Button onClick={() => addWater(1)} variant="outline" size="sm">
                    + 1L
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
                  <div className="bg-green-100 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">Meta de hidratação atingida! 🎉</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Refeições de Hoje */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle>Refeições de Hoje</CardTitle>
                    <CardDescription>
                      {mealsCompleted.length} de {meals.length} concluídas
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={(mealsCompleted.length / meals.length) * 100} className="mb-6 h-2" />
                <div className="space-y-3">
                  {meals.map((meal) => (
                    <div
                      key={meal.id}
                      className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        mealsCompleted.includes(meal.id)
                          ? 'bg-green-50 border-green-300'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => toggleMeal(meal.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{meal.icon}</span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{meal.name}</h4>
                            <p className="text-sm text-gray-600">{meal.time}</p>
                          </div>
                        </div>
                        {mealsCompleted.includes(meal.id) && (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba: Refeições Detalhadas */}
          <TabsContent value="meals" className="space-y-4">
            {meals.map((meal) => (
              <Card key={meal.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{meal.icon}</span>
                    <div className="flex-1">
                      <CardTitle>{meal.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {meal.time}
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => toggleMeal(meal.id)}
                      variant={mealsCompleted.includes(meal.id) ? "default" : "outline"}
                      size="sm"
                    >
                      {mealsCompleted.includes(meal.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Feito
                        </>
                      ) : (
                        'Marcar'
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3 text-gray-900">Dicas Importantes:</h4>
                  <ul className="space-y-2">
                    {meal.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Aba: Guia Completo */}
          <TabsContent value="guide" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl">Guia Completo Pós-Mounjaro</CardTitle>
                <CardDescription>
                  Orientações essenciais para maximizar seus resultados
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {guidelines.map((guide, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gray-100`}>
                        <guide.icon className={`w-6 h-6 ${guide.color}`} />
                      </div>
                      <CardTitle className="text-xl">{guide.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {guide.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${guide.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Alimentos Recomendados */}
            <Card>
              <CardHeader>
                <CardTitle>Alimentos Recomendados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Priorize
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-6">
                      <li>• Frango, peixe, ovos</li>
                      <li>• Vegetais verdes</li>
                      <li>• Frutas com baixo índice glicêmico</li>
                      <li>• Arroz integral, quinoa</li>
                      <li>• Iogurte natural, queijos magros</li>
                      <li>• Oleaginosas (porções pequenas)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Evite
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700 ml-6">
                      <li>• Frituras e alimentos gordurosos</li>
                      <li>• Açúcares e doces</li>
                      <li>• Refrigerantes</li>
                      <li>• Álcool</li>
                      <li>• Fast food</li>
                      <li>• Carboidratos refinados</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Avisos Importantes */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <CardTitle className="text-red-900">Atenção</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-red-800">
                <p>• Este aplicativo é apenas um guia informativo</p>
                <p>• Sempre siga as orientações do seu médico</p>
                <p>• Em caso de efeitos colaterais graves, procure atendimento médico</p>
                <p>• Não altere a dosagem sem orientação médica</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>Mounjaro Companion - Seu guia nutricional diário</p>
          <p className="mt-1">Consulte sempre seu médico ou nutricionista</p>
        </div>
      </footer>
    </div>
  )
}

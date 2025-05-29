"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  Target,
  Heart,
  TrendingUp,
  MessageCircle,
  Calendar,
  BarChart3,
  Sparkles,
  Cloud,
  Zap,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Send,
  Mic,
  Settings,
} from "lucide-react"

export default function Home() {
  const [currentView, setCurrentView] = useState("landing")
  const [userMood, setUserMood] = useState("😊")
  const [chatMessage, setChatMessage] = useState("")
  const [progress, setProgress] = useState(65)

  const agents = [
    {
      name: "MoodTracker",
      role: "Emotion & Mental Health Monitor",
      status: "active",
      color: "bg-pink-500",
      icon: Heart,
      lastAction: "Detected positive mood shift",
    },
    {
      name: "GoalPlanner",
      role: "Career & Skill Development",
      status: "active",
      color: "bg-blue-500",
      icon: Target,
      lastAction: "Updated career roadmap",
    },
    {
      name: "MotivationAgent",
      role: "Daily Encouragement & Alerts",
      status: "active",
      color: "bg-green-500",
      icon: Sparkles,
      lastAction: "Sent morning motivation",
    },
    {
      name: "InsightAgent",
      role: "Data-Driven Recommendations",
      status: "processing",
      color: "bg-blue-500",
      icon: BarChart3,
      lastAction: "Analyzing BigQuery data",
    },
    {
      name: "ContentAgent",
      role: "Personalized Learning Content",
      status: "active",
      color: "bg-orange-500",
      icon: Brain,
      lastAction: "Created skill assessment",
    },
  ]

  const moodOptions = ["😔", "😐", "😊", "😄", "🤩"]

  if (currentView === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                Motive AI
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Demo
              </a>
            </nav>
            <Button
              onClick={() => setCurrentView("dashboard")}
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700"
            >
              Get Started
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
           
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Your Emotional AI Mentor for Career & Life
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Multi-agent AI system providing personalized mentoring, mental health coaching, and career guidance
              powered by Google Cloud AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => setCurrentView("dashboard")}
                className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-lg px-8 py-3"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Emotional Avatar Preview */}
            <div className="relative mx-auto w-32 h-32 mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-4xl animate-pulse">
                {userMood}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How Motive AI Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: MessageCircle, title: "Talk", desc: "Share your thoughts and feelings with our emotional AI" },
              { icon: BarChart3, title: "Track", desc: "Monitor your progress with data-driven insights" },
              { icon: TrendingUp, title: "Grow", desc: "Receive personalized career and skill development plans" },
              { icon: Star, title: "Thrive", desc: "Achieve your goals with continuous AI mentoring" },
            ].map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Multi-Agent Architecture */}
        <section className="container mx-auto px-4 py-20 bg-white/50 rounded-3xl mx-4">
          <h2 className="text-3xl font-bold text-center mb-12">Multi-Agent AI Architecture</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {agents.map((agent, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center mb-3`}>
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sm font-semibold">{agent.name}</CardTitle>
                  <CardDescription className="text-xs">{agent.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Badge variant={agent.status === "active" ? "default" : "secondary"} className="text-xs">
                    {agent.status}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-2">{agent.lastAction}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Google Cloud Integration */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Google Cloud</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with enterprise-grade Google Cloud services for scalability, reliability, and advanced AI
              capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { service: "Vertex AI", desc: "Advanced LLMs for natural conversations", icon: Brain },
              { service: "BigQuery", desc: "Data insights and user analytics", icon: BarChart3 },
              { service: "Cloud Run", desc: "Scalable backend agent orchestration", icon: Cloud },
            ].map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle>{item.service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands who are already growing with AI-powered mentoring</p>
            <Button
              size="lg"
              onClick={() => setCurrentView("dashboard")}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Free Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold">Welcome back, Alex!</h1>
              <p className="text-sm text-gray-500">Thursday, January 30, 2025</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Current mood:</span>
              <div className="flex space-x-1">
                {moodOptions.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => setUserMood(mood)}
                    className={`text-2xl p-1 rounded-lg transition-all ${
                      userMood === mood ? "bg-blue-100 scale-110" : "hover:bg-gray-100"
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Mood Score</CardTitle>
                  <Heart className="h-4 w-4 text-pink-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.2/10</div>
                  <p className="text-xs text-green-600">+0.5 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Goals Progress</CardTitle>
                  <Target className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{progress}%</div>
                  <Progress value={progress} className="mt-2" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Check-ins</CardTitle>
                  <Calendar className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-600">This week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Interactions</CardTitle>
                  <MessageCircle className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">47</div>
                  <p className="text-xs text-gray-600">Today</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Daily Reflection */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-blue-500" />
                    <span>Daily Reflection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea placeholder="How are you feeling today? What's on your mind?" className="min-h-[100px]" />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-600">
                    <Send className="w-4 h-4 mr-2" />
                    Share with AI Mentor
                  </Button>
                </CardContent>
              </Card>

              {/* Today's Suggestion */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    <span>Today's Suggestion</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-700">💡 Skill Focus</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Practice React hooks for 30 minutes today. Your JavaScript skills are improving!
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-green-700">🎯 Career Tip</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Update your LinkedIn with your recent project. Visibility matters!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Goal Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  <span>Your Goal Tracker</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { goal: "Learn React Advanced Patterns", progress: 75, deadline: "2 weeks" },
                    { goal: "Complete Portfolio Website", progress: 45, deadline: "1 month" },
                    { goal: "Apply to 5 Companies", progress: 20, deadline: "3 weeks" },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">{item.goal}</h4>
                      <Progress value={item.progress} className="mb-2" />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{item.progress}% complete</span>
                        <span>{item.deadline} left</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
              {/* Chat Interface */}
              <Card className="lg:col-span-3 flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-500 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">AI Mentor</h3>
                      <p className="text-sm text-green-600">Online • Mood: {userMood}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-500 text-white text-xs">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          Hi Alex! I noticed you're feeling {userMood} today. How can I help you grow and achieve your
                          goals?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          I'm working on my React skills but feeling a bit overwhelmed. Can you help me create a
                          learning plan?
                        </p>
                      </div>
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-500 text-white text-xs">
                          AI
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          I've analyzed your progress and created a personalized React learning path. Let me break it
                          down into manageable daily tasks. Would you like to see your custom roadmap?
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your message..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="icon" variant="outline">
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button size="icon" className="bg-gradient-to-r from-blue-600 to-blue-600">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Agent Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Active Agents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {agents.slice(0, 3).map((agent, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className={`w-8 h-8 ${agent.color} rounded-lg flex items-center justify-center`}>
                        <agent.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{agent.name}</p>
                        <p className="text-xs text-gray-500">{agent.status}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="agents" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${agent.color} rounded-lg flex items-center justify-center`}>
                        <agent.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{agent.name}</CardTitle>
                        <CardDescription>{agent.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Status</span>
                        <Badge variant={agent.status === "active" ? "default" : "secondary"}>{agent.status}</Badge>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Last Action</span>
                        <p className="text-sm font-medium">{agent.lastAction}</p>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mood Trends (Last 30 Days)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-blue-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Mood trending upward +15%</p>
                      <p className="text-xs text-gray-500">Powered by BigQuery Analytics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goal Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-600">78%</p>
                      <p className="text-sm text-gray-600">Goals completed this month</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      insight: "Your productivity peaks between 9-11 AM. Schedule important tasks during this window.",
                      confidence: "95%",
                      source: "BigQuery Analysis",
                    },
                    {
                      insight: "You show 23% better mood scores on days when you complete morning reflections.",
                      confidence: "87%",
                      source: "Behavioral Pattern Analysis",
                    },
                    {
                      insight: "Career goal progress accelerates when you engage with MotivationAgent daily.",
                      confidence: "91%",
                      source: "Multi-Agent Correlation",
                    },
                  ].map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <p className="font-medium mb-2">{item.insight}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Confidence: {item.confidence}</span>
                        <span>{item.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

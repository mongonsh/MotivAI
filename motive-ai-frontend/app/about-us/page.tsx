"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Brain,
  Heart,
  Target,
  Code,
  GraduationCap,
  Globe,
  Github,
  Mail,
  MapPin,
  Building,
  Rocket,
  Users,
  Lightbulb,
  Award,
  ExternalLink,
  ArrowLeft,
  Sparkles,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const techStack = [
    { name: "PHP", color: "from-blue-400 to-blue-600" },
    { name: "Python", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", color: "from-blue-400 to-cyan-500" },
    { name: "JavaScript", color: "from-yellow-400 to-orange-500" },
    { name: "Laravel", color: "from-red-400 to-pink-500" },
    { name: "Next.js", color: "from-gray-400 to-gray-600" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TailwindCSS", color: "from-teal-400 to-green-500" },
    { name: "Docker", color: "from-blue-400 to-indigo-500" },
    { name: "MySQL", color: "from-orange-400 to-red-500" },
    { name: "AWS", color: "from-orange-400 to-yellow-500" },
    { name: "Vercel", color: "from-gray-400 to-black" },
  ]

  const projects = [
    {
      name: "Shinronavi",
      description:
        "Helping high school students in Japan navigate their career and education pathways through data-driven EdTech",
      status: "Active",
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "OC-navi.jp",
      description: "Open Campus navigation platform for Japanese students",
      status: "Active",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "StudyinJPN",
      description: "Comprehensive platform for international students studying in Japan",
      status: "Active",
      icon: Users,
      gradient: "from-blue-500 to-violet-500",
    },
    {
      name: "AI Recruiter Agent",
      description: "Personal HR assistant built with Next.js, multilingual support, and powered by OpenAI",
      status: "Building",
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "CSS Animation Shop",
      description: "Beautiful, production-ready web animations for developers",
      status: "Coming Soon",
      icon: Code,
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  const achievements = [
    {
      title: "EdTech Innovation",
      description: "Built platforms serving thousands of students across Japan",
      icon: GraduationCap,
      gradient: "from-blue-500 to-blue-500",
    },
    {
      title: "Cross-Cultural Bridge",
      description: "Tokyo-based Mongolian developer connecting cultures through technology",
      icon: Globe,
      gradient: "from-green-500 to-blue-500",
    },
    {
      title: "AI Pioneer",
      description: "Early adopter of AI systems for educational and career guidance",
      icon: Brain,
      gradient: "from-blue-500 to-pink-500",
    },
    {
      title: "Clean Architecture Advocate",
      description: "Passionate about scalable, maintainable software design",
      icon: Building,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fillOpacity%3D%22.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Crystals */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-xl bg-white/5 sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
              Motive AI
            </span>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-white/90 text-sm font-medium">About the Creator</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Meet Mungunshagai
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Tokyo-based Mongolian Software Engineer passionate about EdTech, Clean Architecture, and AI systems.
            Building tools that help students choose careers and thrive in digital learning.
          </p>
        </div>

        {/* Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur-lg opacity-50"></div>
                    <Avatar className="relative w-32 h-32 mx-auto border-4 border-white/30 shadow-2xl">
                      <AvatarImage src="/images/profile.jpeg" className="object-cover" />
                      
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white/30 shadow-lg">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Mungunshagai</h2>
                  <p className="text-lg text-blue-300 mb-4">@mongonsh</p>
                  <div className="flex items-center justify-center space-x-2 mb-6">
                    <MapPin className="w-4 h-4 text-blue-300" />
                    <span className="text-white/70">Tokyo, Japan</span>
                  </div>

                  <div className="flex items-center space-x-3 mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Building className="w-5 h-5 text-blue-400" />
                    <div className="text-left">
                      <p className="font-medium text-white">Software Engineer</p>
                      <p className="text-sm text-white/60">License Academy</p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 border-0 shadow-lg shadow-blue-500/25">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story & Mission */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">The Story Behind Motive AI</h3>
                </div>

                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-3">The Vision</h4>
                        <p className="text-white/70 leading-relaxed">
                          As a Tokyo-based Mongolian developer working in EdTech, I've witnessed firsthand the
                          challenges students face when navigating career decisions and mental health struggles. Through
                          my work at License Academy and projects like Shinronavi and StudyinJPN, I've helped thousands
                          of students find their path.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-3">The Problem</h4>
                        <p className="text-white/70 leading-relaxed">
                          Traditional career counseling and mental health support don't scale. Students need
                          personalized, 24/7 guidance that understands their unique cultural background, emotional
                          state, and career aspirations. This is especially true for international students and those in
                          underserved communities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-pink-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                        <Rocket className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-3">The Solution</h4>
                        <p className="text-white/70 leading-relaxed">
                          Motive AI combines my expertise in EdTech, clean architecture, and AI systems to create a
                          multi-agent platform that provides personalized mentoring at scale. By leveraging Google
                          Cloud's powerful AI infrastructure, we can deliver emotional intelligence and career guidance
                          to anyone, anywhere.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tech Stack & Expertise</h3>
                  <p className="text-white/60">Technologies powering Motive AI and my other EdTech projects</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <div className="relative text-center">
                      <div className={`w-8 h-8 bg-gradient-to-r ${tech.color} rounded-lg mx-auto mb-2 shadow-lg`}></div>
                      <span className="text-white font-medium text-sm">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Portfolio */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Project Portfolio</h3>
                  <p className="text-white/60">Building the future of education and career guidance</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-3 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        >
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{project.name}</h4>
                          <div className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${project.status === "Active" ? "bg-green-400" : project.status === "Building" ? "bg-yellow-400" : "bg-gray-400"}`}
                            ></div>
                            <span className="text-xs text-white/60">{project.status}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                        >
                          <achievement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-white mb-2">{achievement.title}</h4>
                          <p className="text-white/70 leading-relaxed">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-white/20 rounded-3xl p-12 text-center shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                <Star className="w-6 h-6 text-yellow-400 animate-pulse delay-100" />
                <Star className="w-6 h-6 text-yellow-400 animate-pulse delay-200" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Build the Future Together
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Motive AI represents the convergence of my passion for EdTech, clean architecture, and AI systems. Join me
              in revolutionizing how we support student success and mental wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 shadow-lg shadow-blue-500/25 border-0"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Try Motive AI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

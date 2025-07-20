"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Chrome, Shield, Download, ArrowDown, TrendingUp, BarChart3, Target, Rocket } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(205, 156, 236, 0.15), transparent 40%)`,
  }

  return (
    <div className="min-h-screen bg-[#100311] text-white overflow-x-hidden">
      {/* Trading Spotlight Effect */}
      <div className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300" style={spotlightStyle} />

      {/* Animated Trading Chart Background */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(205,156,236,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_40px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)` }}
        />
        {/* Candlestick Pattern */}
        <svg className="absolute top-20 right-20 w-64 h-32 opacity-20" viewBox="0 0 200 100">
          <rect x="10" y="30" width="4" height="40" fill="#3b82f6" />
          <rect x="8" y="35" width="8" height="20" fill="#3b82f6" />
          <rect x="30" y="20" width="4" height="50" fill="#ef4444" />
          <rect x="28" y="25" width="8" height="30" fill="#ef4444" />
          <rect x="50" y="35" width="4" height="30" fill="#3b82f6" />
          <rect x="48" y="40" width="8" height="15" fill="#3b82f6" />
          <rect x="70" y="25" width="4" height="45" fill="#3b82f6" />
          <rect x="68" y="30" width="8" height="25" fill="#3b82f6" />
        </svg>
      </div>

      {/* Header */}
      <header className="border-b border-[#580092]/50 backdrop-blur-sm bg-[#100311]/90 fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-2 transform transition-all duration-500 hover:scale-105"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#cd9cec] to-[#580092] rounded-lg flex items-center justify-center animate-pulse">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Diversion</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">TRADING</span>
            </div>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600/20 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Chrome className="w-4 h-4 mr-2" />
              Add to Chrome
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 md:py-32 relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-4xl mx-auto">
            <div
              className="transform transition-all duration-1000 ease-out"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                opacity: Math.max(0, 1 - scrollY / 500),
              }}
            >
              <div className="flex items-center justify-center mb-4">
                <span className="text-blue-400 text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                  📈 TRADINGVIEW • PINESCRIPT • EXTENSION
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#cd9cec] to-blue-400 bg-clip-text text-transparent animate-gradient">
                Diversion-Extension
                <br />
                <span className="text-blue-400 inline-block transform hover:scale-110 transition-transform duration-300">
                  Streamline Pine Script Workflow
                </span>
              </h1>
            </div>

            <div
              className="transform transition-all duration-1000 ease-out delay-200"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                opacity: Math.max(0, 1 - scrollY / 600),
              }}
            >
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                A browser extension for TradingView that enables direct Pine Script injection into the Pine Editor, eliminating manual copy-pasting and enhancing development efficiency for trading strategies and indicators.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ease-out delay-400"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(0, 1 - scrollY / 700),
              }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Trading Smarter
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#580092] text-[#cd9cec] hover:bg-[#580092]/20 px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#cd9cec]/10"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Live Demo
              </Button>
            </div>

            {/* Trading Stats */}
            {/* Removed user statistics and emojis */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <ArrowDown className="w-6 h-6 text-blue-400" />
        </div>

        {/* Floating Trading Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-pulse"
            style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.15}px)` }}
          />
          <div
            className="absolute top-3/4 right-1/4 w-2 h-2 bg-red-500 rounded-full opacity-40 animate-pulse"
            style={{ transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-4 h-4 bg-[#cd9cec] rounded-full opacity-30 animate-pulse"
            style={{ transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.1}px)` }}
          />
          {/* Dollar signs */}
          <div
            className="absolute top-1/3 left-1/2 text-blue-400 opacity-20 text-2xl"
            style={{ transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.08}px)` }}
          >
            $
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-transparent to-[#580092]/10 relative">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 transform transition-all duration-1000"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 400) * -0.1)}px)`,
              opacity: scrollY > 300 ? 1 : 0,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-[#cd9cec] to-blue-400 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Enhance TradingView Pine Script development with streamlined, technical tools.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Chrome,
                title: "TradingView Integration",
                desc: "Inject Pine Script code directly into the TradingView Pine Editor with a single click.",
                bgColor: "bg-blue-600",
                accent: "",
              },
              {
                icon: BarChart3,
                title: "Popup Interface",
                desc: "Simple and intuitive popup for quick access to code injection and extension controls.",
                bgColor: "bg-[#580092]",
                accent: "",
              },
              {
                icon: Rocket,
                title: "Customizable Settings",
                desc: "Save and manage multiple Pine Script snippets for easy reuse.",
                bgColor: "bg-[#cd9cec]",
                accent: "",
              },
              {
                icon: Shield,
                title: "Streamlined Workflow",
                desc: "Eliminate manual copy-pasting and reduce errors when working with Pine Script.",
                bgColor: "bg-blue-400",
                accent: "",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="transform transition-all duration-1000 hover:scale-105 flex"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 600) * -0.1)}px)`,
                  opacity: scrollY > 500 ? 1 : 0,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Card className="bg-[#580092]/20 border-[#580092]/50 backdrop-blur-sm hover:bg-[#580092]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden flex flex-col w-full min-h-[260px]">
                  <CardContent className="p-6 text-center flex flex-col flex-1 justify-between">
                    <div>
                      <div
                        className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse transition-all duration-300 group-hover:scale-110`}
                      >
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-2">
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 transform transition-all duration-1000"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1000) * -0.1)}px)`,
              opacity: scrollY > 900 ? 1 : 0,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-[#cd9cec] bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Deploy Pine Script to TradingView in a few simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Install Extension",
                desc: "Download or clone the repository, then load as an unpacked extension in your browser.",
                gradient: "from-blue-500 to-blue-600",
                icon: "",
              },
              {
                step: "2",
                title: "Open TradingView Pine Editor",
                desc: "Navigate to TradingView and open the Pine Editor to prepare for code injection.",
                gradient: "from-[#580092] to-[#cd9cec]",
                icon: "",
              },
              {
                step: "3",
                title: "Inject & Manage Code",
                desc: "Use the popup to paste or select Pine Script, then inject it directly. Save and manage snippets as needed.",
                gradient: "from-blue-500 to-blue-600",
                icon: "",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-1000 hover:scale-105"
                style={{
                  transform: `translateY(${Math.max(0, (scrollY - 1200) * -0.1)}px)`,
                  opacity: scrollY > 1100 + index * 200 ? 1 : 0,
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mx-auto text-2xl font-bold hover:animate-pulse transition-all duration-300 hover:scale-110 hover:shadow-2xl relative`}
                  >
                    {item.step}
                  </div>
                  {/* Removed icon (emoji) */}
                </div>
                <h3 className="text-xl font-semibold mb-3 hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-[#580092]/20 to-[#cd9cec]/20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-[#580092]/10 to-[#cd9cec]/10"
          style={{ transform: `translateX(${scrollY * 0.05}px)` }}
        />
        {/* Trading Chart Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 200">
            <path
              d="M0,100 Q200,50 400,80 T800,60"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path d="M0,120 Q200,70 400,100 T800,80" stroke="#cd9cec" strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M0,140 Q200,90 400,120 T800,100" stroke="#ef4444" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className="max-w-3xl mx-auto transform transition-all duration-1000"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 1600) * -0.1)}px)`,
              opacity: scrollY > 1500 ? 1 : 0,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-[#cd9cec] bg-clip-text text-transparent">
              Ready to Enhance Your TradingView Workflow?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Diversion-Extension automates Pine Script injection and management for TradingView.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 group"
            >
              <Chrome className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Start Now
            </Button>
            {/* Removed extra tagline and emojis */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#580092]/50 py-8 backdrop-blur-sm bg-[#100311]/90">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-[#cd9cec] rounded flex items-center justify-center animate-pulse">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
              <span className="font-semibold">Diversion</span>
              <span className="text-xs text-blue-400">TRADING</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {["Privacy", "Terms", "Trading Disclaimer", "Support"].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="hover:text-white transition-all duration-300 hover:scale-110 hover:text-blue-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-[#580092]/50">
            <p className="text-gray-500 text-sm">
              © 2025 Diversion Trading Tools. All rights reserved.
              <span className="text-blue-400 ml-2">⚠️ Trading involves risk</span>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, ShieldCheck, Search, FileText, MessageSquare, LineChart, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative min-h-screen bg-[#060B14] overflow-hidden font-sans selection:bg-[#4D7BFF] selection:text-white" dir="ltr">
      
      {/* Background Statue Image with Blend Modes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute right-0 top-0 w-[60%] h-full opacity-60 mix-blend-screen">
          <Image 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
            alt="Lady Justice Statue"
            fill
            className="object-cover object-[70%_20%] opacity-40 mix-blend-luminosity brightness-75 contrast-125"
            priority
          />
          {/* Gradient masks to blend the image into the dark background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-[#060B14]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-transparent to-transparent" />
        </div>
        {/* Subtle glowing orbs */}
        <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] bg-[#4D7BFF]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#4D7BFF]/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Exact Navbar Copy */}
      <nav className="relative z-50 w-full pt-8 pb-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#4D7BFF]">
                <path d="M12 2L3 6V12C3 17.5 7 21.5 12 23C17 21.5 21 17.5 21 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Konco <span className="text-[#4D7BFF]">AI</span></span>
          </div>
          
          {/* Middle Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/70">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">How It Works</Link>
            <Link href="#" className="hover:text-white transition-colors">Use Cases</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
              Resources <ChevronDown className="w-3 h-3" />
            </Link>
          </div>
          
          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Log in
            </Link>
            <button className="bg-[#4D7BFF] hover:bg-[#3D6BFF] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="flex flex-col items-start pt-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121B2E] border border-[#1A2642] text-[#4D7BFF] text-[11px] font-bold tracking-widest uppercase mb-8"
          >
            <Sparkles className="w-3 h-3" />
            <span>AI POWERED. LEGALLY PRECISE.</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2 mb-6"
          >
            <h1 className="text-[64px] md:text-[80px] font-bold text-white leading-[1.05] tracking-tight">
              Your AI Lawyer. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D7BFF] to-[#88A8FF]">
                Always on your side.
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[17px] text-[#8F9BB3] max-w-[480px] leading-relaxed mb-10"
          >
            Konco AI delivers instant, reliable legal insights, drafts, and solutions—backed by advanced AI and trusted legal knowledge.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[560px] mb-12"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-transparent border border-[#2A3441] flex items-center justify-center text-[#4D7BFF]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/90 leading-tight">Instant Legal<br/>Answers</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-transparent border border-[#2A3441] flex items-center justify-center text-[#4D7BFF]">
                <FileText className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/90 leading-tight">Smart Document<br/>Drafting</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-transparent border border-[#2A3441] flex items-center justify-center text-[#4D7BFF]">
                <Search className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/90 leading-tight">Case Law<br/>Research</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-transparent border border-[#2A3441] flex items-center justify-center text-[#4D7BFF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/90 leading-tight">Secure &<br/>Confidential</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mb-12"
          >
            <button className="bg-[#4D7BFF] hover:bg-[#3D6BFF] transition-colors text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] flex items-center gap-2">
              Get Started for Free <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <Play className="w-4 h-4 text-white fill-white ml-1" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[15px] font-semibold text-white">See how it works</span>
                <span className="text-xs text-[#8F9BB3]">2 min overview</span>
              </div>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Liam",
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia"
              ].map((src, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-[#060B14] bg-[#1A2642] overflow-hidden">
                   <img src={src} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-[#060B14] bg-[#2A3441] flex items-center justify-center text-xs text-white font-medium z-10">
                +
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] text-[#8F9BB3]">
                <strong className="text-white/90">Trusted by 10,000+</strong> legal professionals
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Floating Glass Panels */}
        <div className="relative h-full min-h-[600px] hidden lg:block">
          
          {/* Top Right Floating Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-12 right-0 w-[280px] p-4 rounded-[20px] bg-[#0A101C]/60 backdrop-blur-md border border-[#2A3441]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#4D7BFF]/30 bg-[#4D7BFF]/10 flex items-center justify-center shrink-0">
                <LineChart className="w-4 h-4 text-[#4D7BFF]" />
              </div>
              <div className="pt-1">
                <h4 className="text-white font-medium text-sm leading-none mb-1.5">Legal Research</h4>
                <p className="text-[11px] text-[#8F9BB3] leading-relaxed">Comprehensive results<br/>in seconds</p>
              </div>
            </div>
          </motion.div>

          {/* Middle Right Floating Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[45%] right-10 w-[280px] p-4 rounded-[20px] bg-[#0A101C]/60 backdrop-blur-md border border-[#2A3441]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg border border-[#4D7BFF]/30 bg-[#4D7BFF]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#4D7BFF]" />
              </div>
              <div className="pt-1">
                <h4 className="text-white font-medium text-sm leading-none mb-1.5">Document Analysis</h4>
                <p className="text-[11px] text-[#8F9BB3] leading-relaxed">AI scanned 28 pages<br/>No issues found</p>
              </div>
            </div>
          </motion.div>

          {/* Main Central Glass Panel (The AI Assistant Mockup) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-4 left-4 w-[380px] rounded-3xl bg-[#0F1626]/70 backdrop-blur-xl border border-[#2A3441]/50 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden z-20"
          >
            {/* Glossy top highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#4D7BFF]" />
                <h3 className="text-white font-semibold text-sm">AI Legal Assistant</h3>
              </div>
              
              <p className="text-[15px] text-white/90 mb-5">How can I help you today?</p>
              
              <div className="space-y-2.5">
                <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#162032]/60 border border-[#2A3441]/60 hover:bg-[#1C273C] transition-colors group">
                  <span className="text-[13px] text-[#8F9BB3] group-hover:text-white transition-colors">Draft a partnership agreement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4D7BFF] opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#162032]/60 border border-[#2A3441]/60 hover:bg-[#1C273C] transition-colors group">
                  <span className="text-[13px] text-[#8F9BB3] group-hover:text-white transition-colors">Summarize this case law</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4D7BFF] opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
                <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#162032]/60 border border-[#2A3441]/60 hover:bg-[#1C273C] transition-colors group">
                  <span className="text-[13px] text-[#8F9BB3] group-hover:text-white transition-colors">Review a contract</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#4D7BFF] opacity-50 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Connecting dashed lines (Simulated with SVGs) */}
          <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
            <svg width="100%" height="100%" className="absolute inset-0">
              <path d="M150 450 Q 250 450 320 280" fill="none" stroke="#4D7BFF" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M150 450 Q 300 450 350 150" fill="none" stroke="#4D7BFF" strokeWidth="1" strokeDasharray="4 4" />
              {/* Dots at intersections */}
              <circle cx="320" cy="280" r="3" fill="#4D7BFF" />
              <circle cx="350" cy="150" r="3" fill="#4D7BFF" />
              <circle cx="150" cy="450" r="3" fill="#4D7BFF" />
            </svg>
          </div>

        </div>
      </div>

      {/* Footer Logo Strip */}
      <div className="relative z-10 w-full bg-[#070C16] border-t border-[#121A2B]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center gap-8 justify-between">
          <span className="text-[11px] tracking-widest text-[#4A5568] uppercase font-bold shrink-0">
            BUILT FOR LEGAL PROFESSIONALS, TRUSTED BY LEADING TEAMS
          </span>
          <div className="flex flex-wrap items-center justify-between w-full opacity-60">
            {/* Logos represented by stylized text to match the image */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex gap-0.5">
                <div className="w-1 h-full bg-white"></div>
                <div className="w-1 h-full bg-white"></div>
                <div className="w-1 h-full bg-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] leading-none text-white">HAMILTON</span>
                <span className="text-[8px] tracking-[0.2em] text-white/70">LAW GROUP</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-[15px] leading-none text-white">MORGAN & CO.</span>
              <span className="text-[8px] tracking-[0.2em] text-white/70 mt-1">ATTORNEYS AT LAW</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-6 h-4 text-white" viewBox="0 0 24 16" fill="currentColor"><path d="M0 8c4-4 8-8 12-8s8 4 12 8-8 8-12 8S4 12 0 8z"/></svg>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] leading-none text-white tracking-widest">WILSON</span>
                <span className="text-[8px] tracking-[0.2em] text-white/70 mt-1 text-center">ASSOCIATES</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-[15px] leading-none text-white tracking-widest">BLACKWELL</span>
              <span className="text-[8px] tracking-[0.2em] text-white/70 mt-1">LEGAL</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 flex flex-col items-center justify-center border-t-2 border-b-2 border-white">
                <div className="flex gap-0.5 h-3">
                  <div className="w-[1.5px] h-full bg-white"></div>
                  <div className="w-[1.5px] h-full bg-white"></div>
                  <div className="w-[1.5px] h-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] leading-none text-white">STERLING</span>
                <span className="text-[8px] tracking-[0.2em] text-white/70">& PARTNERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

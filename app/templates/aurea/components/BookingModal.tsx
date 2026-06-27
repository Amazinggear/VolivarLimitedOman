"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Droplet, Zap, FileText, ArrowRight, CheckCircle2, ChevronRight, Calendar } from "lucide-react";
import { useState } from "react";

const issues = [
  { id: "leak", title: "Water Leak", icon: <Droplet className="w-6 h-6" /> },
  { id: "power", title: "Power Outage", icon: <Zap className="w-6 h-6" /> },
  { id: "contract", title: "Contract Review", icon: <FileText className="w-6 h-6" /> },
];

const times = [
  { id: "asap", label: "ASAP", desc: "Within 30 mins" },
  { id: "today-aft", label: "Today", desc: "2:00 PM - 5:00 PM" },
  { id: "tmrw-morn", label: "Tomorrow", desc: "9:00 AM - 12:00 PM" },
];

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedIssue(null);
      setSelectedTime(null);
    }, 300);
  };

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0A0A0C]/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl bg-[#111115] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0066FF]/20 text-[#00CCFF] font-bold text-sm">
                  {step}
                </div>
                <h2 className="text-xl font-semibold text-white">
                  {step === 1 && "Select Service Type"}
                  {step === 2 && "Choose Date & Time"}
                  {step === 3 && "Confirm Booking"}
                </h2>
              </div>
              <button 
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-white/10 text-[#9CA3AF] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative h-[400px] overflow-hidden p-6 sm:p-10">
              <AnimatePresence mode="wait">
                
                {/* STEP 1: Select Issue */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-auto">
                      {issues.map((issue) => (
                        <button
                          key={issue.id}
                          onClick={() => setSelectedIssue(issue.id)}
                          className={`flex flex-col items-center gap-4 p-6 rounded-2xl border transition-all ${
                            selectedIssue === issue.id 
                              ? 'bg-[#0066FF]/20 border-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.2)]' 
                              : 'bg-white/5 border-white/10 text-[#9CA3AF] hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className={selectedIssue === issue.id ? "text-[#00CCFF]" : ""}>
                            {issue.icon}
                          </div>
                          <span className="font-medium text-sm">{issue.title}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      disabled={!selectedIssue}
                      onClick={() => setStep(2)}
                      className="w-full mt-8 py-4 rounded-xl bg-[#0066FF] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0052CC] transition-colors"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 2: Select Time */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x mb-auto scrollbar-hide">
                      {times.map((time) => (
                        <button
                          key={time.id}
                          onClick={() => setSelectedTime(time.id)}
                          className={`flex-shrink-0 w-48 snap-center flex flex-col items-start gap-2 p-6 rounded-2xl border transition-all ${
                            selectedTime === time.id 
                              ? 'bg-[#0066FF]/20 border-[#0066FF] text-white shadow-[0_0_20px_rgba(0,102,255,0.2)]' 
                              : 'bg-white/5 border-white/10 text-[#9CA3AF] hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <Calendar className={`w-6 h-6 mb-2 ${selectedTime === time.id ? "text-[#00CCFF]" : ""}`} />
                          <span className="font-semibold text-lg">{time.label}</span>
                          <span className={`text-sm ${selectedTime === time.id ? "text-[#00CCFF]/80" : "text-[#6B7280]"}`}>{time.desc}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-4 rounded-xl bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        disabled={!selectedTime}
                        onClick={() => setStep(3)}
                        className="flex-1 py-4 rounded-xl bg-[#0066FF] text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0052CC] transition-colors"
                      >
                        Review Booking
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Confirm */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center mb-6 text-[#00CCFF]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Ready to Dispatch</h3>
                    <p className="text-[#9CA3AF] mb-8 max-w-sm">
                      Your {issues.find(i => i.id === selectedIssue)?.title.toLowerCase()} specialist is ready to be scheduled for {times.find(t => t.id === selectedTime)?.label.toLowerCase()}.
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full py-4 rounded-xl bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors shadow-[0_0_30px_rgba(0,102,255,0.4)]"
                    >
                      Confirm Booking
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

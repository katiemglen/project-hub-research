"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import ProjectManagementPatterns from "@/components/ProjectManagementPatterns";
import StepByStepPatterns from "@/components/StepByStepPatterns";
import ResearchIntegration from "@/components/ResearchIntegration";
import RealTimeCollaboration from "@/components/RealTimeCollaboration";
import DashboardTrends from "@/components/DashboardTrends";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import EfficiencyPatterns from "@/components/EfficiencyPatterns";
import RecommendationsSummary from "@/components/RecommendationsSummary";
import AppendixA from "@/components/AppendixA";
import AppendixB from "@/components/AppendixB";
import PdfButton from "@/components/PdfButton";
import MobileNav from "@/components/MobileNav";

const sections = [
  { id: "executive-summary", label: "Executive Summary", icon: "📋" },
  { id: "project-management-patterns", label: "Project Management UI/UX", icon: "🏗️" },
  { id: "step-by-step-patterns", label: "Step-by-Step Tasks", icon: "✅" },
  { id: "research-integration", label: "Research Integration", icon: "🔬" },
  { id: "real-time-collaboration", label: "Real-Time Collaboration", icon: "🤝" },
  { id: "dashboard-trends", label: "2025-2026 Trends", icon: "📊" },
  { id: "technical-architecture", label: "Technical Architecture", icon: "⚙️" },
  { id: "efficiency-patterns", label: "Efficiency & Quick-Actions", icon: "⚡" },
  { id: "recommendations-summary", label: "Recommendations", icon: "🎯" },
  { id: "appendix-a", label: "Appendix A: UX Laws", icon: "📐" },
  { id: "appendix-b", label: "Appendix B: Sources", icon: "📚" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleSectionClick = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top of viewport
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1a]">
      {/* Mobile Header */}
      <MobileNav
        sections={sections}
        activeSection={activeSection}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        onSectionClick={handleSectionClick}
      />

      {/* Desktop Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen" id="research-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <HeroSection />
          
          <div className="space-y-16 mt-12">
            <ExecutiveSummary />
            <ProjectManagementPatterns />
            <StepByStepPatterns />
            <ResearchIntegration />
            <RealTimeCollaboration />
            <DashboardTrends />
            <TechnicalArchitecture />
            <EfficiencyPatterns />
            <RecommendationsSummary />
            <AppendixA />
            <AppendixB />
          </div>
        </div>
      </main>

      {/* PDF Download Button */}
      <PdfButton />
    </div>
  );
}

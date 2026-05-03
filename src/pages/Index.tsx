import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DifferentialsSection />
      {/* <TestimonialsSection /> */}
      <PlansSection />
      <FAQSection />
      <ContactSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;

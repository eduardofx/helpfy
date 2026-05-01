import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import helpfyLogo from "@/assets/helpfy-logo.png";

const LegalHeader = () => {
  return (
    <header className="bg-navy text-white py-5 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={helpfyLogo}
            alt="Helpfy"
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-coral transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </Link>
      </div>
    </header>
  );
};

export default LegalHeader;

import React, { useState } from 'react';
import { LIFE_ROLES } from '../data/portfolioData';
import { Award, Shield, HeartPulse, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LifePortfolioGrid() {
  const [selectedRole, setSelectedRole] = useState(LIFE_ROLES[0]);

  return (
    <section id="portfolio-section" className="relative py-14 md:py-18 px-6 md:px-12 bg-vintage-deepInk text-vintage-paper border-t border-vintage-charcoal overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-bronze uppercase mb-3 font-bold">
            <Award className="w-4 h-4 text-bronze" />
            <span>BIOGRAPHY PORTFOLIO // THE MULTIFACETED LIFE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-vintage-paper uppercase tracking-tight leading-none mb-6">
            The Dimensions of a Titan
          </h2>
          <p className="text-base md:text-lg font-serif text-vintage-sand leading-relaxed">
            She was never merely one thing. Across nearly a century, she inhabited the roles of healer, combat commander, political prisoner, humanitarian worker, and democratic voice without ever compromising her core principles.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {LIFE_ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role)}
              className={`p-6 rounded-lg text-left transition-all border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-vintage-deepInk ${
                selectedRole.id === role.id
                  ? 'bg-vintage-charcoal border-bronze shadow-2xl scale-[1.02]'
                  : 'bg-vintage-charcoal/40 border-vintage-charcoal hover:border-vintage-slate hover:bg-vintage-charcoal/70'
              }`}
            >
              <div className="text-[10px] font-mono tracking-widest text-bronze uppercase mb-1.5 font-bold">
                {role.badge}
              </div>
              <div className="text-lg md:text-xl font-display font-bold text-vintage-paper mb-1">
                {role.role}
              </div>
              <div className="text-xs font-mono text-vintage-tan">
                {role.years}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Role Presentation Card */}
        <div className="p-8 md:p-12 rounded-xl bg-vintage-charcoal/90 border border-vintage-slate shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Description & Summary */}
            <div className="lg:col-span-7">
              <div className="text-xs font-mono tracking-widest text-bronze uppercase mb-2 font-bold">
                ACTIVE PROFILE: {selectedRole.badge}
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-vintage-paper mb-4">
                {selectedRole.role}
              </h3>
              <p className="text-lg font-serif italic text-vintage-sand mb-6 leading-relaxed">
                "{selectedRole.summary}"
              </p>
              <p className="text-sm md:text-base font-serif text-vintage-tan leading-relaxed mb-8">
                {selectedRole.details}
              </p>

              {/* Key Statistics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-vintage-charcoal text-xs font-mono">
                {selectedRole.keyStats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-lg bg-vintage-deepInk/90 border border-vintage-charcoal">
                    <div className="text-vintage-sepia text-[10px] uppercase mb-1">{stat.label}</div>
                    <div className="text-bronze font-bold text-base md:text-lg">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Struggles & Contributions Matrix */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Struggles Box */}
              <div className="p-6 md:p-7 rounded-lg bg-vintage-deepInk/90 border border-terracotta/40 shadow">
                <div className="flex items-center gap-2 text-xs font-mono text-terracotta-light uppercase font-bold mb-3">
                  <AlertCircle className="w-4 h-4 text-terracotta-light" />
                  <span>HER STRUGGLES & ADVERSITY</span>
                </div>
                <p className="text-xs md:text-sm font-serif text-vintage-sand leading-relaxed">
                  {selectedRole.struggles}
                </p>
              </div>

              {/* Contributions Box */}
              <div className="p-6 md:p-7 rounded-lg bg-vintage-deepInk/90 border border-bronze/50 shadow">
                <div className="flex items-center gap-2 text-xs font-mono text-bronze uppercase font-bold mb-3">
                  <CheckCircle2 className="w-4 h-4 text-bronze" />
                  <span>HER CONTRIBUTIONS & IMPACT</span>
                </div>
                <p className="text-xs md:text-sm font-serif text-vintage-sand leading-relaxed">
                  {selectedRole.contributions}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

import { useEffect, useState } from 'react';
import Aurora from '@/components/reactbits/Aurora';
import PillNav from '@/components/reactbits/PillNav';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProfileCardSection from '@/components/sections/ProfileCardSection';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import GitHubSection from '@/components/sections/GitHubSection';
import BlurText from '@/components/reactbits/BlurText';

// ─────────────────────────────────────────────
// Data import from the isolated `sosial` folder
// ─────────────────────────────────────────────
import portfolioData from '../sosial/data';

function App() {
  const { personal, projects, certificates, experiences, navigation, blogPosts } = portfolioData;
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const fadeTimer = window.setTimeout(() => setIntroFading(true), 2300);
    const hideTimer = window.setTimeout(() => setShowIntro(false), 3000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [showIntro]);

  // Convert NavItem[] to PillNav format
  const pillNavItems = navigation.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  return (
    <>
      {/* ── Intro Loading Screen ── */}
      {showIntro && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050010] transition-all duration-1000 ease-in-out ${introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
            <div className="absolute right-[10%] bottom-1/4 h-64 w-64 rounded-full bg-blue-500/15 blur-[120px]" />
          </div>

          <div className="relative z-10 px-6 text-center">
            <BlurText
              text="Welcome to Johan Portofolio"
              delay={470}
              animateBy="words"
              direction="top"
              stepDuration={0.4}
              className="justify-center font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-cyan-100 drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            />
          </div>
        </div>
      )}
      {/* ── Aurora Background (fixed, full-screen, behind everything) ── */}
      <div className="aurora-bg" aria-hidden="true">
        <Aurora
          colorStops={["#7cff67", "#B19EEF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* ── Navigation (PillNav) ── */}
      <PillNav
        items={pillNavItems}
        baseColor="transparent"
        pillColor="rgba(6, 0, 16, 0.6)"
        hoveredPillTextColor="#060010"
        pillTextColor="#f0f0f5"
      />

      {/* ── Main Content ── */}
      <main className="relative z-10">
        <Hero personal={personal} />
        <ProfileCardSection personal={personal} />
        <About personal={personal} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills />
        <Certificates certificates={certificates} />
        <Blog blogPosts={blogPosts} />
        <GitHubSection />
        <Contact personal={personal} />
      </main>

      {/* ── Footer ── */}
      <Footer name={personal.name} />
    </>
  );
}

export default App;

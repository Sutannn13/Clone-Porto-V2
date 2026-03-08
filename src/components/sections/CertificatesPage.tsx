import React, { useEffect, useState, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Shuffle from '@/components/reactbits/Shuffle';
import Beams from '@/components/reactbits/Beams';
import PillNav from '@/components/reactbits/PillNav';
import CountUp from '@/components/reactbits/CountUp';
import GradientText from '@/components/reactbits/GradientText';
import type { Certificate } from '@/types';

interface CertificatesPageProps {
    certificates: Certificate[];
    onClose: () => void;
}

const pillNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black dark:text-neutral-900"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const CertificatesPage: React.FC<CertificatesPageProps> = ({ certificates, onClose }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [introFading, setIntroFading] = useState(false);

    // Aceternity UI Expansion state
    const [active, setActive] = useState<Certificate | boolean | null>(null);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        if (active) setActive(null)
    });

    const certContent: Record<string, React.ReactNode> = {
        c1: (
            <div className="space-y-2">
                <p>The <strong>MikroTik Certified Network Associate (MTCNA)</strong> validates core proficiency in RouterOS configuration and MikroTik networking products.</p>
                <p><strong>Topics Covered:</strong> Routing, Firewall, NAT, Tunneling, and Bandwidth Management.</p>
            </div>
        ),
        c2: (
            <div className="space-y-2">
                <p>Issued by <strong>Cisco Networking Academy</strong>, this certificate validates foundational knowledge for understanding cyber threats, attacks, and defense strategies.</p>
                <p><strong>Topics Covered:</strong> Malware, Phishing, Network Security, and Data Protection.</p>
            </div>
        ),
        c3: (
            <div className="space-y-2">
                <p>Intensive Fullstack Web Development Bootcamp by <strong>Universitas Bina Sarana Informatika (UBSI)</strong>.</p>
                <p><strong>Achievements:</strong> Served as Project Manager and achieved 2nd Place building <em>Trash Point</em> web application.</p>
            </div>
        ),
        c4: (
            <div className="space-y-2">
                <p>Official <strong>Intellectual Property Right (HKI)</strong> certificate issued by Direktorat Jenderal Kekayaan Intelektual RI.</p>
                <p><strong>Registered Work:</strong> Aplikasi Edukasi Dan Pengelolaan Sampah Berbasis Web (Trash Point). Reg: <strong>000946578</strong>.</p>
            </div>
        ),
    };

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (active && typeof active === 'object') {
                    setActive(null);
                } else {
                    onClose();
                }
            }
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose, active]);

    const handleNavClick = (href: string) => {
        onClose();
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const activeCard = active && typeof active === 'object' ? active : null;

    return createPortal(
        <>
            {/* ── Intro Loading Screen ── */}
            {showIntro && (
                <div
                    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050010] transition-all duration-1000 ease-in-out ${introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                >
                    <div className="flex items-end space-x-1">
                        <GradientText
                            colors={['#8b5cf6', '#B19EEF', '#5227FF', '#8b5cf6']}
                            className="text-6xl md:text-8xl font-display font-bold leading-none inline-block pb-2"
                            animationSpeed={3}
                        >
                            <CountUp
                                from={0}
                                to={100}
                                duration={5}
                                onEnd={() => {
                                    setIntroFading(true);
                                    setTimeout(() => setShowIntro(false), 1000);
                                }}
                            />
                        </GradientText>
                        <span className="text-[#B19EEF] text-2xl md:text-4xl font-display font-bold mb-3 md:mb-5">%</span>
                    </div>
                </div>
            )}

            <div className={`fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#050010] transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
                {/* ── Beams Background ── */}
                <div className="fixed inset-0 z-0 opacity-40">
                    <Beams
                        beamWidth={3}
                        beamHeight={30}
                        beamNumber={20}
                        lightColor="#decaca"
                        speed={5.1}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={30}
                    />
                </div>

                {/* ── PillNav Header ── */}
                <PillNav
                    items={pillNavItems}
                    baseColor="transparent"
                    pillColor="rgba(6, 0, 16, 0.6)"
                    hoveredPillTextColor="#060010"
                    pillTextColor="#f0f0f5"
                    onNavigate={handleNavClick}
                />

                {/* Content Container */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20 lg:py-24">
                    <div className="mb-12 text-center sm:mb-16 md:mb-20 flex flex-col items-center gap-4">
                        <span className="text-[#B19EEF] font-mono text-xs uppercase tracking-[0.25em]">
                            My Certificates
                        </span>
                        <Shuffle
                            text="Certificates & Awards"
                            className="font-display text-3xl font-bold text-white sm:text-5xl md:text-6xl break-words"
                            tag="h1"
                            shuffleDirection="right"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={2}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.1}
                            triggerOnce={true}
                            triggerOnHover
                            respectReducedMotion={true}
                        />
                    </div>

                    {/* NEW ACETERNITY UI Expandable Cards List Layout */}
                    <ul className="max-w-2xl mx-auto w-full gap-4 flex flex-col">
                        {certificates.map((cert) => (
                            <motion.div
                                layoutId={`card-${cert.title}-${id}`}
                                key={`card-${cert.title}-${id}`}
                                onClick={() => setActive(cert)}
                                className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800 rounded-xl cursor-pointer"
                            >
                                <div className="flex gap-4 flex-col md:flex-row ">
                                    <motion.div layoutId={`image-${cert.title}-${id}`}>
                                        <img
                                            src={cert.imageUrl}
                                            alt={cert.title}
                                            className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                        />
                                    </motion.div>
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${cert.title}-${id}`}
                                            className="font-medium text-neutral-200 text-center md:text-left"
                                        >
                                            {cert.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${cert.issuer}-${id}`}
                                            className="text-neutral-400 text-center md:text-left"
                                        >
                                            {cert.issuer}
                                        </motion.p>
                                    </div>
                                </div>
                                <motion.button
                                    layoutId={`button-${cert.title}-${id}`}
                                    className="px-4 py-2 text-sm rounded-full font-bold bg-neutral-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                                >
                                    Lihat
                                </motion.button>
                            </motion.div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* EXPANDABLE OVERLAY */}
            <AnimatePresence>
                {activeCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-[1000]"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {activeCard && (
                    <div className="fixed inset-0 grid place-items-center z-[1001] px-4">
                        <motion.button
                            key={`button-${activeCard.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 !z-[1002]"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${activeCard.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${activeCard.title}-${id}`}>
                                <img
                                    src={activeCard.imageUrl}
                                    alt={activeCard.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${activeCard.title}-${id}`}
                                            className="font-bold text-neutral-200"
                                        >
                                            {activeCard.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${activeCard.issuer}-${id}`}
                                            className="text-neutral-400"
                                        >
                                            {activeCard.issuer}
                                        </motion.p>
                                    </div>

                                    <motion.button
                                        layoutId={`button-${activeCard.title}-${id}`}
                                        onClick={() => setActive(null)}
                                        className="px-6 py-2 text-sm rounded-full font-bold bg-green-500 hover:bg-green-600 text-white"
                                    >
                                        Tutup
                                    </motion.button>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-400 text-xs md:text-sm lg:text-base h-auto pb-4 flex flex-col items-start gap-4 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {certContent[activeCard.id] ?? <p>Sertifikat ini diraih atas penghargaan {activeCard.title}.</p>}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </>,
        document.body
    );
};

export default CertificatesPage;

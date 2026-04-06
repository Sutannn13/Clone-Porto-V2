                                                                                                                        import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    BookOpen, Calendar, User, GraduationCap, Tag, ChevronRight, List, BookMarked, X
} from 'lucide-react';
import Beams from '@/components/reactbits/Beams';
import PillNav from '@/components/reactbits/PillNav';
import BlurText from '@/components/reactbits/BlurText';
import Shuffle from '@/components/reactbits/Shuffle';
import type { BlogPost, BlogReference } from '@/types';

gsap.registerPlugin(ScrollTrigger);

interface BlogPageProps {
    blogPosts: BlogPost[];
    onClose: () => void;
}

const pillNavItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const referenceProofLabel: Record<NonNullable<BlogReference['proof']>, string> = {
    jurnal: 'Jurnal',
    sinta: 'SINTA',
    standar: 'Standar',
    laporan: 'Laporan',
    buku: 'Buku',
    lainnya: 'Lainnya',
};

const referenceUrlRegex = /(https?:\/\/[^\s]+)/i;

const normalizeReference = (ref: BlogPost['references'][number]) => {
    if (typeof ref !== 'string') {
        return {
            text: ref.text,
            url: ref.url,
            proof: ref.proof,
        };
    }

    const matchedUrl = ref.match(referenceUrlRegex);
    if (!matchedUrl) {
        return { text: ref };
    }

    return {
        text: ref.replace(matchedUrl[0], '').trim(),
        url: matchedUrl[0],
    };
};

// ─────────────────────────────────────────────
// Blog Card Component (Grid Preview)
// ─────────────────────────────────────────────
const BlogCard: React.FC<{
    post: BlogPost;
    index: number;
    onOpen: (post: BlogPost) => void;
}> = ({ post, index, onOpen }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Just animate softly from bottom on load
        gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 1.2 + (index * 0.15), // wait for intro
                ease: 'power3.out',
            }
        );
    }, [index]);

    return (
        <div ref={cardRef} className="opacity-0">
            <button
                id={`blog-card-${post.id}`}
                onClick={() => onOpen(post)}
                className="group relative w-full text-left overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md transition-all duration-500 hover:border-white/25 hover:bg-white/5 md:hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)]"
            >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-accent/5 via-transparent to-accent-dark/8 pointer-events-none" />
                <div className="relative z-10 p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                        <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-3xl sm:text-4xl transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                            {post.coverIcon}
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] sm:text-xs font-mono font-semibold tracking-wide text-accent-light">
                            <GraduationCap size={12} />
                            {post.assignment}
                        </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-accent-light line-clamp-3">
                        {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 sm:mb-5 line-clamp-2">
                        {post.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-neutral-500 mb-4 sm:mb-5">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={12} className="text-neutral-600" />
                            {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <User size={12} className="text-neutral-600" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={12} className="text-neutral-600" />
                            {post.sections.length} Sections
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                        {post.tags.slice(0, 5).map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 rounded-lg border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] sm:text-xs text-neutral-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-neutral-300">
                                <Tag size={9} /> {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-accent transition-all duration-300 group-hover:text-accent-light group-hover:gap-3">
                        Baca Selengkapnya
                        <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </div>
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
        </div>
    );
};

// ─────────────────────────────────────────────
// Blog Detail Modal (Full Post View)
// ─────────────────────────────────────────────
const BlogDetail: React.FC<{ post: BlogPost; onClose: () => void; }> = ({ post, onClose }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [showToc, setShowToc] = useState(false);

    useEffect(() => {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 60, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: 0.1, ease: 'power3.out' }
        );
    }, []);

    const handleClose = () => {
        gsap.to(contentRef.current, { opacity: 0, y: 40, duration: 0.3, ease: 'power2.in' });
        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.1,
            ease: 'power2.in',
            onComplete: onClose,
        });
    };

    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(`blog-section-${sectionId}`);
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setShowToc(false); }
    };

    return (
        <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto" onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
            <div ref={contentRef} className="relative z-10 w-full max-w-4xl mx-4 my-6 sm:my-10">
                <div className="sticky top-0 z-20 flex items-center justify-between rounded-t-2xl border border-white/10 bg-bg-primary/95 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{post.coverIcon}</span>
                        <div>
                            <p className="font-mono text-[10px] sm:text-xs tracking-wide text-accent">{post.assignment}</p>
                            <p className="text-xs sm:text-sm text-white font-medium truncate max-w-[200px] sm:max-w-[400px]">{post.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={() => setShowToc(!showToc)} className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-400 transition-all duration-300 hover:border-accent/30 hover:text-accent sm:hidden">
                            <List size={14} />
                        </button>
                        <button onClick={handleClose} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400">
                            <X size={16} />
                        </button>
                    </div>
                </div>
                {showToc && (
                    <div className="border-x border-white/10 bg-bg-primary/95 backdrop-blur-xl px-4 py-3 sm:hidden">
                        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-500 mb-2">Daftar Isi</p>
                        <ol className="space-y-1">
                            {post.tableOfContents.map((item, i) => (
                                <li key={i}>
                                    <button onClick={() => { const section = post.sections[i]; if (section) scrollToSection(section.id); }} className="flex items-start gap-2 text-left text-xs text-neutral-400 hover:text-accent transition-colors py-1 w-full">
                                        <span className="font-mono text-accent/60 shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span> {item}
                                    </button>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
                <article className="rounded-b-2xl border border-t-0 border-white/10 bg-bg-primary/80 backdrop-blur-xl">
                    <div className="flex">
                        <aside className="hidden sm:block w-56 lg:w-64 shrink-0 border-r border-white/8 p-5 lg:p-6 sticky top-16 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
                            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-500 mb-3 flex items-center gap-1.5">
                                <List size={12} /> Daftar Isi
                            </p>
                            <ol className="space-y-1">
                                {post.tableOfContents.map((item, i) => (
                                    <li key={i}>
                                        <button onClick={() => { const section = post.sections[i]; if (section) scrollToSection(section.id); }} className="flex items-start gap-2 text-left text-xs text-neutral-400 hover:text-accent transition-colors duration-300 py-1.5 w-full group/toc">
                                            <span className="font-mono text-[10px] text-accent/50 group-hover/toc:text-accent shrink-0 mt-0.5 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="leading-snug">{item}</span>
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </aside>
                        <div className="flex-1 min-w-0">
                            <header className="px-5 sm:px-8 lg:px-10 pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-white/8">
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="inline-flex items-center gap-1 rounded-lg border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent-light">
                                            <Tag size={9} /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">{post.title}</h1>
                                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-5 sm:mb-6">{post.subtitle}</p>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                                        <User size={13} className="text-accent" /> <span className="text-xs text-white font-medium">{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                                        <Calendar size={13} className="text-accent" /> <span className="text-xs text-neutral-300">{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                                        <GraduationCap size={13} className="text-accent" /> <span className="text-xs text-neutral-300">{post.course}</span>
                                    </div>
                                </div>
                            </header>
                            <div className="px-5 sm:px-8 lg:px-10 py-6 sm:py-8 space-y-8 sm:space-y-10">
                                {post.sections.map((section, sIdx) => (
                                    <section key={section.id} id={`blog-section-${section.id}`} className="scroll-mt-20">
                                        <div className="flex items-start gap-3 mb-3 sm:mb-4">
                                            <span className="shrink-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/8 font-mono text-[10px] sm:text-xs font-bold text-accent">
                                                {String(sIdx + 1).padStart(2, '0')}
                                            </span>
                                            <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight pt-0.5">{section.heading}</h2>
                                        </div>
                                        <div className="space-y-4 pl-10 sm:pl-11">
                                            {section.body.split('\n\n').map((paragraph, pIdx) => (
                                                <p key={pIdx} className="text-sm sm:text-[15px] leading-[1.85] text-neutral-300">{paragraph}</p>
                                            ))}
                                            {section.bullets && section.bullets.length > 0 && (
                                                <ul className="space-y-3 mt-4">
                                                    {section.bullets.map((bullet, bIdx) => {
                                                        const [label, ...rest] = bullet.split(' — ');
                                                        const description = rest.join(' — ');
                                                        return (
                                                            <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-neutral-300 leading-[1.85]">
                                                                <ChevronRight size={15} className="mt-1 shrink-0 text-accent/70" />
                                                                <span>
                                                                    {description ? (<><strong className="text-white font-semibold">{label}</strong> — {description}</>) : (bullet)}
                                                                </span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    </section>
                                ))}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                <section id="blog-section-references" className="scroll-mt-20">
                                    <div className="flex items-start gap-3 mb-4 sm:mb-5">
                                        <span className="shrink-0 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/8">
                                            <BookMarked size={14} className="text-accent" />
                                        </span>
                                        <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white pt-0.5">Referensi</h2>
                                    </div>
                                    <ol className="space-y-3 pl-10 sm:pl-11 list-none">
                                        {post.references.map((ref, rIdx) => {
                                            const normalizedReference = normalizeReference(ref);
                                            const proofLabel = normalizedReference.proof ? referenceProofLabel[normalizedReference.proof] : null;

                                            return (
                                            <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                                                <span className="shrink-0 font-mono text-[10px] text-accent/50 mt-1 w-5 text-right">[{rIdx + 1}]</span>
                                                <div className="min-w-0">
                                                    {normalizedReference.url ? (
                                                        <a
                                                            href={normalizedReference.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="italic text-cyan-300 underline decoration-cyan-400/60 underline-offset-2 transition-colors duration-300 hover:text-cyan-200"
                                                        >
                                                            {normalizedReference.text}
                                                        </a>
                                                    ) : (
                                                        <span className="italic">{normalizedReference.text}</span>
                                                    )}
                                                    {proofLabel && (
                                                        <span className="ml-2 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-mono tracking-wide text-cyan-200">
                                                            {proofLabel}
                                                        </span>
                                                    )}
                                                </div>
                                            </li>
                                            );
                                        })}
                                    </ol>
                                </section>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────
// Main exported Screen/Page Component
// ─────────────────────────────────────────────
const BlogPage: React.FC<BlogPageProps> = ({ blogPosts, onClose }) => {
    const [showIntro, setShowIntro] = useState(true);
    const [introFading, setIntroFading] = useState(false);
    const [activePost, setActivePost] = useState<BlogPost | null>(null);

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

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (activePost) {
                    setActivePost(null);
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
    }, [onClose, activePost]);

    const handleNavClick = (href: string) => {
        onClose();
        setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return createPortal(
        <>
            {showIntro && (
                <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050010] transition-all duration-1000 ease-in-out ${introFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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

            <div className={`fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden bg-[#050010] transition-opacity duration-1000`}>
                <div className={`min-h-full transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="fixed inset-0 z-0 opacity-40">
                        <Beams beamWidth={3} beamHeight={30} beamNumber={20} lightColor="#decaca" speed={5.1} noiseIntensity={1.75} scale={0.2} rotation={30} />
                    </div>

                    <PillNav items={pillNavItems} baseColor="transparent" pillColor="rgba(6, 0, 16, 0.6)" hoveredPillTextColor="#060010" pillTextColor="#f0f0f5" onNavigate={handleNavClick} />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20 lg:py-24">
                        <div className="mb-12 text-center sm:mb-16 md:mb-20 flex flex-col items-center gap-4">
                            <span className="text-[#B19EEF] font-mono text-xs uppercase tracking-[0.25em]">
                                University Assignments
                            </span>
                            <Shuffle
                                text="Academic Blog"
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

                        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                            {blogPosts.map((post, i) => (
                                <BlogCard key={post.id} post={post} index={i} onOpen={setActivePost} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {activePost && (
                <BlogDetail post={activePost} onClose={() => setActivePost(null)} />
            )}
        </>,
        document.body
    );
};

export default BlogPage;

import { useState } from 'react';
import SplitText from '@/components/reactbits/SplitText';
import { Layers } from 'lucide-react';
import BlogPage from './BlogPage';
import type { BlogPost } from '@/types';

interface BlogProps {
    blogPosts: BlogPost[];
}

// ─────────────────────────────────────────────
// Blog Cover Component (Entry Point)
// ─────────────────────────────────────────────
const BlogCover: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div 
        onClick={onClick}
        className="group relative max-w-3xl mx-auto cursor-pointer overflow-hidden rounded-[20px] sm:rounded-[32px] border border-white/10 bg-black/20 p-6 sm:p-10 backdrop-blur-md transition-all duration-500 hover:border-accent/40 hover:bg-white/5 md:hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(139,92,246,0.15)]"
    >
        {/* Hover Highlight */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-accent/10 via-transparent to-accent-dark/10 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Icon Box */}
            <div className="flex shrink-0 h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-[16px] border border-white/10 bg-white/5 text-5xl sm:text-6xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                📚
            </div>
            
            {/* Text Box */}
            <div className="text-center md:text-left flex-1 min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-[10px] sm:text-xs font-mono font-semibold tracking-wide text-accent-light mb-4">
                    Tugas Perorangan — BSI
                </span>
                <h3 className="font-display text-xl sm:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-accent-light transition-colors duration-300">
                    Masuk ke Blog Akademis
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-6">
                    Baca tulisan lengkap mengenai evolusi Machine-to-Machine, arsitektur Internet of Things, model referensi ITU-T, dan penyelesaian studi kasus secara komprehensif.
                </p>
                
                {/* CTA */}
                <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-accent group-hover:text-white transition-colors duration-300 bg-white/5 sm:bg-transparent py-2.5 px-4 sm:p-0 rounded-lg sm:rounded-none w-full sm:w-auto hover:bg-white/10 sm:hover:bg-transparent">
                    Buka Halaman Penuh
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </div>
            </div>
        </div>
        
        {/* Accent Bottom Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute bottom-0 left-0" />
    </div>
);

// ─────────────────────────────────────────────
// Main Content Section
// ─────────────────────────────────────────────
const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
    const [isPageOpen, setIsPageOpen] = useState(false);

    return (
        <>
            <section
                id="blog"
                className="relative z-10 py-12 sm:py-section px-4 sm:px-6"
            >
                <div className="mx-auto max-w-5xl">
                    {/* Section Header */}
                    <div className="mb-10 sm:mb-16 text-center">
                        <span className="section-label mb-3 sm:mb-4 block flex items-center justify-center gap-2">
                            <Layers size={14} />
                            Academic Blog
                        </span>
                        <SplitText
                            text="Tugas Perorangan IoT"
                            className="font-display text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl"
                            tag="h2"
                            delay={30}
                            duration={0.8}
                            splitType="words"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                        />
                        <p className="mt-4 text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
                            Kumpulan tulisan akademis untuk mata kuliah Internet of Things (IoT) — Universitas Bina Sarana Informatika
                        </p>
                    </div>

                    {/* Blog Cover Card */}
                    <BlogCover onClick={() => setIsPageOpen(true)} />
                </div>
            </section>

            {/* Separate Full-Screen Blog Page */}
            {isPageOpen && (
                <BlogPage
                    blogPosts={blogPosts}
                    onClose={() => setIsPageOpen(false)}
                />
            )}
        </>
    );
};

export default Blog;

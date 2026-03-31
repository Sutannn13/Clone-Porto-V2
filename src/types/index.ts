// ─────────────────────────────────────────────
// Portfolio Data Types
// ─────────────────────────────────────────────

export interface PersonalInfo {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    bio: string;
    shortBio: string;
    email: string;
    location: string;
    availableForWork: boolean;
    profileImage: string;
}

export interface SocialLink {
    id: string;
    label: string;
    url: string;
    icon: string;
}

export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    proficiency: number; // 0-100
}

export type SkillCategory =
    | 'frontend'
    | 'backend'
    | 'networking'
    | 'tools'
    | 'database'
    | 'other';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    techStack: string[];
    imageUrl?: string;
    liveUrl?: string;
    repoUrl?: string;
    featured: boolean;
    category: string;
    award?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    description: string;
    highlights: string[];
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    imageUrl?: string;
    credentialUrl?: string;
}

export interface BlogSection {
    id: string;
    heading: string;
    body: string;
    bullets?: string[];
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    course: string;
    assignment: string;
    coverIcon: string;
    tags: string[];
    tableOfContents: string[];
    sections: BlogSection[];
    references: string[];
}

export interface NavItem {
    id: string;
    label: string;
    href: string;
}

export interface PortfolioData {
    personal: PersonalInfo;
    socials: SocialLink[];
    skills: Skill[];
    projects: Project[];
    experiences: Experience[];
    certificates: Certificate[];
    blogPosts: BlogPost[];
    navigation: NavItem[];
}

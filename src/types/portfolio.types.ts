export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    profileSummary: string;
}

export interface Skill {
    name: string;
    category: 'mobile' | 'web' | 'soft';
    color?: string;
}

export interface SpecializationItem {
    title: string;
    description: string;
}

export interface Specialization {
    title: string;
    icon: string;
    items: SpecializationItem[];
}

export interface Education {
    degree: string;
    institution: string;
    faculty: string;
    period: string;
    status: string;
    achievements: string[];
}

export interface Certification {
    title: string;
    description: string;
    skills: string[];
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
}

export interface Language {
    name: string;
    level: string;
}

import type { PersonalInfo, Skill, Specialization, Education, Certification, ContactInfo, Language } from '../types/portfolio.types';

export const personalInfo: PersonalInfo = {
    name: 'Juan Daniel Cantu Guillen',
    title: 'Desarrollador de Software',
    email: 'danielcantu258@gmail.com',
    phone: '+51 929077605',
    location: 'San Borja, Lima',
    linkedin: 'linkedin.com/in/danielcantu56',
    github: 'github.com/SrConej0',
    profileSummary: 'Estudiante de Ingeniería de Software con vida laboral en el desarrollo web. Me destaco en la creación de aplicaciones multiplataforma utilizando Flutter y Kotlin, así como en el desarrollo de sitios web modernos con JavaScript, PHP. Busco constantemente aprender nuevas tecnologías y aplicar las mejores prácticas de desarrollo.'
};

export const skills: Skill[] = [
    // Desarrollo Móvil
    { name: 'Kotlin', category: 'mobile', color: 'purple' },
    { name: 'Android', category: 'mobile', color: 'green' },
    { name: 'Firebase', category: 'mobile', color: 'orange' },
    { name: 'iOS', category: 'mobile', color: 'blue' },
    { name: 'Flutter', category: 'mobile', color: 'cyan' },

    // Tecnologías Web
    { name: 'JavaScript', category: 'web', color: 'yellow' },
    { name: 'HTML', category: 'web', color: 'orange' },
    { name: 'CSS', category: 'web', color: 'blue' },
    { name: 'PHP', category: 'web', color: 'purple' },
    { name: 'SQL', category: 'web', color: 'cyan' },

    // Habilidades Blandas
    { name: 'Trabajo en Equipo', category: 'soft', color: 'green' },
    { name: 'Adaptabilidad', category: 'soft', color: 'blue' },
    { name: 'Comunicación Efectiva', category: 'soft', color: 'purple' },
    { name: 'Perseverancia', category: 'soft', color: 'orange' }
];

export const specializations: Specialization[] = [
    {
        title: 'Especialización en Desarrollo Móvil',
        icon: 'smartphone',
        items: [
            {
                title: 'Desarrollo multiplataforma',
                description: 'Desarrollo de aplicaciones multiplataforma con Flutter'
            },
            {
                title: 'Android nativo',
                description: 'Creación de aplicaciones nativas para Android usando Kotlin'
            },
            {
                title: 'Servicios en la nube',
                description: 'Integración de servicios en la nube como Firebase'
            },
            {
                title: 'Diseño de interfaces',
                description: 'Diseño de interfaces móviles intuitivas'
            },
            {
                title: 'Funcionalidades en tiempo real',
                description: 'Implementación de funcionalidades en tiempo real'
            }
        ]
    },
    {
        title: 'Especialización en Desarrollo Web',
        icon: 'globe',
        items: [
            {
                title: 'Sitios responsivos',
                description: 'Desarrollo de sitios web responsivos con HTML5 y CSS3'
            },
            {
                title: 'JavaScript moderno',
                description: 'Programación frontend con JavaScript moderno'
            },
            {
                title: 'Backend con PHP',
                description: 'Desarrollo backend con PHP y bases de datos SQL'
            },
            {
                title: 'Interfaces interactivas',
                description: 'Implementación de interfaces de usuario interactivas'
            },
            {
                title: 'Optimización',
                description: 'Optimización de rendimiento y SEO'
            }
        ]
    }
];

export const education: Education = {
    degree: 'Ingeniería de Software',
    institution: 'ISIL',
    faculty: 'Facultad de Tecnología',
    period: '2022 - 2025',
    status: 'En curso',
    achievements: [
        '84 créditos acumulados',
        'Programa de Computación e Informática',
        'Especialización en desarrollo de aplicaciones móviles y web'
    ]
};

export const certifications: Certification[] = [
    {
        title: 'Certificación en Tecnologías de Desarrollo de Software',
        description: 'Certificación profesional en desarrollo de aplicaciones',
        skills: [
            'Desarrollo de aplicaciones móviles y web',
            'Metodologías ágiles y buenas prácticas de desarrollo'
        ]
    }
];

export const contactInfo: ContactInfo = {
    email: 'danielcantu258@gmail.com',
    phone: '+51 929077605',
    location: 'San Borja, Lima',
    linkedin: 'linkedin.com/in/danielcantu56',
    github: 'github.com/SrConej0'
};

export const languages: Language[] = [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'A1' }
];

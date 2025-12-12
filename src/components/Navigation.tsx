import { useState } from 'react';
import { Menu, X, Home, User, Code2, Smartphone, GraduationCap, Award, Mail } from 'lucide-react';

interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
}

const navItems: NavItem[] = [
    { id: 'hero', label: 'Inicio', icon: <Home className="w-5 h-5" /> },
    { id: 'profile', label: 'Perfil', icon: <User className="w-5 h-5" /> },
    { id: 'skills', label: 'Habilidades', icon: <Code2 className="w-5 h-5" /> },
    { id: 'specializations', label: 'Especializaciones', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'education', label: 'Educación', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'certifications', label: 'Certificaciones', icon: <Award className="w-5 h-5" /> },
    { id: 'contact', label: 'Contacto', icon: <Mail className="w-5 h-5" /> },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-2xl md:hidden"
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block fixed left-6 top-1/2 transform -translate-y-1/2 z-40">
                <div className="rounded-full backdrop-blur-xl bg-white/10 border border-white/20 p-3 shadow-2xl">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all group relative"
                                title={item.label}
                            >
                                <div className="text-white/70 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <span className="absolute left-full ml-4 px-3 py-1 rounded-lg bg-white/90 text-gray-900 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {item.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 top-0 bottom-0 w-64 backdrop-blur-xl bg-white/10 border-l border-white/20 p-6 shadow-2xl">
                        <div className="mt-16 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl bg-white/5 hover:bg-white/20 border border-white/10 text-white transition-all"
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

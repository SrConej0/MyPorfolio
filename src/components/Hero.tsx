import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-blue-600/20 animate-gradient" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Profile Image Placeholder */}
                <div className="mb-8 inline-block">
                    <div className="w-40 h-40 rounded-full backdrop-blur-xl bg-white/10 border-4 border-white/20 flex items-center justify-center shadow-2xl">
                        <span className="text-6xl font-bold text-white/90">
                            {personalInfo.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                    </div>
                </div>

                {/* Name and Title */}
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                    {personalInfo.name}
                </h1>
                <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light">
                    {personalInfo.title}
                </p>

                {/* Quick Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-white/70">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.email}</span>
                    </a>
                    <span className="text-white/30">•</span>
                    <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.phone}</span>
                    </a>
                    <span className="text-white/30">•</span>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{personalInfo.location}</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <a
                        href={`https://${personalInfo.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                    >
                        <Linkedin className="w-5 h-5 text-white/80" />
                    </a>
                    <a
                        href={`https://${personalInfo.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all shadow-lg"
                    >
                        <Github className="w-5 h-5 text-white/80" />
                    </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        Contáctame
                    </a>
                    <button className="px-8 py-4 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        Descargar CV
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { contactInfo, languages } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, Languages } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-4xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/20 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Contacto</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Contact Information */}
                    <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl">
                        <h3 className="text-2xl font-semibold text-white mb-6">Información de Contacto</h3>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Email</p>
                                    <p className="text-white font-medium">{contactInfo.email}</p>
                                </div>
                            </a>

                            <a
                                href={`tel:${contactInfo.phone}`}
                                className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Teléfono</p>
                                    <p className="text-white font-medium">{contactInfo.phone}</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white/60 text-xs">Ubicación</p>
                                    <p className="text-white font-medium">{contactInfo.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links & Languages */}
                    <div className="space-y-6">
                        {/* Social Links */}
                        <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl">
                            <h3 className="text-2xl font-semibold text-white mb-6">Redes Sociales</h3>

                            <div className="space-y-4">
                                <a
                                    href={`https://${contactInfo.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs">LinkedIn</p>
                                        <p className="text-white font-medium">{contactInfo.linkedin}</p>
                                    </div>
                                </a>

                                <a
                                    href={`https://${contactInfo.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500/30 to-gray-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Github className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/60 text-xs">GitHub</p>
                                        <p className="text-white font-medium">{contactInfo.github}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Languages className="w-5 h-5 text-white" />
                                <h3 className="text-xl font-semibold text-white">Idiomas</h3>
                            </div>

                            <div className="space-y-2">
                                {languages.map((lang, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-white/90">{lang.name}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-sm">
                                            {lang.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

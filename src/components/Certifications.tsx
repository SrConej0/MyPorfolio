import { certifications } from '../data/portfolioData';
import { Award } from 'lucide-react';

export default function Certifications() {
    return (
        <section id="certifications" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-4xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-white/20 flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Certificaciones</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2" />
                    </div>
                </div>

                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl hover:bg-white/15 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                                    <p className="text-white/80 mb-4">{cert.description}</p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-4">
                                <ul className="space-y-2">
                                    {cert.skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mt-2 flex-shrink-0" />
                                            <p className="text-white/90">{skill}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-4xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/20 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Educación</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2" />
                    </div>
                </div>

                {/* Education Card */}
                <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-10 shadow-2xl">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                            <p className="text-white/80 text-lg mb-1">{education.institution} - {education.faculty}</p>
                            <div className="flex items-center gap-3 text-white/60">
                                <span>{education.period}</span>
                                <span>•</span>
                                <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm">
                                    {education.status}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                        <h4 className="text-white/80 font-semibold mb-4">Logros destacados:</h4>
                        <ul className="space-y-3">
                            {education.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 mt-2 flex-shrink-0" />
                                    <p className="text-white/90">{achievement}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

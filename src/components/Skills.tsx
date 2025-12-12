import { skills } from '../data/portfolioData';
import SkillBadge from './SkillBadge';
import { Code2, Smartphone, Users } from 'lucide-react';

export default function Skills() {
    const mobileSkills = skills.filter(s => s.category === 'mobile');
    const webSkills = skills.filter(s => s.category === 'web');
    const softSkills = skills.filter(s => s.category === 'soft');

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/20 flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Habilidades</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2" />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Mobile Development */}
                    <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                                <Smartphone className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Desarrollo Móvil</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {mobileSkills.map((skill) => (
                                <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
                            ))}
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                                <Code2 className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Tecnologías Web</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {webSkills.map((skill) => (
                                <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">Habilidades Blandas</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {softSkills.map((skill) => (
                                <SkillBadge key={skill.name} name={skill.name} color={skill.color} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

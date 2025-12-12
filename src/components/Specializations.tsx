import { specializations } from '../data/portfolioData';
import { Smartphone, Globe } from 'lucide-react';

const iconMap = {
    smartphone: Smartphone,
    globe: Globe,
};

export default function Specializations() {
    return (
        <section id="specializations" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Especializaciones</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2" />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {specializations.map((spec, index) => {
                        const Icon = iconMap[spec.icon as keyof typeof iconMap] || Smartphone;
                        return (
                            <div
                                key={index}
                                className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 shadow-2xl hover:bg-white/15 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">{spec.title}</h3>
                                </div>

                                <ul className="space-y-3">
                                    {spec.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0" />
                                            <div>
                                                <p className="text-white/90 font-medium">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

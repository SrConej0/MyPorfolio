import { personalInfo } from '../data/portfolioData';
import { User } from 'lucide-react';

export default function Profile() {
    return (
        <section id="profile" className="min-h-screen flex items-center justify-center py-20 px-6">
            <div className="max-w-4xl w-full">
                {/* Section Title */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-12 h-12 rounded-xl backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">Perfil</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2" />
                    </div>
                </div>

                {/* Profile Card */}
                <div className="rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-12 shadow-2xl">
                    <p className="text-white/90 text-lg leading-relaxed">
                        {personalInfo.profileSummary}
                    </p>
                </div>
            </div>
        </section>
    );
}

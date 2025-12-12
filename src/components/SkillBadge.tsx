interface SkillBadgeProps {
    name: string;
    color?: string;
}

const colorMap: Record<string, string> = {
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-400/50',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-400/50',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-400/50',
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-400/50',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-400/50',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 hover:border-yellow-400/50',
};

export default function SkillBadge({ name, color = 'purple' }: SkillBadgeProps) {
    const colorClass = colorMap[color] || colorMap.purple;

    return (
        <div
            className={`px-4 py-2 rounded-full backdrop-blur-xl bg-gradient-to-r ${colorClass} border text-white/90 font-medium text-sm transition-all hover:scale-105 hover:shadow-lg cursor-default`}
        >
            {name}
        </div>
    );
}

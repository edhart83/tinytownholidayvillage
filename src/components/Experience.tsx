import { Home, TreePine, Users, Camera, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Home,
    text: 'A whimsical village of beautifully lit tiny houses',
  },
  {
    icon: TreePine,
    text: 'A stunning 45-foot colorful lighted tree',
  },
  {
    icon: Users,
    text: 'Easy, family-friendly walk-through layout',
  },
  {
    icon: Camera,
    text: 'Perfect spots for holiday photos',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-stone-950 to-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            What You'll Experience
          </h2>

                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
            Step into a glowing winter wonderland in Mesa! Twinkling lights, tiny houses, festive displays and a stunning 45-foot illuminated tree. A festive atmosphere for kids and adults alike.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-400/50 transition-all hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-green-600 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-200 text-lg pt-2">{feature.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-red-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-yellow-400/30">
            <p className="text-xl text-gray-200 leading-relaxed">
              Tiny Town is designed to spark wonder, smiles, and holiday cheer for all ages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

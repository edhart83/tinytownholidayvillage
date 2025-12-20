import { Sparkles, TrendingUp } from 'lucide-react';

export default function MoreLights() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="snowflake-bg absolute inset-0 opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Sparkles className="w-16 h-16 text-yellow-300 mx-auto animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            More Lights, More Magic
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-8 rounded-full"></div>

          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl border-2 border-yellow-400/50 p-8 md:p-10 shadow-2xl">
            <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Tiny Town keeps getting brighter! Additional lights and displays are being added — every visit brings something new to see.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Clock, Calendar, AlertCircle } from 'lucide-react';

export default function Hours() {
  return (
    <section id="hours" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Hours & Dates
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm p-8 rounded-2xl border border-red-500/30 text-center">
              <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Open Nightly</h3>
              <p className="text-3xl font-bold text-yellow-300">5:00 PM – 11:00 PM</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 text-center">
              <Calendar className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Season</h3>
              <p className="text-2xl font-bold text-yellow-300">Now Open Through January</p>
            </div>
          </div>

          <div className="bg-yellow-900/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3">Important Notice</h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Tiny Town will temporarily close at the end of January to prepare for an exciting and refreshed 2026 season! Visit us now while it's glowing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

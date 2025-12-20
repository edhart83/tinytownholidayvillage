import { Film, Users, MessageCircle, Facebook } from 'lucide-react';

interface EventsProps {
  facebookUrl?: string;
}

export default function Events({ facebookUrl = "https://facebook.com" }: EventsProps) {
  return (
    <section id="events" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Special Events at Tiny Town
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-12 rounded-full"></div>

          <div className="bg-gradient-to-br from-red-900/40 to-green-900/40 backdrop-blur-sm rounded-2xl border-2 border-yellow-400/40 p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-10 h-10 text-yellow-300" />
              <h3 className="text-3xl font-bold text-white">Holiday Movie Nights</h3>
            </div>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Join us for magical evenings featuring double-feature movie nights under the lights.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-200">
                <Users className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Family-friendly films</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Users className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Limited seating</span>
              </div>
            </div>

            <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-6 mb-6">
              <p className="text-lg font-semibold text-yellow-300 mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Text to RSVP
              </p>
              <a
                href="tel:480-274-3831"
                className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors"
              >
                480-274-3831
              </a>
            </div>

            <div className="flex items-start gap-3 text-gray-300">
              <Facebook className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <p>
                Follow us on{' '}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline"
                >
                  Facebook
                </a>{' '}
                for upcoming event announcements and surprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

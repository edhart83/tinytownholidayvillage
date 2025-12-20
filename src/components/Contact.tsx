import { MapPin, MessageCircle, Facebook, Navigation } from 'lucide-react';

interface ContactProps {
  facebookUrl?: string;
}

export default function Contact({ facebookUrl = "https://www.facebook.com/profile.php?id=61568678046515" }: ContactProps) {
  const googleMapsUrl = "https://maps.app.goo.gl/os9fcd17KSZR7RdY9";

  return (
    <section id="contact" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Plan Your Visit
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 backdrop-blur-sm rounded-2xl border border-green-500/30 p-8 text-center">
              <MessageCircle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Text to RSVP</h3>
              <a
                href="tel:480-274-3831"
                className="text-2xl font-bold text-yellow-300 hover:text-yellow-200 transition-colors"
              >
                480-274-3831
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm rounded-2xl border border-red-500/30 p-8 text-center">
              <MapPin className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Location</h3>
              <p className="text-gray-200">
                16025 S 222nd St Mesa, Mesa, AZ
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <Facebook className="w-5 h-5" />
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 mt-12 pt-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-sm">
            Hours and seasonal dates may change. Check Facebook for the latest updates.
          </p>
          <p className="text-center text-gray-500 text-sm mt-4">
            © 2025-2026 Tiny Town Holiday Village. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

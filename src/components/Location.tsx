import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Location() {
  const [copied, setCopied] = useState(false);
  const locationText = "16025 S 222nd St Mesa, Mesa, AZ";
  const googleMapsUrl = "https://maps.app.goo.gl/os9fcd17KSZR7RdY9";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(locationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-gradient-to-b from-stone-950 to-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Location
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-12 rounded-full"></div>

          <div className="bg-gradient-to-br from-red-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8 md:p-12 text-center mb-8">
            <MapPin className="w-16 h-16 text-yellow-300 mx-auto mb-6" />

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {locationText}
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              You'll know you're there when you see the giant glowing tree lighting up the night sky.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all hover:scale-105 shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all hover:scale-105 border border-white/20"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

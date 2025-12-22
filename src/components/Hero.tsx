import { MapPin, MessageCircle, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const googleMapsUrl = "https://maps.app.goo.gl/os9fcd17KSZR7RdY9";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simple fallback - if video isn't playing after load, trigger play
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked by browser - ignore silently
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/tree.jpg"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/walkthrough-snow.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70"></div>
      <div className="snowflake-bg absolute inset-0 opacity-40"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl lg:text-9xl font-bold text-white mb-6 drop-shadow-[0_0_10px_#38bdf8] leading-tight font-winter-selfie">
            TINY TOWN HOLIDAY VILLAGE
          </h1>

          <h1 className="text-4xl md:text-6xl lg:text-4xl font-normal text-white mb-12 text-shadow-glow leading-tight font-winter-selfie">
            A Magical Holiday Experience for All Ages
          </h1>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>

            <a
              href="tel:480-274-3831"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Text to RSVP
            </a>
          </div>

           <div className="inline-block px-6 py-2 bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-400 rounded-full">
            <p className="text-yellow-300 font-semibold flex items-center gap-2 justify-center">
              <Clock className="w-4 h-4" />
              Open Nightly 5 PM – 11 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

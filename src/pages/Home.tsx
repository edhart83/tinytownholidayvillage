import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Hours from '../components/Hours';
import Location from '../components/Location';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { Info, ArrowRight } from 'lucide-react';

function Home() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61568678046515";

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Experience />
      
      {/* About Section Link */}
      <section className="py-16 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8 text-center">
              <Info className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-winter-selfie">
                Want to Learn More?
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Discover the story behind Tiny Town Holiday Village—from our Midwest roots to how a backyard experiment became Mesa's magical holiday tradition. Learn about our family mission, the journey from 2023 to today, and our vision for the future.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Read Our Story
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Hours />
      <Location />
      <Gallery />
      <FAQ />
      <Contact facebookUrl={facebookUrl} />
    </div>
  );
}

export default Home;


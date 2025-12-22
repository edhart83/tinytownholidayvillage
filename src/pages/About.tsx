import { useEffect } from 'react';
import About from '../components/About';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

function AboutPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation back to home */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
      <About />
    </div>
  );
}

export default AboutPage;


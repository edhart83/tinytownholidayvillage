import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Hours from './components/Hours';
import Location from './components/Location';
import Events from './components/Events';
import MoreLights from './components/MoreLights';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61568678046515";

  return (
    <div className="min-h-screen bg-slate-900">
      {/* <Header /> */} 
      <Hero />
      <Experience />
      <Hours />
      <Location />
      {/* <Events facebookUrl={facebookUrl} /> */} 
      {/* <MoreLights /> */} 
      <Gallery />
      <FAQ />
      <Contact facebookUrl={facebookUrl} />
    </div>
  );
}

export default App;

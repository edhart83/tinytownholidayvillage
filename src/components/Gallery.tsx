import { Camera } from 'lucide-react';

const galleryItems = [
  {
    title: 'Tiny Houses Glow',
    image: '/glow.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'The 30-Foot Tree',
    image: '/tree.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Stroll the Lane',
    image: '/stroll.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Family Night',
    image: '/family.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Warm Lights',
    image: '/warm.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Holiday Magic',
    image: '/tiny_town_holiday_party_invitation.jpg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-stone-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <Camera className="w-12 h-12 text-yellow-300 mx-auto" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Photo Moments
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6 rounded-full"></div>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bring your camera—Tiny Town is full of cozy corners and glowing backdrops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-white/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

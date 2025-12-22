import { Heart, Home, TreePine, Train, Lightbulb, Users, MapPin } from 'lucide-react';

export default function About() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=61568678046515";
  const instagramUrl = "https://www.instagram.com/tinytownholidayvillage"; // Add Instagram URL if available

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-stone-950 to-stone-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white font-winter-selfie">
              Where Dreams Begin
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
              A Midwest Tradition Comes to Arizona
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* Opening Story */}
          <div className="mb-16">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Tiny Town didn't start with a blueprint—it started with a memory.
            </p>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Our family moved to Arizona from Chicago, where we grew up visiting "Safety Town," a miniature village where kids pedaled three-wheel bikes through tiny streets, learning the rules of the road and how to cross intersections safely. It was magical. It was purposeful. And Arizona didn't have anything like it.
            </p>
            <p className="text-xl md:text-2xl font-bold text-yellow-300 text-center">
              We wanted to change that.
            </p>
          </div>

          {/* Image Gallery - Early Days */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <img
                key={num}
                src={`/about-images/about-image-${num}.jpg`}
                alt={`Tiny Town development ${num}`}
                className="w-full h-48 object-cover rounded-lg border-2 border-yellow-400/30 hover:border-yellow-400 transition-all"
              />
            ))}
          </div>

          {/* The Spark Section */}
          <div className="mb-16 bg-gradient-to-r from-red-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Lightbulb className="w-10 h-10 text-yellow-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white font-winter-selfie">
                The Spark: A World Record and a Backyard Discovery (2023)
              </h3>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              In 2023, our oldest son had a wild idea: break the world record for the most artificial Christmas trees in a holiday display—about 100 trees. Just for fun.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              So we hit the streets during bulk trash nights in Gilbert and Mesa, rescuing discarded Christmas trees destined for the landfill. After collecting about 20 trees, we arranged them around a small playhouse in our backyard.
            </p>
            <p className="text-xl text-yellow-300 font-semibold italic">
              And something magical happened.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-4">
              The playhouse looked like a cottage in an enchanted forest. We stared at it, and a new vision began to form—what if we built an entire town? <span className="text-yellow-300">(Side Note: We have not broken the record as of yet!)</span>
            </p>
          </div>

          {/* Tiny Town is Born */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <Home className="w-10 h-10 text-green-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white font-winter-selfie">
                Tiny Town is Born: November 2024
              </h3>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              In late 2024, as we collected playhouses for our Safety Town project, our oldest son had another idea: <span className="text-yellow-300 font-semibold">"What if we decorate these houses with Christmas lights?"</span>
            </p>
            <p className="text-xl text-yellow-300 font-bold text-center mb-6">
              That's when Tiny Town was born.
            </p>
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <p className="text-gray-200 leading-relaxed">
                So we went to work. Throughout November 2024, we scoured the area for every little playhouse we could find and designed a layout. We laid out the houses to look like an old west town, but didn't like the dirt. We spaced out the houses differently, thought it would look better with fake black top instead of dirt, played with spacing and fence. The 30ft tree began to shape up. We were still working on spacing, trying to design a forced perspective.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                <img
                  key={num}
                  src={`/about-images/about-image-${num}.jpg`}
                  alt={`Tiny Town build process ${num}`}
                  className="w-full h-40 object-cover rounded-lg border border-yellow-400/20"
                />
              ))}
            </div>
            <p className="text-gray-200 leading-relaxed">
              We did away with the black turf and got a black vinyl tarp instead. Moving blankets were laid down as an underlayment of the tarp to give it a better feel when walking on it. The tarp is looking nice. Miniature street lamp posts arrived. The lighted tree took its first string of lights. Artificial turf has arrived, check to see how much detail it adds to the layout. Adding the street lines for added detail and adding to the illusion of a forced perspective, the road narrows farther away giving it that long road illusion.
            </p>
          </div>

          {/* Grand Opening */}
          <div className="mb-16 bg-gradient-to-br from-green-900/40 to-red-900/40 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8">
            <TreePine className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 font-winter-selfie">
              Grand Opening: December 1st, 2024
            </h3>
            <p className="text-lg text-gray-200 text-center mb-6">
              By December 1st, 2024, Tiny Town opened its gates for the first time with:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-200">
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 text-yellow-400" />
                <span>30 miniature playhouses</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">🛣️</span>
                <span>A "Blacktop" Main Street</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6 text-yellow-400" />
                <span>A two-story centerpiece playhouse</span>
              </div>
              <div className="flex items-center gap-3">
                <TreePine className="w-6 h-6 text-yellow-400" />
                <span>A 30-foot lighted Christmas tree</span>
              </div>
              <div className="flex items-center gap-3 md:col-span-2 justify-center">
                <span className="text-yellow-400">✨</span>
                <span className="text-xl font-bold">80,000 lights</span>
              </div>
            </div>
            <p className="text-xl text-yellow-300 font-semibold text-center mt-6">
              It wasn't just a Christmas display. It was an interactive wonderland where kids could run, play, and explore.
            </p>
          </div>

          {/* Year Two */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-winter-selfie">
              Year Two: Growing Through Storms (2025)
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Arizona summers are brutal. We lost 5 playhouses to monsoon storms because we didn't have indoor storage. But we didn't quit—we adapted.
            </p>
            <p className="text-xl text-yellow-300 font-semibold mb-6">
              For 2025, Tiny Town evolved:
            </p>
            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="text-2xl font-bold text-white mb-4">What We Added:</h4>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>1,000 sq ft of magical waterfront space</strong> - Complete with a crossing bridge, creating an enchanting lakeside village atmosphere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Tiny Town Railroad (TTRR)</strong> - 88 feet of functional track with a 5.5" scale ride-on Santa Fe train, complete with a scaled-down crossing signal that flashes as the train approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>20 more Christmas trees</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Tree upgrade</strong> - Our main light tree grew from 30 feet to 45 feet (with an 80-foot tree planned for the future)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Street signs</strong> - Main St, Big Tree Circle, Wonder Lane, and Trails Avenue were added this year</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Dedicated jingle</strong> - Our own Tiny Town theme song to be found on YouTube</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Lighted entrance sign</strong> displaying the words "Tiny Town" with automatic timer-controlled "Open/Closed" display</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Official website and Instagram</strong> #TinyTownHolidayVillage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Professional photographer</strong> to capture the magic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✅</span>
                  <span><strong>Independent circuits on the tree</strong> for future choreographed light shows</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[15, 16, 17, 18, 19, 20, 21, 22, 23].map((num) => (
                <img
                  key={num}
                  src={`/about-images/about-image-${num}.jpg`}
                  alt={`Tiny Town 2025 ${num}`}
                  className="w-full h-48 object-cover rounded-lg border border-yellow-400/20"
                />
              ))}
            </div>
            <p className="text-gray-200 leading-relaxed">
              We also condensed the layout to half the original footprint, making it more intimate and enchanting. The space used this year was the Christmas Tree forest from 2024. The addition of the waterfront with a crossing bridge transformed Tiny Town into a true village experience—kids love crossing the bridge and exploring both sides of the "lake." The railroad will eventually stretch 1,500 feet with multiple train cars and engines, in years to come.
            </p>
          </div>

          {/* Who We Are */}
          <div className="mb-16 bg-gradient-to-r from-red-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-10 h-10 text-yellow-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white font-winter-selfie">
                Who We Are: A Family Mission
              </h3>
            </div>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Tiny Town is designed, built, and operated by our family—inspired by our two children, ages 5 and 11. Every playhouse, every light, every detail is placed with purpose and care.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              We didn't want another front yard where "Santa Claus threw up." We wanted something:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">Interactive</p>
                <p className="text-gray-200">Kids play hide and seek, tag, and finders keepers</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">Tasteful</p>
                <p className="text-gray-200">No clutter, no inflatable overload—just thoughtful design</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">Professional</p>
                <p className="text-gray-200">Built with a commercial-level approach but kept family-owned</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">Purposeful</p>
                <p className="text-gray-200">Nothing is there just to be there</p>
              </div>
            </div>
            <p className="text-xl text-yellow-300 font-semibold text-center">
              Tiny Town is for kids ages 2 to 11—a place where imagination runs wild and holiday magic feels real.
            </p>
          </div>

          {/* Inspiration */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-winter-selfie">
              Our Inspiration: Standing on the Shoulders of Giants
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              In 2023, we visited the Pratt Brothers Christmas display at Legacy Sports Complex, and it changed everything. Their artistry, scale, and vision showed us what was possible. Though they've since moved to Rawhide in Chandler, from their original location at the legacy sports complex, we still visit for inspiration every year.
            </p>
            <p className="text-xl text-yellow-300 font-semibold text-center mt-6">
              Tiny Town is our way of bringing that same sense of wonder to Mesa—in our own unique way.
            </p>
          </div>

          {/* The Build */}
          <div className="mb-16 bg-white/5 rounded-2xl p-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-winter-selfie">
              The Build: A Labor of Love
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-4">
              Building Tiny Town takes:
            </p>
            <ul className="space-y-2 text-gray-200 mb-6">
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">👷</span>
                <span>A 5-person crew working 8 hours a day</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">📅</span>
                <span>One full month of setup</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">🤝</span>
                <span>Countless volunteers and paid helpers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">💡</span>
                <span>Endless problem-solving (like designing functional crossing signals and independent light circuits)</span>
              </li>
            </ul>
            <p className="text-gray-200 leading-relaxed">
              Every year, we refine the design. We have four major design phases planned, each adding new features and expanding the experience.
            </p>
          </div>

          {/* Future */}
          <div className="mb-16 bg-gradient-to-br from-green-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8">
            <Train className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 font-winter-selfie">
              The Future: Tiny Town 2.0
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed text-center mb-6">
              Our dream is to move Tiny Town to a 2-acre commercial parcel we own on Main and Ellsworth, where we can:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-200 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">👥</span>
                <span>Welcome more visitors</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">🏗️</span>
                <span>Create a permanent, year-round attraction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">🎮</span>
                <span>Add even more interactive elements</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-yellow-400">🚂</span>
                <span>Expand the railroad</span>
              </div>
              <div className="flex items-center gap-3 md:col-span-2 justify-center">
                <span className="text-yellow-400">🏘️</span>
                <span>Build Safety Town as originally envisioned</span>
              </div>
            </div>
            <p className="text-xl text-yellow-300 font-semibold text-center">
              Until then, we're building Tiny Town better every year—one playhouse, one light, one train track at a time.
            </p>
          </div>

          {/* Visit Us */}
          <div className="mb-16 bg-gradient-to-r from-red-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8 text-center">
            <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-winter-selfie">
              Visit Us
            </h3>
            <div className="space-y-4 text-gray-200 text-lg">
              <p>
                <span className="text-yellow-300">📍 Location:</span> Google us "Tiny Town Holiday Village Mesa, AZ"
              </p>
              <p>
                <span className="text-yellow-300">🎄 Grand Opening:</span> Second week of December (follow us on Facebook and Instagram for dates)
              </p>
              <p>
                <span className="text-yellow-300">💰 Admission:</span> FREE—because every family deserves to experience holiday magic
              </p>
              <p>
                <span className="text-yellow-300">👨‍👩‍👧‍👦 Best for:</span> Kids ages 2-11 (and the young at heart!)
              </p>
            </div>
          </div>

          {/* Join the Family */}
          <div className="mb-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-winter-selfie">
              Join the Tiny Town Family
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Follow us on Facebook and Instagram for updates, behind-the-scenes content, and grand opening announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Follow on Facebook
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-br from-red-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-yellow-400/30 p-8 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 font-winter-selfie">
              Tiny Town isn't just a Christmas display—it's a Mesa tradition in the making.
            </p>
            <p className="text-xl text-gray-200 mb-6">
              Welcome to Tiny Town. Where every house tells a story, every light sparks joy, and every visit creates memories that last a lifetime.
            </p>
            <div className="flex items-center justify-center gap-2 text-red-400 text-2xl">
              <Heart className="w-8 h-8 fill-current" />
              <p className="text-xl font-semibold">
                Built with love by a Midwest family who believes the magic of childhood should never grow old.
              </p>
            </div>
          </div>

          {/* Final Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[24, 25, 26, 27, 28, 29].map((num) => (
              <img
                key={num}
                src={`/about-images/about-image-${num}.jpg`}
                alt={`Tiny Town magic ${num}`}
                className="w-full h-48 object-cover rounded-lg border-2 border-yellow-400/30 hover:border-yellow-400 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


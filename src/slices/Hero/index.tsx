"use client";

import { asText, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";
import Scene from "./Scene";
import { Bubbles } from "./Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  // Override texts with custom content
  const customTexts = {
    heading: "Naima & Ognjen",
    subheading: "Social Media & Webentwicklung", 
    body: "... gehen Hand in Hand",
    secondHeading: "Lernt unsere kleine Gemeinschaft kennen",
    secondBody: (
      <>
        Wir wohnen in einer malerischen Waldsiedlung in Stromberg Schindeldorf und glauben daran, dass jede Marke eine Seele hat. Unsere Mission ist es, diese Seele zu finden und sie gesünder und stärker zu machen.
        <br /><br />
        Aber eins nach dem anderen! WIR sind:
        <br />
        <br />
        Naima (Ognjens bessere Hälfte), Ognjen (Naimas, an guten Tagen, bessere Hälfte), Nadine (Naimas Schwester), Brutus (Nadines treuer Begleiter) und - ehemals - Lane (Naimas und Ognjens Sweety). War das zu kompliziert? Dann scrollt weiter... 
        <br />
        <br />
        und stoßt mit uns an!
      </>
    )
  };

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero opacity-0"
    >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
          <Bubbles count={300} speed={2} repeat={true} />
        </View>
      )}

      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text={customTexts.heading}
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-sky-950 lg:text-6xl">
              {customTexts.subheading}
            </div>
            <div className="hero-body text-2xl font-normal text-sky-950">
              {customTexts.body}
            </div>
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          {/* Custom mobile visual element - Creative Team Showcase */}
          <div className="w-full md:hidden mb-8 px-4">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-orange-600 mb-2">Das OG-Ima Team</h3>
              <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {/* Ognjen Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-orange-600 transform hover:scale-105 transition-transform">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">👨‍💻</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">Ognjen</h4>
                      <p className="text-sm text-orange-600 font-semibold mb-2">Web- & Softwareentwickler</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Baut außergewöhnliche digitale Erlebnisse; liebt KI, Automation und kreative Lösungen.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">React</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Next.js</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">TypeScript</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">... und viele mehr</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Naima Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-purple-600 transform hover:scale-105 transition-transform">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">📱</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">Naima</h4>
                      <p className="text-sm text-purple-600 font-semibold mb-2">Social Media Managerin</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Frisch ausgebildet und voller Energie; versteht Trends und liebt authentische Inhalte.</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Instagram</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Content</span>
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Community</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nadine Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-green-600 transform hover:scale-105 transition-transform">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🎨</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">Nadine</h4>
                      <p className="text-sm text-green-600 font-semibold mb-2">Kreative Unterstützung</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Naimas Schwester; bringt frische Perspektiven und kreative Ideen mit.</p>
                      <div className="mt-3">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">✨ Gratis dabei!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brutus Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-l-4 border-pink-600 transform hover:scale-105 transition-transform">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">🐕</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">Brutus</h4>
                      <p className="text-sm text-pink-600 font-semibold mb-2">Chief Happiness Officer</p>
                      <p className="text-sm text-gray-600 leading-relaxed">Nadines treuer Begleiter; sorgt für gute Stimmung und regelmäßige Pausen.</p>
                      <div className="mt-3">
                        <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded-full font-medium">🦴 Auch gratis!</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lane Card */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden border-l-4 border-gray-400 transform hover:scale-105 transition-transform">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl flex-shrink-0">💫</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-700">Lane ♡</h4>
                      <p className="text-sm text-gray-600 font-semibold mb-2">Für immer in unseren Herzen</p>
                      <p className="text-sm text-gray-500 leading-relaxed italic">Unvergesslich; war Teil dieser Familie und wird es immer bleiben.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-sky-950 lg:text-8xl">
              <TextSplitter text={customTexts.secondHeading} />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-sky-950">
              {customTexts.secondBody}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;

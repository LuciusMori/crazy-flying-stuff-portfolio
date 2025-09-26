"use client";

import { Bounded } from "@/components/Bounded";
import { asText, Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

/**
 * Props for `AlternatingText`.
 */
export type AlternatingTextProps =
  SliceComponentProps<Content.AlternatingTextSlice>;

/**
 * Component for "AlternatingText" Slices.
 */
const AlternatingText = ({ slice }: AlternatingTextProps): JSX.Element => {
  // Override with custom content
  const customTextGroup = [
    {
      heading: "Wau! Wuff!",
      body: "Immer dieser Hund! Ständig ergreift er das Wort! Der Ognjen hier: Wir, Naima & ich, bewerben uns bei euch, weil ihr uns begeistert habt. Eure Website, die Projekte, eure Art, der Buchclub... Wir sind echte Fans und möchten von euch lernen."
    },
    {
      heading: "Wir sind keine Profis...",
      body: "Aber wir arbeiten permanent an uns und erweitern gerne unseren Horizont. Lebenslanges Lernen ist unser Motto und wir glauben an Gemeinschaft."
    },
    {
      heading: "Menschlich scheinen wir ebenfalls zueinander zu passen:",
      body: "Wir sind aufrichtig, humorvoll, begeisterungsfähig & leidenschaftlich, wir verbringen eine (zugegeben ungesund) hohe Anzahl Stunden auf diversen Social-Media-Plattformen... und wir lieben Bücher!"
    }
  ];

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="alternating-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {customTextGroup.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30",
                )}
              >
                <h2 className="text-balance text-6xl font-bold">
                  {item.heading}
                </h2>
                <div className="mt-4 text-xl">
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832]"
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <h2 className="grid w-full max-w-6xl gap-[2vw] text-center font-black leading-[.8]">
          <div className="text-[20vw] md:text-[12vw] lg:text-[10vw]">WE&apos;RE</div>
          <div className="grid gap-[1vw] text-[14vw] md:flex md:text-[8vw] lg:text-[6vw] md:justify-center text-green-700">
            <span className="inline-block">how </span>
            <span className="inline-block">&apos;bout </span>
            <span className="inline-block">you? </span>
          </div>
          <div className="text-[18vw] md:text-[11vw] lg:text-[9vw]">DIFFERENT!</div>
        </h2>
      </div>
    </section>
  );
};

export default BigText;

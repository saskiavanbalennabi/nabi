import { cx } from "class-variance-authority";
import { getSectionInnerContainerClassNames } from "../utils";
import { useInitGeneralAnimationIntersectionObserver } from "./utils/hooks";
import { generalAnimationIntersectionObserverCB } from "./utils";
import CustomNextImage from "../shared/common/CustomNextImage";
import GenericHeroSection from "./components/GenericHeroSection";
import GenericAboveFooterSliderSection from "./components/GenericAboveFooterSliderSection";

import animationClasses from "~/styles/animation.module.css";

function AboutProductButton(props: { className?: string }) {
  return (
    <div
      className={cx(
        "bg-stone-500 p-3 text-base font-semibold uppercase leading-none tracking-wide text-white",
        props.className,
      )}
    >
      About Product
    </div>
  );
}

const intersectionObserverOptions: IntersectionObserverInit = {
  threshold: 0,
};

export default function CollectionScreen() {
  useInitGeneralAnimationIntersectionObserver(
    generalAnimationIntersectionObserverCB,
    intersectionObserverOptions,
  );

  return (
    <>
      <GenericHeroSection headerText="collections" />
      <section className="bg-special-primary-200 font-medium leading-loose text-gray-800">
        <div
          className={cx(
            getSectionInnerContainerClassNames(),
            "flex flex-col gap-8 sm:gap-12",
            "py-12",
            "px-8 sm:px-16 md:px-20 xl:px-36",
          )}
        >
          <div className={cx("flex gap-6 md:justify-start md:gap-16")}>
            {[
              {
                image: {
                  src: "/images/d6bbcebc00531220f00ff5a40a6af1ad.jpg",
                  altText: "",
                  width: 495,
                  height: 675,
                },
                title: "rompers",
                price: "€450",
              },
              {
                image: {
                  src: "/images/c526acafcc73a8ac425680a2e7b404f9.jpg",
                  altText: "",
                  width: 495,
                  height: 675,
                },
                title: "onesies",
                price: "€180",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={cx(
                  "flex flex-col gap-4",
                  "text-sm sm:text-xl",
                  "opacity-0",
                  "transition-all duration-1000",
                )}
                style={{
                  transitionDuration: "0.75s",
                  transitionDelay: `${(index + 1) * 0.15}s`,
                }}
                data-intersection-observer-element
                data-intersection-observer-on-intersect-remove="opacity-0"
                data-intersection-observer-unobserve-after-intersect
              >
                <CustomNextImage
                  src={item.image.src}
                  alt={item.image.altText}
                  width={item.image.width}
                  height={item.image.height}
                  className={cx(
                    "flex-grow object-cover",
                    "sm:h-[28rem] md:h-[32rem] lg:h-[36rem]",
                  )}
                />
                <p className="capitalize">{item.title}</p>
                <small className="-mt-2">{item.price}</small>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="intersect-show-up-container flex flex-wrap overflow-hidden md:flex-nowrap">
              <CustomNextImage
                src="/images/d0b95d5a13d371f41e106dfbfd9de762.jpg"
                alt=""
                width={700}
                height={450}
                className={cx(
                  "aspect-video flex-grow object-cover sm:w-2/5",
                  "sm:h-[28rem] md:h-[32rem] lg:h-[36rem]",
                  "opacity-0",
                  "transition-all duration-700",
                )}
                data-intersection-observer-element
                data-intersection-observer-on-intersect-remove="opacity-0"
                data-intersection-observer-unobserve-after-intersect
              />
              <div
                className={cx(
                  "flex flex-grow flex-col items-start justify-center gap-4 bg-special-primary-100 p-8 md:gap-8 lg:gap-16",
                  "text-sm sm:text-xl",
                )}
              >
                <AboutProductButton className="hidden sm:block" />
                <p
                  className={cx(
                    "font-medium text-gray-800",
                    "leading-relaxed md:leading-10",
                    animationClasses["intersect-show-up"],
                  )}
                  data-intersection-observer-element
                  data-intersection-observer-on-intersect-add={
                    animationClasses.animate
                  }
                  data-intersection-observer-unobserve-after-intersect
                >
                  Silk has an incredibly soft, smooth, and light <br />
                  texture that feels wonderful against your baby&apos;s skin.
                  <br /> It is also naturally hypoallergenic.
                </p>
                <AboutProductButton className="sm:hidden" />
              </div>
            </div>
            <div className="intersect-show-up-container flex flex-col gap-4 text-sm sm:text-xl">
              <p
                className={cx(
                  "capitalize",
                  "text-sm sm:text-xl",
                  animationClasses["intersect-show-up"],
                )}
                data-intersection-observer-element
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                data-intersection-observer-unobserve-after-intersect
              >
                full collection
              </p>
              <small
                className={cx("-mt-2", animationClasses["intersect-show-up"])}
                data-intersection-observer-element
                data-intersection-observer-on-intersect-add={
                  animationClasses.animate
                }
                data-intersection-observer-unobserve-after-intersect
              >
                €600
              </small>
            </div>
          </div>
        </div>
      </section>
      <GenericAboveFooterSliderSection />
    </>
  );
}

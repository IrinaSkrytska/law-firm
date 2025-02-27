import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./ItemCarouselButtons";
import { DotButton, useDotButton } from "../Carousel/EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import css from "./Carousel.module.css";
import Image from "next/image";
import Quotes from "../../images/Quotes.svg";

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={css.embla}>
      <div className={css.embla__viewport} ref={emblaRef}>
        <div className={css.embla__container}>
          {slides.map((slide) => (
            <div
              key={slide._id}
              className={`${css.reviewThumb} ${css.embla__slide}`}
            >
              <div className={css.reviewTextThumb}>
                <div className={css.quotesThumb}>
                  <Image
                    className={css.quotesIcon}
                    width={40}
                    height={40}
                    src={Quotes}
                  />
                  <div className={css.line}></div>
                </div>
                <div>
                  <p className={css.reviewText}>
                    "Професійний підхід та високий рівень обслуговування!
                    Завдяки команді юристів ми швидко вирішили складне юридичне
                    питання. Вдячні за підтримку та чіткість у роботі."
                  </p>
                  <p className={css.reviewName}>Харченко Борис</p>
                  <p className={css.reviewRole}>Власник кав’ярні Coffee Room</p>
                </div>
              </div>
              <Image
                width={306}
                height={248}
                className={css.reviewImage}
                src={slide.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={css.embla__controls}>
        {/* <div className={css.embla__buttons}> */}
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className={css.embla__dots}>
          {slides.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={
                index === selectedIndex
                  ? css.embla__dot__selected
                  : css.embla__dot
              }
            />
          ))}
          {/* </div> */}
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

"use client";
import React, {useEffect} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.embla__slide}>Slide 2</div>
        <div className={styles.embla__slide}>Slide 3</div>
      </div>
    </div>
  );
}

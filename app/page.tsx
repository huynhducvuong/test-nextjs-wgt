import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className ={styles.page + " " + styles.main}>
      <div className={styles.mask_group}>
        <div className={styles.mask_group_title}>
          Lorem ullamco 
        </div>
        <div className={styles.mask_group_images}>
          <Image
            className={styles.mask_group_image_1}
            src="./assets/images/Mask_group_1.png"
            alt="Next.js logo"
            width={380}
            height={618}
            priority
          />
          <Image
            className={styles.mask_group_image_2}
            src="./assets/images/Mask_group_2.png"
            alt="Next.js logo"
            width={380}
            height={618}
            priority
          />
        </div>
        <div className={styles.mask_group_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur eiusmod consectetur proident Lorem reprehenderit esse do anim velit in aliquip dolore ut officia. Consectetur reprehenderit proident do exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse mollit incididunt quis amet. Qui non irure incididunt laborum nisi cillum consequat aliquip aliquip cillum in. Ut excepteur labore voluptate tempor cupidatat dolor eiusmod do ipsum Lorem cupidatat do labore.
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim elit minim commodo qui culpa cillum duis fugiat consequat pariatur.
        </div>
      </div>
      <div className={styles.frame_hero_group}>
        <div className={styles.hero_group_images}>
          <Image
            className={styles.logo}
            src="./assets/images/Hero1.png"
            alt="Next.js logo"
            width={684}
            height={800}
            priority
          />
          <Image
            className={styles.frame_hero_image_2}
            src="./assets/images/Hero2.png"
            alt="Next.js logo"
            width={684}
            height={800}
            priority
          />
        </div>
      </div>
      <div className={styles.frame_hero_group}>
        <div className={styles.hero_group_images}>
          <Image
            className={styles.logo}
            src="./assets/images/Hero3.png"
            alt="Next.js logo"
            width={684}
            height={800}
            priority
          />
          <Image
            className={styles.frame_hero_image_2}
            src="./assets/images/Hero4.png"
            alt="Next.js logo"
            width={684}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
}
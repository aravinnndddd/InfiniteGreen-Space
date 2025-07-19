import React, { useEffect, useState } from "react";
import styles from "./plantcard.module.css";

type Product = { title: string; image: string };

const products: Product[] = [
  { title: "", image: "./images/indoor_1.jpeg" },
  { title: "", image: "./images/indoor_2.jpeg" },
  { title: "", image: "./images/indoor_3.jpeg" },
  { title: "", image: "./images/indoor_4.jpeg" },
  { title: "", image: "./images/indoor_5.jpeg" },
  { title: "", image: "./images/indoor_6.jpeg" },
  { title: "", image: "./images/small_1.jpeg" },
  { title: "", image: "./images/small_2.jpeg" },
  { title: "", image: "./images/small_3.jpeg" },
  { title: "", image: "./images/small_4.jpeg" },
];

const PlantCard: React.FC = () => {
  const getItemsPerPage = () => {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 1024) return 3;
    return 5;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(id);
  }, [itemsPerPage]);

  const visibleItems = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (startIndex + i) % products.length;
    return products[index];
  });

  return (
    <section id="products" className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Our Plants</h2>

        <div className={styles.carouselTrack}>
          {visibleItems.map((p, i) => (
            <div key={i} className={styles.card}>
              <img
                src={p.image}
                alt={p.title}
                className={styles.cardImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCard;

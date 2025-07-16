import React, { useEffect, useState } from "react";

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
  // determine items per page based on screen width
  const getItemsPerPage = () => {
    const w = window.innerWidth;
    if (w < 640) return 1; // <sm
    if (w < 1024) return 3; // sm–lg
    return 5; // lg+
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [startIndex, setStartIndex] = useState(0);

  // update itemsPerPage on resize
  useEffect(() => {
    const handler = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // auto‑advance every 3 s
  useEffect(() => {
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerPage) % products.length);
    }, 3000);
    return () => clearInterval(id);
  }, [itemsPerPage]);

  // figure out which products to show
  const visibleItems = products
    .slice(startIndex, startIndex + itemsPerPage)
    .concat(
      products.slice(
        0,
        Math.max(0, startIndex + itemsPerPage - products.length)
      )
    );

  return (
    <section id="products" className="w-full py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center font-playfair text-emerald-800">
          Our Plants
        </h2>

        <div className="flex gap-4 transition-all duration-700 ease-in-out">
          {visibleItems.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full sm:w-1/3 lg:w-1/5 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full md:h-[60vh] h-[200px] object-cover"
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

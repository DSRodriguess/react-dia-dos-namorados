import { useState, useEffect } from "react";
import "./ImageSlider.css";

const images = [
  "/Sem título1.jpeg",
  "/Sem título2.jpeg",
  "/Sem título3.jpeg",
  "/Sem título4.jpeg",
  "/Sem título5.jpeg",
  "/Sem título6.jpeg",
  "/Sem título7.jpeg",
  "/Sem título8.jpeg",
  "/Sem título9.jpeg",
  "/Sem título10.jpeg"
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`slide ${i === index ? "active" : ""}`}
          alt={`Foto ${i + 1}`}
        />
      ))}
    </div>
  );
}

import { useEffect, useState } from 'react';
import './App.css';

const FadingImage = ({ src }: { src: string }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const randomDelay = Math.random() * -5;
    const randomDuration = 3 + Math.random() * 4;

    setStyle({
      animationDelay: `${randomDelay}s`,
      animationDuration: `${randomDuration}s`,
    });
  }, []);

  return (
    <img
      src={src}
      className="smooth-fade-img"
      style={style}
    />
  );
};

export default FadingImage;

import { useState, useRef, useEffect, memo } from "react";
import styles from "./LazyImage.module.css";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

const LazyImage = memo(function LazyImage({
  src,
  alt,
  className = "",
  placeholder
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div
      ref={imgRef}
      className={`${styles.container} ${className}`}
    >
      {!isInView && (
        <div className={styles.placeholder}>
          {placeholder || <div className={styles.shimmer} />}
        </div>
      )}

      {isInView && !isError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
          loading="lazy"
        />
      )}

      {isError && (
        <div className={styles.error}>
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
});

export default LazyImage;
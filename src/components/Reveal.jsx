import React, { useEffect, useRef, useState } from "react";

// Wraps children and fades/slides them into view the first time they cross into the viewport.
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div", style = {} }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 ease-out ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

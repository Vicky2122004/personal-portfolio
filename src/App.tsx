import React, { useEffect, useRef, useState } from "react";
import { HeroPage } from "./pages/HeroPage";
import { gsap } from "gsap";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
export const App: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const [cursorColor, setCursorColor] = useState("#fff");

  useEffect(() => {
    if (cursorRef.current && cursorFollowerRef.current) {
      const cursor = cursorRef.current;
      const follower = cursorFollowerRef.current;
      let idleInterval: NodeJS.Timeout | null = null;
      let lastMouseMoveTime = Date.now();

      gsap.set([cursor, follower], { opacity: 1 });

      const moveCursor = (e: MouseEvent) => {
        lastMouseMoveTime = Date.now();
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });

        gsap.to(follower, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power3.out",
        });

        createParticles(e.clientX, e.clientY, cursorColor, 6);
      };

      const handleHover = (e: Event) => {
        const target = e.target as HTMLElement;
        const newColor = target.dataset.cursorColor || "cyan";

        gsap.to(cursor, {
          scale: 0.4,
          duration: 0.3,
          backgroundColor: newColor,
        });
        gsap.to(follower, {
          scale: 1.8,
          duration: 0.3,
          borderColor: newColor,
          rotate: 360,
        });
      };

      const handleUnhover = () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, backgroundColor: "white" });
        gsap.to(follower, {
          scale: 1,
          duration: 0.3,
          borderColor: "white",
          rotate: 0,
        });
      };

      const handleScroll = () => {
        const y = window.scrollY;
        if (y < 500) setCursorColor("white");
        else if (y < 1000) setCursorColor("#ff4d4d");
        else setCursorColor("#66ff99");
      };

      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("scroll", handleScroll);

      const hoverElements = document.querySelectorAll(
        "a, button, .project-card, .tech-item, .social-link"
      );
      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });

      // Idle particle effect (Particles appear even when not moving)
      idleInterval = setInterval(() => {
        if (Date.now() - lastMouseMoveTime > 500) {
          const cursorX =
            parseFloat(
              cursor.style.transform.split(",")[0]?.replace("translateX(", "")
            ) || window.innerWidth / 2;
          const cursorY =
            parseFloat(
              cursor.style.transform.split(",")[1]?.replace("translateY(", "")
            ) || window.innerHeight / 2;
          createParticles(cursorX, cursorY, cursorColor, 3, true);
        }
      }, 300);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
        window.removeEventListener("scroll", handleScroll);
        if (idleInterval) clearInterval(idleInterval);
        hoverElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleHover);
          el.removeEventListener("mouseleave", handleUnhover);
        });
      };
    }
  }, [cursorColor]);

  const createParticles = (
    x: number,
    y: number,
    color: string,
    size: number,
    idle: boolean = false
  ) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);

    gsap.set(particle, {
      position: "fixed",
      left: x + (idle ? (Math.random() - 0.5) * 10 : 0),
      top: y + (idle ? (Math.random() - 0.5) * 10 : 0),
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      opacity: 1,
      pointerEvents: "none",
    });

    gsap.to(particle, {
      x: (Math.random() - 0.5) * (idle ? 30 : 100),
      y: (Math.random() - 0.5) * (idle ? 30 : 100),
      scale: 0,
      opacity: 0,
      duration: idle ? 1.5 : 0.8,
      ease: "power2.out",
      onComplete: () => {
        particle.remove();
      },
    });
  };

  return (
    <>
      {/* <div
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[1000] opacity-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference shadow-[0_0_8px_#00ffff]"
        style={{ backgroundColor: cursorColor }}
      ></div>
      <div
        ref={cursorFollowerRef}
        className="fixed w-8 h-8 rounded-full border-2 pointer-events-none z-[1000] opacity-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference shadow-[0_0_20px_#00ffff]"
        style={{ borderColor: cursorColor }}
      ></div> */}
      <HeroPage />
    </>
  );
};

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationsManager() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial text reveal animation
    gsap.from(".reveal-text", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
      delay: 0.1,
    });

    // 3D Core scroll-based rotation
    gsap.to(".sector-video-card", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    // Service Cards Animation - Stagger from bottom
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: "#sectors",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Methodology Cards with Scale — reveal once and keep visible
    gsap.from("#methodology .service-card", {
      scrollTrigger: {
        trigger: "#methodology",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.9,
      stagger: 0.2,
      ease: "back.out(1.2)",
    });

    // Project Rows - Slide from left
    gsap.from(".project-row", {
      scrollTrigger: {
        trigger: "#resources",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Footer animation
    gsap.from("footer h2", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from("footer .grid > div", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    // Lazy-load sector videos and play/pause when in view
    const vids = document.querySelectorAll(".sector-video");
    if (!vids || vids.length === 0) return;

    const loadVideo = (video: Element) => {
      const videoElement = video as HTMLVideoElement;
      if (videoElement.dataset.loaded) return;
      const src = videoElement.dataset.src;
      if (!src) return;

      const source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      videoElement.appendChild(source);
      try {
        videoElement.load();
      } catch (e) {}
      videoElement.dataset.loaded = "true";
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement;
          const card = v.closest(".sector-video-card");
          if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
            loadVideo(v);
            v.muted = true;
            v.setAttribute("playsinline", "");
            const p = v.play();
            if (p && typeof p.then === "function") {
              p.then(() => {
                if (card) card.classList.add("is-playing");
              }).catch(() => {});
            } else {
              if (card) card.classList.add("is-playing");
            }
          } else {
            try {
              v.pause();
            } catch (e) {}
            if (card) card.classList.remove("is-playing");
          }
        });
      },
      { threshold: [0.45] }
    );

    vids.forEach((v) => obs.observe(v));

    // Pause all when tab hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        vids.forEach((v) => {
          try {
            (v as HTMLVideoElement).pause();
          } catch (e) {}
        });
      } else {
        vids.forEach((v) => {
          const videoElement = v as HTMLVideoElement;
          const rect = v.getBoundingClientRect();
          const inView = rect.top < window.innerHeight && rect.bottom > 0;
          if (inView && videoElement.dataset.loaded) {
            videoElement.play().catch(() => {});
          }
        });
      }
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  return null;
}

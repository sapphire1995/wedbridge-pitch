"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const DISMISSAL_KEY = "wedbridge-swipe-hint-dismissed-v3";
const FRAME_COUNT = 4;

function getInteractionLabel() {
  return window.matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0
    ? "Swipe to advance"
    : "Drag or Scroll";
}

function hasBeenDismissed() {
  try {
    return window.localStorage.getItem(DISMISSAL_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.localStorage.setItem(DISMISSAL_KEY, "true");
  } catch {
    // The hint remains functional when storage is unavailable.
  }
}

export function SwipeHint() {
  const [frame, setFrame] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [instruction, setInstruction] = useState("Drag or Scroll");

  useEffect(() => {
    if (hasBeenDismissed()) {
      const hideHint = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(hideHint);
    }

    const revealHint = window.requestAnimationFrame(() => {
      setInstruction(getInteractionLabel());
    });

    const updateInstruction = () => setInstruction(getInteractionLabel());
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    mediaQuery.addEventListener("change", updateInstruction);
    window.addEventListener("resize", updateInstruction, { passive: true });

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section[data-frame]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setFrame(Number((visibleSection.target as HTMLElement).dataset.frame));
        }
      },
      { threshold: [0.45, 0.55] },
    );

    sections.forEach((section) => observer.observe(section));

    const dismiss = () => {
      rememberDismissal();
      setIsVisible(false);
    };

    window.addEventListener("scroll", dismiss, { once: true, passive: true });
    window.addEventListener("wheel", dismiss, { once: true, passive: true });
    window.addEventListener("touchstart", dismiss, { once: true, passive: true });
    window.addEventListener("pointerdown", dismiss, { once: true, passive: true });

    return () => {
      mediaQuery.removeEventListener("change", updateInstruction);
      window.removeEventListener("resize", updateInstruction);
      window.cancelAnimationFrame(revealHint);
      observer.disconnect();
      window.removeEventListener("scroll", dismiss);
      window.removeEventListener("wheel", dismiss);
      window.removeEventListener("touchstart", dismiss);
      window.removeEventListener("pointerdown", dismiss);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label={`Frame ${String(frame).padStart(2, "0")} of ${FRAME_COUNT}. ${instruction}.`}
          className="pointer-events-none fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 flex-col items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c9a227]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3.6, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
        >
          <span aria-hidden="true" className="flex items-center gap-1 text-xs leading-none">
            <motion.span animate={{ x: [-3, 0, -3] }} transition={{ duration: 1.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}>
              ◄
            </motion.span>
            <span className="font-light tracking-[-0.08em]">────────────</span>
            <motion.span animate={{ x: [3, 0, 3] }} transition={{ duration: 1.5, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}>
              ►
            </motion.span>
          </span>
          <span>FRAME {String(frame).padStart(2, "0")} / 04</span>
          <span className="text-[9px] tracking-[0.12em] text-[#f5f0e6]">{instruction}</span>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

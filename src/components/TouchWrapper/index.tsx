import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTouchContext } from "@/context/TouchContextProvider";
import styles from "./styles.module.scss";

const scrollablePages = ["/about"];
const pageIsScrollable = (page: string) => scrollablePages.indexOf(page) >= 0;

const TouchWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { warning, setWarning, setShowWarning } = useTouchContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [triggered, setTriggered] = useState(false);

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    const { pageX, pageY } = event.touches[0];
    setTouchStart({ x: pageX, y: pageY });
    setTriggered(false);
  };

  const onTouchMove: React.TouchEventHandler<HTMLElement> = (event) => {
    if (router.asPath === "/about") {
      return;
    }
    const { pageX, pageY } = event.touches[0];
    const { x, y } = touchStart;
    if (!x || !y) {
      setTouchStart({ x: pageX, y: pageY });
      return;
    }
    const delta = Math.abs(x - pageX) + Math.abs(y - pageY);
    if (delta > 20 && !triggered) {
      setTriggered(true);
      setWarning(warning + 1);
      setShowWarning(true);
    }
  };

  const preventScroll = (event: TouchEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!pageIsScrollable(router.asPath)) {
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [router.asPath]);

  return (
    <div
      className={styles.Container}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default TouchWrapper;

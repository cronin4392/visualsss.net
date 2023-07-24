import React, { useState, useRef, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { useWindowSize } from "usehooks-ts";
import { useTouchContext } from "@/context/TouchContextProvider";
import styles from "./styles.module.scss";

// Disable swiping on the homepage and video page
const disableSwiping = (router: NextRouter) =>
  ["/", "/video"].includes(router.asPath);

const TouchWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { warning, setWarning, setShowWarning } = useTouchContext();
  const [touchStart, setTouchStart] = useState<{
    x: number | null;
    y: number | null;
  }>({ x: null, y: null });
  const [triggered, setTriggered] = useState(false);
  const { height } = useWindowSize();
  const heightStyles = {
    "--window-height": height > 0 ? `${height}px` : null,
  } as React.CSSProperties;

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    if (!disableSwiping(router)) {
      return;
    }
    const { pageX, pageY } = event.touches[0];
    setTouchStart({ x: pageX, y: pageY });
    setTriggered(false);
  };

  const onTouchMove: React.TouchEventHandler<HTMLElement> = (event) => {
    if (!disableSwiping(router)) {
      return;
    }

    // event.preventDefault();
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

  const onTouchEnd = () => {
    if (!disableSwiping(router)) {
      return;
    }
    setTouchStart({ x: null, y: null });
  };

  return (
    <div
      className={styles.Container}
      ref={containerRef}
      data-disable-swiping={disableSwiping(router)}
      style={heightStyles}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
};

export default TouchWrapper;

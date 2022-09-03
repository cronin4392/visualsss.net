import React, { useRef, useState } from "react";
import { useTouchContext } from "@/context/TouchContextProvider";
import styles from "./styles.module.scss";

const TouchWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

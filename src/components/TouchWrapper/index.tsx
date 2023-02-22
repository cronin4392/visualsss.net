import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTouchContext } from "@/context/TouchContextProvider";
import styles from "./styles.module.scss";

const TouchWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { warning, setWarning, setShowWarning } = useTouchContext();
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
    if (!["/"].includes(router.asPath)) {
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

  return (
    <div
      className={styles.Container}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {children}
    </div>
  );
};

export default TouchWrapper;

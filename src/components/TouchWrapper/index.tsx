import React, { useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { useTouchContext } from "@/context/TouchContextProvider";
import { useWindowSize } from "usehooks-ts";
import styles from "./styles.module.scss";

const disableTouch = (router: NextRouter) => {
  return !["/"].includes(router.asPath);
};

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
  const { height } = useWindowSize();
  const heightStyles = {
    "--window-height": height > 0 ? `${height}px` : null,
  } as React.CSSProperties;

  const onTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    const { pageX, pageY } = event.touches[0];
    setTouchStart({ x: pageX, y: pageY });
    setTriggered(false);
  };

  const onTouchMove: React.TouchEventHandler<HTMLElement> = (event) => {
    if (disableTouch(router)) {
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

  if (disableTouch(router)) {
    return (
      <div className={styles.Container} style={heightStyles}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={styles.Container}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={heightStyles}
    >
      {children}
    </div>
  );
};

export default TouchWrapper;

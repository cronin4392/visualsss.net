import { useEffect, useState } from "react";
import LinkWrapper from "@/components/LinkWrapper";
import { useSssState } from "@/context/SssContextProvider";
import styles from "./styles.module.scss";

type SecretOverlayProps = {};

const SecretOverlay: React.FC<SecretOverlayProps> = () => {
  const { sClicks, setSClicks, sss } = useSssState();
  const [sssLink, setSssLink] = useState<string | null>(null);

  useEffect(() => {
    if (sss) {
      const sssecret = "s".repeat(sClicks);
      fetch("/api/sss", {
        method: "POST",
        body: JSON.stringify({ sssecret }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(async (response) => {
        const data = await response.json();
        if (data.redirect) {
          setSssLink(data.redirect);
        }
      });
    }
    setSClicks(0);
  }, [setSClicks, sClicks, sss]);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Header}>░░░ SYSTEM MALFUNCTION ░░░</h1>
      <p className={styles.Text}>
        ● We have detected an {"&#83;&#83;&#83;"} system error code. ● If this
        was activated unintentionally please reformat your computer and
        disconnect from the main frame. ● If activated intentionally please
        proceed with the process and we thank you for your service.
      </p>
      <div className={styles.Buttons}>
        <LinkWrapper href="/" linkProps={{ className: styles.Button }}>
          <span className="all-caps-adjust">⬱ Abort</span>
        </LinkWrapper>
        {sssLink ? (
          <LinkWrapper href={sssLink} linkProps={{ className: styles.Button }}>
            <span className="all-caps-adjust">Proceed ⇶</span>
          </LinkWrapper>
        ) : (
          <div className={styles.Button}>
            <span className="all-caps-adjust">Validating...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecretOverlay;

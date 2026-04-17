import React, { useState, useEffect } from "react";

const COOKIE_KEY = "user_cookie_consent";

type Consent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: Consent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      const parsed = JSON.parse(saved);
      setConsent(parsed);
      applyConsent(parsed);
    }
  }, []);

  const applyConsent = (consent: Consent) => {
    // 👉 ΕΔΩ βάζεις scripts conditionally

    if (consent.analytics) {
      console.log("Load analytics scripts");
      // load Google Analytics εδώ
    }

    if (consent.marketing) {
      console.log("Load marketing scripts");
      // load Facebook Pixel κλπ
    }
  };

  const saveConsent = (newConsent: Consent) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(newConsent));
    setConsent(newConsent);
    applyConsent(newConsent);
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {!showSettings ? (
          <>
            <h3>Cookies</h3>
            <p>
              Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σου.
            </p>

            <div style={styles.buttons}>
              <button style={styles.accept} onClick={acceptAll}>
                Αποδοχή όλων
              </button>
              <button style={styles.decline} onClick={rejectAll}>
                Απόρριψη
              </button>
              <button style={styles.settings} onClick={() => setShowSettings(true)}>
                Ρυθμίσεις
              </button>
            </div>

            <a href="/cookie-policy">Μάθε περισσότερα</a>
          </>
        ) : (
          <>
            <h3>Ρυθμίσεις Cookies</h3>

            <div style={styles.option}>
              <label>
                <input type="checkbox" checked disabled />
                Αναγκαία cookies
              </label>
            </div>

            <div style={styles.option}>
              <label>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                />
                Analytics
              </label>
            </div>

            <div style={styles.option}>
              <label>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent({ ...consent, marketing: e.target.checked })
                  }
                />
                Marketing
              </label>
            </div>

            <div style={styles.buttons}>
              <button
                style={styles.accept}
                onClick={() => saveConsent(consent)}
              >
                Αποθήκευση
              </button>
              <button
                style={styles.decline}
                onClick={() => setShowSettings(false)}
              >
                Πίσω
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    zIndex: 9999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    margin: "10px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  accept: {
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  decline: {
    background: "#ccc",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  settings: {
    background: "#2196F3",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  option: {
    margin: "10px 0",
    textAlign: "left",
  },
};

export default CookieConsent;

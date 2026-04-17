import React, { useState, useEffect } from "react";

const COOKIE_KEY = "user_cookie_consent";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <p style={styles.text}>
          Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σου.
        </p>
        <div style={styles.buttons}>
          <button style={styles.accept} onClick={acceptCookies}>
            Αποδοχή
          </button>
          <button style={styles.decline} onClick={declineCookies}>
            Απόρριψη
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    zIndex: 9999,
  },
  box: {
    background: "#fff",
    padding: "20px",
    margin: "10px",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  text: {
    marginBottom: "15px",
    fontSize: "14px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
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
};

export default CookieConsent;

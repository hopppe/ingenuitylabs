import { useEffect } from "react";

const KingdomArabicDownload = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "https://apps.apple.com/us/app/kingdom-arabic/id6755405579";
      return;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.ingenuitylabs.LearnArabic";
      return;
    }

    // Mac users go to App Store
    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/us/app/kingdom-arabic/id6755405579";
      return;
    }

    // For other desktop users, redirect to the main Kingdom Arabic page
    window.location.href = "/kingdom-arabic";
  }, []);

  // Show a brief loading state while redirecting
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #2d1b4e 0%, #1a0f2e 100%)",
      color: "#f1c40f",
      fontSize: "1.2rem",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      Redirecting to app store...
    </div>
  );
};

export default KingdomArabicDownload;

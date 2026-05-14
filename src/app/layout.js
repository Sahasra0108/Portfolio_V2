import "./globals.css";
import "../App.css";
import Script from "next/script";

export const metadata = {
  title: 'Sachini Sahasra',
  description: 'Full Stack Developer Portfolio',
   icons: {
    icon: "/me.png",  
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
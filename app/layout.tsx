import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        <footer style={{ padding: "1.5rem 1rem", textAlign: "center", opacity: 0.8 }}>
          <Link href="/privacy">Privacy Policy</Link>
        </footer>
      </body>
    </html>
  );
}

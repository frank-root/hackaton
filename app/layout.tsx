import type { Metadata } from "next";
import "./globals.css";
import { event } from "@/content/event";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// No webfonts — Verdana, Trebuchet MS, and Courier New ship with the OS,
// exactly like a 2005 site would have it.

export const metadata: Metadata = {
  title: {
    default: `${event.name} — Recap`,
    template: `%s — ${event.name}`,
  },
  description: event.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        {/* The era's centered fixed-width "800x600 friendly" column */}
        <div className="mx-auto flex min-h-screen max-w-[900px] flex-col border-x-2 border-navy bg-panel shadow-[4px_0_8px_rgba(0,0,0,0.3)] print:max-w-none print:border-0 print:bg-white print:shadow-none">
          <Header />
          <main className="flex-1 px-4 py-4 print:p-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

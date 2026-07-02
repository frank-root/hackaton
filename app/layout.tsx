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
        {/* Still a centered column like 2005, but a floating rounded card now */}
        <div className="mx-auto my-6 flex min-h-[calc(100vh-3rem)] w-[min(100%-2rem,980px)] flex-col overflow-hidden rounded-2xl bg-panel shadow-2xl print:my-0 print:min-h-0 print:w-full print:rounded-none print:bg-white print:shadow-none">
          <Header />
          <main className="flex-1 px-5 py-5 print:p-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

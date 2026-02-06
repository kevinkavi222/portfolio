import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Muchuo | Portfolio",
  description: "Personal developer portfolio for Kevin Muchuo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-800">
        <div className="min-h-screen flex flex-col bg-transparent">
          <header className="border-b border-slate-300/80">
            <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
              <span className="text-base font-semibold tracking-tight text-slate-800 sm:text-lg">
                Kevin Muchuo
              </span>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600 sm:gap-4">
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-accent transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </div>
            </nav>
          </header>
          <main className="flex-1 py-10">{children}</main>
          <footer className="border-t border-slate-300/80">
            <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-600 sm:px-6 lg:px-8">
              <p className="mb-1">QA Automation · Development · Instructor</p>
              <p>© {new Date().getFullYear()} Kevin Muchuo. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}


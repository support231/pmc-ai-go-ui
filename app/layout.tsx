import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMC CENTRE AI",
  description: "Technical AI assistant for Paper Machine Clothing professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased bg-[#f8fafc] text-slate-900">
        {/* Header */}
        <header className="w-full border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
            <Image
              src="/PMCCentreLogoSmall.png"
              alt="PMC CENTRE AI"
              width={40}
              height={40}
              priority
            />
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight">
                PMC CENTRE AI
              </span>
              <span className="text-xs text-slate-500">
                Paper Machine Clothing – Technical Assistant
              </span>
            </div>
          </div>
        </header>

        {/* App Content */}
        <main className="mx-auto max-w-5xl px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}

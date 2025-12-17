"use client";

import { useCallback } from "react";
import Image from "next/image";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      
      {/* ===== HERO / START SCREEN ===== */}
      <section className="flex flex-col items-center justify-center px-4 pt-16 pb-12 text-center">
        <Image
          src="/PMCCentreLogoSmall.png"
          alt="PMC CENTRE AI"
          width={72}
          height={72}
          priority
        />

        <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">
          PMC Chat
        </h1>

        <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
          Your intelligent assistant for Paper Machine Clothing technology
        </p>

        {/* Optional: sign-in button placeholder */}
        {/* 
        <button className="mt-6 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
          Sign In to Get Started
        </button> 
        */}
      </section>

      {/* ===== FEATURE CARDS (STATIC UI) ===== */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 pb-12 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">
            AI-Powered
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Advanced AI specialized in Paper Machine Clothing technology.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">
            Secure & Reliable
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Enterprise-grade infrastructure with safe session handling.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200">
            Expert Insights
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Industry knowledge across forming, press, and dryer fabrics.
          </p>
        </div>
      </section>

      {/* ===== CHAT AREA ===== */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-12">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </section>
    </div>
  );
}

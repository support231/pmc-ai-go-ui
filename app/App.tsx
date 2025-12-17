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
    <div className="flex min-h-screen flex-col bg-slate-100 dark:bg-slate-950">
      
      {/* ===== COMPACT HEADER ===== */}
      <header className="flex flex-col items-center pt-6 pb-4 text-center">
        <Image
          src="/PMCCentreLogoSmall.png"
          alt="PMC CENTRE AI"
          width={48}
          height={48}
          priority
        />

        <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          PMC Chat
        </h1>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Paper Machine Clothing – Technical Assistant
        </p>
      </header>

      {/* ===== CHAT AREA (DOMINANT) ===== */}
      <main className="mx-auto flex w-full max-w-5xl flex-1 px-4 pb-6">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={setScheme}
        />
      </main>
    </div>
  );
}

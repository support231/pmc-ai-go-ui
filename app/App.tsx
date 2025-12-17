"use client";

import { useCallback, useState } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();
  const [chatStarted, setChatStarted] = useState(false);

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
      {!chatStarted ? (
        /* ===== LANDING STATE ===== */
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          {/* Feature boxes */}
          <div className="mb-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
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
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setChatStarted(true)}
            className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Chat Now
          </button>
        </div>
      ) : (
        /* ===== FULL CHAT STATE ===== */
        <div className="flex min-h-screen flex-col">
          <main className="flex flex-1">
            <ChatKitPanel
              theme={scheme}
              onWidgetAction={handleWidgetAction}
              onResponseEnd={handleResponseEnd}
              onThemeRequest={setScheme}
            />
          </main>
        </div>
      )}
    </div>
  );
}

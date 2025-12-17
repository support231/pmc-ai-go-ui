import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/**
 * Starter prompts shown on the start screen
 * Keep minimal and technical
 */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Forming fabric wear",
    prompt: "Explain the cause of fabric wear on the forming section",
    icon: "layers",
  },
  {
    label: "Dryer fabric optimization",
    prompt: "Suggest optimization steps for dryer fabric performance",
    icon: "chart-line",
  },
  {
    label: "Draft a technical email",
    prompt: "Draft a short technical email to a paper mill maintenance team",
    icon: "mail",
  },
];

/**
 * Input placeholder text
 * Guides users to ask structured technical questions
 */
export const PLACEHOLDER_INPUT =
  "Ask a PMC question (machine section, grade, speed, fabric type, issue)…";

/**
 * Greeting shown on empty chat screen
 * This is UI-only, NOT a system prompt
 */
export const GREETING =
  "PMC CENTRE AI — Technical assistant for Paper Machine Clothing";

/**
 * Theme configuration (kept conservative & professional)
 */
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
});

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        paper: "var(--paper)",
        bone: "var(--bone)",
        ink: "var(--ink)",
        ink2: "var(--ink2)",
        muted: "var(--muted)",
        copper: "var(--copper)",
        copper2: "var(--copper2)",
        amber: "var(--amber)",
        amber2: "var(--amber2)",
        terra: "var(--terra)",
        charcoal: "var(--charcoal)",
      },

      fontFamily: {
        display: "var(--font-display)",
        ui: "var(--font-ui)",
        body: "var(--font-body)",
        mono: "var(--font-mono)",
      },

      transitionTimingFunction: {
        smooth: "var(--ease)",
      },
    },
  },
  plugins: [],
}

export default config

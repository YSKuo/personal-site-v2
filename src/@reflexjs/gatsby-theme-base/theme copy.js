import base from "@reflexjs/preset-base"

export default {
  preset: base,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#2a9d8f",
    secondary: "#e76f51",
  },
  fonts: {
    body: '"Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [14, 16, 18, 20, 22, 36, 56, 72],
  breakpoints: [`768px`, `1024px`, `1280px`],
  button: {
    border: "1px solid",
    borderRadius: "sm",
    fontSize: "md",
    primary: {
      bg: "primary",
    },
    secondary: {
      bg: "secondary",
    },
    lg: {
      fontSize: "2xl",
    }
  }
}
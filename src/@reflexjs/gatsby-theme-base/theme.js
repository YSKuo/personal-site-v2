import base from "@reflexjs/preset-base"

export default {
  preset: base,
  breakpoints: [`576px`, `768px`, `992px`, `1200px`],
  colors: {
    secondary: '#2AD587',
    text: '#393939',
    prism: {
      text: "#d6deeb",
      background: "#212130",
      comment: "#93b4b4",
      string: "#addb67",
      var: "#d6deeb",
      number: "#f78c6c",
      constant: "#82aaff",
      punctuation: "#c792ea",
      className: "#ffcb8b",
      tag: "#7fdbca",
      boolean: "#ff5874",
      property: "#80cbc4",
      namespace: "#b2ccd6",
      highlight: "#243E73",
      file: "#92B5B2",
    },
  },
  fonts: {
    body: 'Inter, Roboto, "Helvetica Neue", sans-serif',
    heading: 'Inherit',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 36, 56, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  // variants can use custom, user-defined names
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
}
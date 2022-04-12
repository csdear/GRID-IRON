// Create a theme.
// but using DefaultThem declared prior.
import { DefaultTheme } from "styled-components";

// Hunter original spec.
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
// export default {
//   breakpoints: {
//     s: "only screen and (max-width: 65rem)",
//     m: "only screen and (max-width: 70rem)",
//   },
// };

// but i am using typescript.
const theme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: "cyan",
    secondary: "magenta",
  },
  breakpoints: {
    s: "only screen and (max-width: 65rem)",
    m: "only screen and (max-width: 70rem)",
  },
};

export { theme };

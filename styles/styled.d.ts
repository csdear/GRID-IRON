// DefaultTheme is being used as an interface of props.theme out of the box.

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };

    // just an idea... set the breakpoints interface, their TYPES
    breakpoints: {
      s: string;
      m: string;
    };
  }
}

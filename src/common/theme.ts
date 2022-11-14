import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

/** Chakra UI Customize Theme */
const theme = extendTheme(
  {
    // colors: { primary: { primary: "#3A57E8" } },
    colors: {
      primary: {
        50: "hsla(230, 79%, 98%, 1)",
        100: "hsla(230, 79%, 96%, 1)",
        200: "hsla(230, 79%, 93%, 1)",
        300: "hsla(230, 79%, 88%, 1)",
        400: "hsla(230, 79%, 74%, 1)",
        500: "hsla(230, 79%, 62%, 1)",
        600: "hsla(230, 79%, 46%, 1)",
        700: "hsla(230, 79%, 38%, 1)",
        800: "hsla(230, 79%, 26%, 1)",
        900: "hsla(230, 79%, 13%, 1)",
      },
    },
    fonts: {
      body: `Pretendard,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
      heading: `Pretendard,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
  },
  /** 기본이나 추가된 테마를 이용하여 default로 잡는 부분.
   * components를 설정하면 해당 Chakra UI의 컴포넌트만 적용된다.
   * component가 없으면 모든 chakra UI의 컴포넌트의 colorScheme가 설정한 값이 default가 된다*/
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button"],
  })
);

export default theme;

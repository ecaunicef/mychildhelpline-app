import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function AccessibilitySVG(props: any) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_763_8388)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.648 21c5.8 0 10.5-4.7 10.5-10.5S17.448 0 11.648 0c-5.799 0-10.5 4.7-10.5 10.5S5.85 21 11.648 21zm0-13.65a2.1 2.1 0 100-4.2 2.1 2.1 0 000 4.2zm-5.992.326a.788.788 0 00-.615 1.448l.002.002h.002l.01.005.034.014a28.242 28.242 0 002.204.793c1.037.328 2.348.672 3.568.786v1.302c0 .451-.13.895-.375 1.276l-2.65 4.122a.788.788 0 001.325.852l2.489-3.87 2.486 3.87a.788.788 0 001.325-.852l-2.65-4.122a2.363 2.363 0 01-.375-1.277v-1.301c1.22-.114 2.53-.458 3.569-.786.744-.235 1.48-.5 2.203-.793l.034-.014.01-.004.003-.001a.788.788 0 00-.614-1.45l-.008.003-.028.011-.115.047a27.507 27.507 0 01-1.957.7c-1.237.388-2.718.75-3.885.75-1.166 0-2.646-.362-3.882-.75-.7-.222-1.392-.471-2.073-.747l-.03-.011-.007-.003z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default AccessibilitySVG;

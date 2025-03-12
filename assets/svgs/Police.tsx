import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function PoliceSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={58}
      height={52}
      viewBox="0 0 58 52"
      fill="none"
      {...props}>
      <G filter="url(#filter0_d_763_4037)">
        <Path
          d="M50.188 32.884h.008v1.733c0 8.49-9.396 15.372-20.989 15.372-11.592 0-20.988-6.881-20.988-15.371v-1.734h.008c4.4 2.998 12.149 4.992 20.98 4.992 8.831 0 16.578-1.994 20.981-4.992z"
          fill="#B4DCFE"
        />
        <Path
          d="M54.038 24.842s3.82-3.639 3.82-6.333c0-10.921-14.936-18.5-28.65-18.5C15.494.009.557 7.588.557 18.509c0 2.697 3.82 6.333 3.82 6.333h.07c.956 4.607 11.676 8.24 24.76 8.24 13.082 0 23.803-3.63 24.76-8.24h.07z"
          fill="#4CA9F5"
        />
        <Path
          d="M29.207 5.74s2.254 3.272 8.178 3.272v8.248c0 6.304-8.177 10.765-8.177 10.765S21.03 23.562 21.03 17.26V9.012c5.926 0 8.177-3.271 8.177-3.271z"
          fill="#B4DCFE"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
export default PoliceSVG;

import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function EducationSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={74}
      height={44}
      viewBox="0 0 74 44"
      fill="none"
      {...props}>
      <G filter="url(#filter0_d_763_4045)">
        <Path
          d="M36.758.479a1.689 1.689 0 00-1.197 0L.7 13.553l1.965.743 33.027 12.333c.385.147.811.147 1.197 0l30.555-11.474a1.71 1.71 0 000-3.209L36.758.48z"
          fill="#4B34D7"
        />
        <Path
          d="M16.006 23.226a.85.85 0 00-1.143.804v9.838c0 4.306 9.48 7.762 21.302 7.762 8 0 14.894-1.609 18.587-3.94 1.728-1.115 2.743-2.469 2.743-3.822v-9.975a.85.85 0 00-1.152-.796L36.457 30.54a.833.833 0 01-.595 0l-19.857-7.313zm54.654-7.378a.841.841 0 00-.576.695l-.43 3.41-1.462 10.358a.85.85 0 00.844.97h3.83a.85.85 0 00.841-.968L71.77 16.535a.842.842 0 00-1.106-.686l-.003-.001z"
          fill="#B4A8FF"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}
export default EducationSVG;

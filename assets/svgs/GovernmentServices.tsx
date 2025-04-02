import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GovernmentServicesSVG(props: any) {
  return (
    <Svg
      width={77}
      height={77}
      viewBox="0 0 77 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_763_8514)">
        <Path
          d="M71.916 31.677h-6.443c-2.147-10.199-11.864-17.638-23.95-18.7V8.56h9.846L48.8 4.281 51.37 0H35.53v12.976c-12.085 1.063-21.803 8.502-23.95 18.701H5.137v5.993h66.78v-5.993z"
          fill="#fff"
        />
        <Path
          d="M71.916 68.492v-5.993h-5.992V41.95h-7.706v20.548h-7.705V41.95h-7.706v20.548h-7.705V41.95h-7.705v20.548h-8.562V41.95H11.13v20.548H5.137v5.993H0v5.993h76.197v-5.993h-4.28z"
          fill="#B6E576"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default GovernmentServicesSVG;

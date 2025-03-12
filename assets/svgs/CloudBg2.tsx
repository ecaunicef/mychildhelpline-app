import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function informaionBGSVG(props: any) {
  return (
    <Svg
      width={440}
      height={359}
      viewBox="0 0 440 359"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 0h440v247.51s-120.5 79.852-220 0-220 0-220 0V0z"
        fill="url(#paint0_linear_763_8288)"
      />
      <Path
        d="M400.29 185.74c-17.49.02-32.9 8.88-42.03 22.35-8.81-9.1-21.15-14.76-34.81-14.74-3.4 0-6.71.36-9.91 1.03-5.59-22.03-25.57-38.32-49.33-38.29-24.52.03-44.96 17.43-49.71 40.55a63.08 63.08 0 00-31.37-8.25c-29.49.04-54.25 20.19-61.35 47.45a43.379 43.379 0 00-24.47-7.48c-4.69.01-9.2.76-13.42 2.14-3.23-24.99-24.6-44.28-50.46-44.25-1.91 0-3.79.12-5.64.33C16.4 159.76-10.2 140.96-41.18 141c-41.3.06-74.74 33.59-74.68 74.89.01 5.73.68 11.3 1.91 16.66a43.43 43.43 0 00-17.99-3.86c-4.13.01-8.12.6-11.91 1.68-3.43-24.77-24.69-43.83-50.4-43.79-28.07.04-50.79 22.83-50.75 50.9l.18 120.94 696.21-.99-.18-120.94c-.07-28.06-22.85-50.79-50.92-50.75z"
        fill="url(#paint1_linear_763_8288)"
        fillOpacity={0.5}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_763_8288"
          x1={-10}
          y1={5.72646}
          x2={275.423}
          y2={366.091}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#56CCF2" />
          <Stop offset={1} stopColor="#1B4987" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_763_8288"
          x1={102.755}
          y1={2.05588}
          x2={103.489}
          y2={526.742}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.00189453} stopColor="#fff" />
          <Stop offset={0.9962} stopColor="#CFFAFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default informaionBGSVG;

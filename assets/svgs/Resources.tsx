import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ResourcesSVG(props: any) {
  return (
    <Svg
      width={51}
      height={64}
      viewBox="0 0 51 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M27.097 16.42V0H15.73A7.158 7.158 0 008.57 7.156V48.42a7.158 7.158 0 007.158 7.158h27.79a7.158 7.158 0 007.157-7.158V23.578h-16.42a7.158 7.158 0 01-7.159-7.157z"
        fill="#fff"
      />
      <Path
        d="M31.308.842V16.42a2.947 2.947 0 002.947 2.947h15.58L31.307.842zM1.3 10.885a6.737 6.737 0 00-1.15 3.768v33.768a15.579 15.579 0 0015.579 15.58h20.295a6.736 6.736 0 006.248-4.211H15.73A11.368 11.368 0 014.361 48.42V8.405a6.737 6.737 0 00-3.06 2.48z"
        fill="#99E9F3"
      />
    </Svg>
  );
}

export default ResourcesSVG;

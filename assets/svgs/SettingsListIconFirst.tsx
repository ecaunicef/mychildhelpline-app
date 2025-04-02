import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SettingsListIconFirst(props: any) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.297.4a10 10 0 0110 10c0 5.524-4.477 10-10 10s-10-4.476-10-10c0-5.522 4.477-10 10-10zm1 11h-2a6.001 6.001 0 00-5.518 3.64 7.99 7.99 0 006.518 3.36 7.99 7.99 0 006.518-3.36 6.002 6.002 0 00-5.518-3.64zm-1-8a3 3 0 100 6 3 3 0 000-6z"
        fill="#222"
      />
    </Svg>
  );
}

export default SettingsListIconFirst;

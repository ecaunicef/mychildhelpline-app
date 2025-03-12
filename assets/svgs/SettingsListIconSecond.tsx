import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SettingsListIconSecond(props: any) {
  return (
    <Svg
      width={15}
      height={21}
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.297 6.087c0-2.907 2.238-5.263 5-5.263s5 2.356 5 5.263v3.158h.4c.88 0 1.6.758 1.6 1.684v7.369c0 1.39-1.08 2.526-2.4 2.526h-9.2c-1.32 0-2.4-1.137-2.4-2.526v-7.369c0-.926.72-1.684 1.6-1.684h.4V6.087zm8 0v3.158h-6V6.087c0-1.745 1.342-3.158 3-3.158s3 1.413 3 3.158zm-3 5.527c-.398 0-.784.141-1.094.403-.311.26-.528.626-.615 1.034a1.93 1.93 0 00.134 1.212c.175.377.465.679.825.858v2.545c0 .21.079.41.22.558.14.148.331.232.53.232s.39-.084.53-.232a.81.81 0 00.22-.558v-2.545c.36-.179.65-.482.825-.858a1.93 1.93 0 00.134-1.212 1.857 1.857 0 00-.615-1.034 1.696 1.696 0 00-1.094-.403z"
        fill="#222"
      />
    </Svg>
  );
}

export default SettingsListIconSecond;

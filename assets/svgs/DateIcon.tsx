import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DateIcon(props: any) {
  return (
    <Svg
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.889 2.095h6.222v-1.5h1.556v1.5h.777c.413 0 .809.158 1.1.44.292.28.456.662.456 1.06v10.5c0 .398-.164.78-.456 1.06-.291.282-.687.44-1.1.44H1.556c-.413 0-.809-.158-1.1-.44A1.473 1.473 0 010 14.096v-10.5c0-.398.164-.78.456-1.06.291-.282.687-.44 1.1-.44h.777v-1.5H3.89v1.5zm-2.333 3v9h10.888v-9H1.556zm1.555 2.25h1.556v1.5H3.11v-1.5zm3.111 0h1.556v1.5H6.222v-1.5zm3.111 0h1.556v1.5H9.333v-1.5zm0 3h1.556v1.5H9.333v-1.5zm-3.11 0h1.555v1.5H6.222v-1.5zm-3.112 0h1.556v1.5H3.11v-1.5z"
        fill="#222"
      />
    </Svg>
  );
}

export default DateIcon;

import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

function Humburger(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={18}
      viewBox="0 0 26 18"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_680_746)">
        <Path
          d="M1 16v-2.667h24V16H1zm0-6.667V6.667h24v2.666H1zm0-6.666V0h24v2.667H1z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default Humburger

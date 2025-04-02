import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CallUs(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={260}
      height={139}
      viewBox="0 0 260 139"
      fill="none"
      {...props}
    >
      <Path
        d="M251 102L188 0H0v138.5c44.167 0 146.6-.5 209-.5 35 0 65-.5 42-36z"
        fill={props.fillColor}
      />
    </Svg>
  )
}

export default CallUs

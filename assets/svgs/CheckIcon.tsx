import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CheckIconSVG(props: any) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 8" {...props}>
            <Path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M1.5 4.5l2 2 5-5"
            />
        </Svg>
    )
}

export default CheckIconSVG

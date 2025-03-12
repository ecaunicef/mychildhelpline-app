import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ArrowRightSvg(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={6}
            height={11}
            viewBox="0 0 6 11"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.761 6.111L1.152 11 0 9.778 4.033 5.5 0 1.222 1.152 0l4.61 4.889A.892.892 0 016 5.5c0 .23-.086.449-.239.611z"
                fill={props.SVGColor || '#222222'}
            />
        </Svg>
    )
}

export default ArrowRightSvg

import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'

function HomeCardBG(props: any) {
    return (
        <Svg
            style={{ transform: 'scale(1.5)' }}
            width={380}
            height={140}
            viewBox="0 0 380 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            {/* <Rect
                width={'100%'}
                height={'100%'}
                rx={5}
                fill={props.backgroundColor}
            /> */}
            <Path
                d="M252 103L189 1H1v138.5c44.167 0 146.6-.5 209-.5 35 0 65-.5 42-36z"
                fill={props.fillColor}
            />
        </Svg>
    )
}

export default HomeCardBG

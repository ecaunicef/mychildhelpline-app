import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'

function HelpingHandResetButton(props: any) {
    return (
        <Svg
            width={41}
            height={42}
            viewBox="0 0 41 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G filter="url(#filter0_d_763_4537)">
                <Path
                    d="M29.48 19.186a8.902 8.902 0 00-1.354-3.219 9.002 9.002 0 00-5.65-3.785 9.011 9.011 0 00-1.837-.18V10l-3.975 3 3.975 3v-1.998c.484-.002.968.044 1.435.14a7 7 0 014.394 2.945A6.97 6.97 0 0127.664 21a7 7 0 01-1.194 3.913 7.03 7.03 0 01-4.394 2.946 6.998 6.998 0 01-7.215-2.944A7 7 0 0113.664 21h-2a9 9 0 0016.463 5.031 8.95 8.95 0 001.537-5.03c0-.61-.061-1.218-.183-1.815z"
                    fill="#1B4987"
                />
            </G>
            <Defs></Defs>
        </Svg>
    )
}

export default HelpingHandResetButton

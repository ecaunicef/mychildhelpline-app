import * as React from 'react'
import { Dimensions } from 'react-native'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

function CircleSvg(props: any) {
    return (
        <Svg
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
                zIndex: -1,
            }}
            width={1032}
            height={1032}
            viewBox="0 0 1032 1032"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M516 516L0 549.81v-67.62L516 516z"
                fill="url(#paint0_linear_734_475)"
            />
            <Path
                d="M516.104 515.542L8.936 414.649l17.501-65.315 489.667 166.208z"
                fill="url(#paint1_linear_734_475)"
            />
            <Path
                d="M516.001 515.7L52.227 286.98l33.81-58.56L516 515.7z"
                fill="url(#paint2_linear_734_475)"
            />
            <Path
                d="M515.438 515.438l-388.774-340.96 47.814-47.814 340.96 388.774z"
                fill="url(#paint3_linear_734_475)"
            />
            <Path
                d="M515.7 516L228.42 86.036l58.56-33.81L515.7 516z"
                fill="url(#paint4_linear_734_475)"
            />
            <Path
                d="M515.542 516.104L349.334 26.437l65.315-17.5 100.893 507.167z"
                fill="url(#paint5_linear_734_475)"
            />
            <Path
                d="M516.001 516L482.191 0h67.62l-33.81 516z"
                fill="url(#paint6_linear_734_475)"
            />
            <Path
                d="M516 516l516 33.81v-67.62L516 516z"
                fill="url(#paint7_linear_734_475)"
            />
            <Path
                d="M515.896 515.542l507.164-100.893-17.5-65.315-489.664 166.208z"
                fill="url(#paint8_linear_734_475)"
            />
            <Path
                d="M515.999 515.7l463.774-228.72-33.809-58.56L515.999 515.7z"
                fill="url(#paint9_linear_734_475)"
            />
            <Path
                d="M516.562 515.438l388.774-340.96-47.814-47.814-340.96 388.774z"
                fill="url(#paint10_linear_734_475)"
            />
            <Path
                d="M516.3 516L803.58 86.036l-58.56-33.81L516.3 516z"
                fill="url(#paint11_linear_734_475)"
            />
            <Path
                d="M516.458 516.104L682.666 26.437l-65.315-17.5-100.893 507.167z"
                fill="url(#paint12_linear_734_475)"
            />
            <Path
                d="M515.999 516l33.81-516h-67.62l33.81 516z"
                fill="url(#paint13_linear_734_475)"
            />
            <Path
                d="M516 516L0 482.19v67.62L516 516z"
                fill="url(#paint14_linear_734_475)"
            />
            <Path
                d="M516.104 516.458L8.936 617.351l17.501 65.315 489.667-166.208z"
                fill="url(#paint15_linear_734_475)"
            />
            <Path
                d="M516.001 516.3L52.227 745.02l33.81 58.56L516 516.3z"
                fill="url(#paint16_linear_734_475)"
            />
            <Path
                d="M515.438 516.562l-388.774 340.96 47.814 47.814 340.96-388.774z"
                fill="url(#paint17_linear_734_475)"
            />
            <Path
                d="M515.7 516L228.42 945.964l58.56 33.81L515.7 516z"
                fill="url(#paint18_linear_734_475)"
            />
            <Path
                d="M515.542 515.896L349.334 1005.56l65.315 17.5 100.893-507.164z"
                fill="url(#paint19_linear_734_475)"
            />
            <Path
                d="M516.001 516l-33.81 516h67.62l-33.81-516z"
                fill="url(#paint20_linear_734_475)"
            />
            <Path
                d="M516 516l516-33.81v67.62L516 516z"
                fill="url(#paint21_linear_734_475)"
            />
            <Path
                d="M515.896 516.458l507.164 100.893-17.5 65.315-489.664-166.208z"
                fill="url(#paint22_linear_734_475)"
            />
            <Path
                d="M515.999 516.3l463.774 228.72-33.809 58.56L515.999 516.3z"
                fill="url(#paint23_linear_734_475)"
            />
            <Path
                d="M516.562 516.562l388.774 340.96-47.814 47.814-340.96-388.774z"
                fill="url(#paint24_linear_734_475)"
            />
            <Path
                d="M516.3 516l287.28 429.964-58.56 33.81L516.3 516z"
                fill="url(#paint25_linear_734_475)"
            />
            <Path
                d="M516.458 515.896l166.208 489.664-65.315 17.5-100.893-507.164z"
                fill="url(#paint26_linear_734_475)"
            />
            <Path
                d="M515.999 516l33.81 516h-67.62l33.81-516z"
                fill="url(#paint27_linear_734_475)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_734_475"
                    x1={-145}
                    y1={515.902}
                    x2={258}
                    y2={515.902}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint1_linear_734_475"
                    x1={-122.347}
                    y1={344.368}
                    x2={266.921}
                    y2={448.672}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint2_linear_734_475"
                    x1={-56.3931}
                    y1={185.115}
                    x2={292.615}
                    y2={386.615}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint3_linear_734_475"
                    x1={48.1102}
                    y1={47.9707}
                    x2={333.074}
                    y2={332.935}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint4_linear_734_475"
                    x1={185.285}
                    y1={-56.4919}
                    x2={386.785}
                    y2={292.516}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint5_linear_734_475"
                    x1={344.558}
                    y1={-122.398}
                    x2={448.862}
                    y2={266.87}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint6_linear_734_475"
                    x1={516.099}
                    y1={-145}
                    x2={516.099}
                    y2={258}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint7_linear_734_475"
                    x1={1177}
                    y1={515.902}
                    x2={774}
                    y2={515.902}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint8_linear_734_475"
                    x1={1154.35}
                    y1={344.368}
                    x2={765.079}
                    y2={448.672}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint9_linear_734_475"
                    x1={1088.39}
                    y1={185.115}
                    x2={739.385}
                    y2={386.615}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint10_linear_734_475"
                    x1={983.89}
                    y1={47.9707}
                    x2={698.926}
                    y2={332.935}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint11_linear_734_475"
                    x1={846.715}
                    y1={-56.4919}
                    x2={645.215}
                    y2={292.516}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint12_linear_734_475"
                    x1={687.442}
                    y1={-122.398}
                    x2={583.138}
                    y2={266.87}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint13_linear_734_475"
                    x1={515.901}
                    y1={-145}
                    x2={515.901}
                    y2={258}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint14_linear_734_475"
                    x1={-145}
                    y1={516.098}
                    x2={258}
                    y2={516.098}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint15_linear_734_475"
                    x1={-122.347}
                    y1={687.632}
                    x2={266.921}
                    y2={583.328}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint16_linear_734_475"
                    x1={-56.3931}
                    y1={846.885}
                    x2={292.615}
                    y2={645.385}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint17_linear_734_475"
                    x1={48.1102}
                    y1={984.029}
                    x2={333.074}
                    y2={699.065}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint18_linear_734_475"
                    x1={185.285}
                    y1={1088.49}
                    x2={386.785}
                    y2={739.484}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint19_linear_734_475"
                    x1={344.558}
                    y1={1154.4}
                    x2={448.862}
                    y2={765.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint20_linear_734_475"
                    x1={516.099}
                    y1={1177}
                    x2={516.099}
                    y2={774}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint21_linear_734_475"
                    x1={1177}
                    y1={516.098}
                    x2={774}
                    y2={516.098}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint22_linear_734_475"
                    x1={1154.35}
                    y1={687.632}
                    x2={765.079}
                    y2={583.328}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint23_linear_734_475"
                    x1={1088.39}
                    y1={846.885}
                    x2={739.385}
                    y2={645.385}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint24_linear_734_475"
                    x1={983.89}
                    y1={984.029}
                    x2={698.926}
                    y2={699.065}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint25_linear_734_475"
                    x1={846.715}
                    y1={1088.49}
                    x2={645.215}
                    y2={739.484}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint26_linear_734_475"
                    x1={687.442}
                    y1={1154.4}
                    x2={583.138}
                    y2={765.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
                <LinearGradient
                    id="paint27_linear_734_475"
                    x1={515.901}
                    y1={1177}
                    x2={515.901}
                    y2={774}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop offset={0.28} stopColor="#fff" stopOpacity={0.18} />
                    <Stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default CircleSvg

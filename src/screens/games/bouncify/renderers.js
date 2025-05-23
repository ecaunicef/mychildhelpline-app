import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Animated } from 'react-native'
import { Svg, Circle, Text as SVGText } from 'react-native-svg'
import Utils from './utils'
import { Config, FLOOR_BOX_POSITION } from './config'
import * as Animatable from 'react-native-animatable'
import Explosion from './components/explosion'
import {
    useAnimateCollecting,
    useAnimateDrop,
    useAnimateRow,
    useOpacityPulse,
    useRadiusPulse,
} from './hooks'

function Ball(props) {
    const x = props.position.x - Config.RADIUS / 2
    const y = props.position.y - Config.RADIUS / 2
    return (
        <View
            style={[
                styles.ball,
                { left: x, top: y, backgroundColor: props.color },
            ]}
        />
    )
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
function Floor(props) {
    const { total_hits, current_hits } = props
    const percent_hit = Math.trunc((current_hits * 100) / total_hits)
    const percent_hit_animated = new Animated.Value(percent_hit)
    const size = 125
    const margin = 15
    const strokeWidth = 20
    const radius = (size - strokeWidth - margin) / 2
    const circumference = radius * 2 * Math.PI
    const angle = percent_hit_animated.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 2 * Math.PI],
    })
    return (
        <View
            style={{
                position: 'absolute',
                left: 0,
                top: props.height,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
                backgroundColor: '#262626',
            }}
        >
            {current_hits > 0 && (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height:
                            Dimensions.get('window').height -
                            props.height -
                            margin,
                    }}
                >
                    <Svg width={size} height={size}>
                        <Circle
                            stroke="#265BF6"
                            strokeWidth={strokeWidth}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                        />
                        <AnimatedCircle
                            stroke="#404040"
                            strokeWidth={strokeWidth}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            strokeDashoffset={Animated.multiply(angle, radius)}
                            strokeDasharray={`${circumference} ${circumference}`}
                        />
                        <SVGText
                            x={size / 2}
                            y={size / 2}
                            dx="-.5em"
                            dy="+.3em"
                            fontSize="18"
                            textAnchor="middle"
                            stroke="white"
                            fill="white"
                        >
                            {/* Ugly hack: percent sign overlaps with single digit text and not with multi */}
                            {percent_hit}
                            {percent_hit < 10 && ' %'}
                            {percent_hit >= 10 && '%'}
                        </SVGText>
                    </Svg>
                </View>
            )}
            <View pointerEvents="none">
                <Text
                    style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        marginTop: 30,
                        opacity: 0.3,
                        marginLeft: '25%',
                        right: 0,
                        left: 0,
                        color: '#fff',
                        fontSize: 32,
                        lineHeight: 40,
                        zIndex: 1,
                    }}
                >
                    Drag from here
                </Text>
            </View>
        </View>
    )
}

function ScoreBar(props) {
    const { height, best, level, balls_in_play, balls } = props
    let ball_count = balls == balls_in_play ? balls : balls - balls_in_play
    return (
        <View style={[styles.scorebar, { height: height }]}>
            <View style={styles.bestcontainer}>
                <Text style={styles.besttitle}>Best</Text>
                <Text style={styles.bestscore}>{best}</Text>
            </View>
            <View style={styles.levelcontainer}>
                <Text style={styles.besttitle}>Level</Text>
                <Text style={styles.currentscore}>{level}</Text>
            </View>
            <View style={styles.ballscontainer}>
                <Text style={styles.besttitle}>Balls</Text>
                <Text style={styles.currentscore}>{ball_count}</Text>
            </View>
        </View>
    )
}

function AimLine(props) {
    const { start, end } = props
    const drawLength = 1.0 // Ratio of aim vector to display
    const numCircles = 25
    let delta = Utils.getPointsDeltas(start, end)
    let length = Utils.getDistance(start, end)
    if (length == 0) {
        return null
    }
    let RADIUS = Config.RADIUS
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height
    let radius = Math.min(
        (RADIUS * 2) / 3,
        Math.max(RADIUS / 2, (RADIUS * length) / (height / 2))
    )

    let circles = Array(numCircles)
        .fill()
        .map((_, i) => {
            let start = props.start
            let spacing = delta.x / numCircles

            // check screen upper and sound bounds and bounce the aim line off the surface
            let x = start.x + spacing * i * drawLength
            if (x > width) {
                x -= (x - width) * 2
            }
            if (x < 0) {
                x += -x * 2
            }
            let y = start.y + (delta.y / numCircles) * i * drawLength
            if (y < Config.SCOREBOARD_HEIGHT) {
                y -= (y - Config.SCOREBOARD_HEIGHT) * 2
            }
            return <Circle key={i} cx={x} cy={y} r={radius} fill="white" />
        })

    return (
        <View>
            <Svg width={width} height={height}>
                {circles}
            </Svg>
        </View>
    )
}

function SpeedUpButton(props) {
    const { speed, row, column, available } = props
    return (
        available && (
            <View
                style={[
                    styles.boxcontainer,
                    {
                        top:
                            Utils.rowToTopPosition(row) + Config.BOX_TILE_SPACE,
                        left:
                            Utils.colToLeftPosition(column) +
                            +Config.BOX_TILE_SPACE,
                    },
                ]}
            >
                <Animatable.Text
                    style={{
                        color: 'white',
                        fontSize: 22,
                        lineHeight: 28,
                    }}
                    animation="swing"
                    iterationCount="infinite"
                    direction="alternate"
                >
                    {speed}x
                </Animatable.Text>
            </View>
        )
    )
}

function BoxTile(props) {
    const [exploding, setExploding] = useState(false)
    const [animateTop, setRow] = useAnimateRow(props.row)
    const [animateOpacity, startOpacityPulse] = useOpacityPulse(50)

    useEffect(() => {
        setRow(props.row)
    }, [props.row])

    useEffect(() => {
        setExploding(props.explode)
    }, [props.explode])

    useEffect(() => {
        startOpacityPulse()
    }, [props.hits])

    const { hits, col, row } = props
    const color = Utils.hitsToColor(hits)
    const x = Utils.colToLeftPosition(col)
    const y = Utils.rowToTopPosition(row)
    if (exploding) {
        return (
            <Explosion
                backgroundColor={color}
                count={35}
                origin={{ x: x, y: y }}
            />
        )
    } else {
        return (
            <Animated.View
                style={[
                    styles.boxcontainer,
                    {
                        backgroundColor: color,
                        top: animateTop,
                        width: Config.BOX_TILE_SIZE,
                        height: Config.BOX_TILE_SIZE,
                        left: x,
                        opacity: animateOpacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0],
                        }),
                    },
                ]}
            >
                <Text style={styles.boxtext}>{hits}</Text>
            </Animated.View>
        )
    }
}

function BallPowerUp(props) {
    const [rowAnimationTop, setRow] = useAnimateRow(props.row)
    const [dropAnimationTop, setDrop] = useAnimateDrop(700)
    const [collectingAnimationTop, setCollecting] = useAnimateCollecting(
        600,
        900
    )
    const radius = useRadiusPulse(10, 16, 400)

    useEffect(() => {
        setRow(props.row)
    }, [props.row])

    useEffect(() => {
        if (props.falling) {
            setDrop()
        }
    }, [props.falling])

    useEffect(() => {
        if (props.collecting) {
            setCollecting()
        }
    }, [props.collecting])

    const { col, row, falling, collecting } = props
    let color = !falling ? 'white' : '#8CB453'
    let leftPosition = Utils.colToLeftPosition(col)
    let opacity = 1
    let BOX_MIDDLE = Config.BOX_TILE_SIZE / 2

    // Top position will change based on state of the power-up
    let topPosition = rowAnimationTop
    if (collecting) {
        topPosition = collectingAnimationTop.interpolate({
            inputRange: [0, 1],
            outputRange: [FLOOR_BOX_POSITION, FLOOR_BOX_POSITION - 600],
        })
        opacity = collectingAnimationTop.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
        })
    } else if (falling) {
        topPosition = dropAnimationTop.interpolate({
            inputRange: [0, 1],
            outputRange: [Utils.rowToTopPosition(row), FLOOR_BOX_POSITION + 30],
        })
    }
    return (
        <Animated.View
            style={[
                styles.boxcontainer,
                {
                    top: topPosition,
                    left: leftPosition,
                    opacity: opacity,
                },
            ]}
        >
            <Svg height={Config.BOX_TILE_SIZE} width={Config.BOX_TILE_SIZE}>
                {!props.falling && (
                    <Circle
                        cx={BOX_MIDDLE}
                        cy={BOX_MIDDLE}
                        r={radius}
                        stroke={color}
                        strokeWidth="3"
                        fill="#202020"
                    />
                )}
                {!props.collecting && (
                    <Circle
                        cx={BOX_MIDDLE}
                        cy={BOX_MIDDLE}
                        r="7"
                        stroke={color}
                        fill={color}
                    />
                )}
                {props.collecting && (
                    <SVGText
                        dx={BOX_MIDDLE}
                        dy={BOX_MIDDLE}
                        stroke={color}
                        fill={color}
                        opacity={opacity}
                    >
                        +1
                    </SVGText>
                )}
            </Svg>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    ball: {
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: Config.RADIUS * 2,
        width: Config.RADIUS * 2,
        height: Config.RADIUS * 2,
        position: 'absolute',
    },
    boxcontainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    boxtext: {
        color: '#262626',
        fontSize: 16,
        lineHeight: 20,
    },
    scorebar: {
        position: 'absolute',
        left: 0,
        top: 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width,
        backgroundColor: '#262626',
    },
    bestcontainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'flex-end',
    },
    levelcontainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'flex-end',
    },
    ballscontainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'flex-end',
    },
    besttitle: {
        fontSize: 12,
        lineHeight: 15,
        color: 'white',
    },
    bestscore: {
        fontSize: 22,
        lineHeight: 28,
        color: 'white',
    },
    currentscore: {
        fontSize: 22,
        lineHeight: 28,
        color: 'white',
    },

    ballpowerup: {
        position: 'absolute',
        flex: 1,
    },
})

export { Ball, Floor, ScoreBar, AimLine, BoxTile, BallPowerUp, SpeedUpButton }

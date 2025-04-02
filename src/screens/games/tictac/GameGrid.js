import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Animated,
    StyleSheet,
    Dimensions,
    View,
    TouchableOpacity,
} from 'react-native'

import colors from '../../../utils/colors'

const GameGrid = ({
    currentPlayer,
    setCurrentPlayer,
    gameGridPlays,
    setGameGridPlays,
    winnerPlayer,
    setWinnerPlayer,
    hasSomeoneWon,
    hasGameStarted,
    checkIfGameEnded,
    setHasGameEnded,
}) => {
    const animatedRow = new Animated.Value(0)
    const animatedColumn = new Animated.Value(0)

    const handleColumnAnimation = () =>
        Animated.timing(animatedColumn, {
            toValue: 312,
            duration: 1000,
            useNativeDriver: false,
        }).start()

    const handleRowAnimation = () => {
        const widthFromDimensions = Dimensions.get('window').width * 0.85

        Animated.timing(animatedRow, {
            toValue: widthFromDimensions,
            useNativeDriver: false,
            duration: 1000,
        }).start()
    }

    const handleGamePlay = (row, playIndex) => {
        const oldGameGridPlaysRowToChange = gameGridPlays[row]
        const newGameGridPlaysOnRow = oldGameGridPlaysRowToChange.map(
            (play, index) => (index === playIndex ? currentPlayer : play)
        )

        const newGameGridPlays = gameGridPlays.map((rowPlays, index) =>
            index === row ? newGameGridPlaysOnRow : rowPlays
        )

        const newCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X'

        setGameGridPlays(newGameGridPlays)
        setCurrentPlayer(newCurrentPlayer)

        if (checkIfGameEnded(newGameGridPlays)) setHasGameEnded(true)
        if (hasSomeoneWon(newGameGridPlays)) {
            setWinnerPlayer(currentPlayer)
            setHasGameEnded(true)
        }
    }

    useEffect(() => {
        handleColumnAnimation()
        handleRowAnimation()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.TilesWrapper}>
                <View style={styles.row}>
                    {gameGridPlays[0].map((play, index) => (
                        <TouchableOpacity
                            style={styles.tileTouch}
                            key={index}
                            disabled={
                                !!play || !!winnerPlayer || !hasGameStarted
                            }
                            onPress={() => handleGamePlay(0, index)}
                        >
                            {play === 'X' && (
                                <Icon
                                    name="close"
                                    size={70}
                                    color={colors.darkGrey}
                                />
                            )}
                            {play === 'O' && (
                                <Icon
                                    name="circle-outline"
                                    size={60}
                                    color={colors.lightYellow}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.row}>
                    {gameGridPlays[1].map((play, index) => (
                        <TouchableOpacity
                            style={styles.tileTouch}
                            key={index}
                            disabled={
                                !!play || !!winnerPlayer || !hasGameStarted
                            }
                            onPress={() => handleGamePlay(1, index)}
                        >
                            {play === 'X' && (
                                <Icon
                                    name="close"
                                    size={70}
                                    color={colors.darkGrey}
                                />
                            )}
                            {play === 'O' && (
                                <Icon
                                    name="circle-outline"
                                    size={60}
                                    color={colors.lightYellow}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.row}>
                    {gameGridPlays[2].map((play, index) => (
                        <TouchableOpacity
                            style={styles.tileTouch}
                            key={index}
                            disabled={
                                !!play || !!winnerPlayer || !hasGameStarted
                            }
                            onPress={() => handleGamePlay(2, index)}
                        >
                            {play === 'X' && (
                                <Icon
                                    name="close"
                                    size={70}
                                    color={colors.darkGrey}
                                />
                            )}
                            {play === 'O' && (
                                <Icon
                                    name="circle-outline"
                                    size={60}
                                    color={colors.lightYellow}
                                />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.rowLineWrapper}>
                <View style={{ ...styles.rowLine }} />
                <View style={{ ...styles.rowLine }} />
            </View>

            <View style={styles.columnWrapper}>
                <View style={{ ...styles.column }} />
                <View style={{ ...styles.column }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowLine: {
        height: 7,
        backgroundColor: colors.primaryDarker,
        marginTop: 100,
        color: '#0DA192',
    },
    column: {
        width: 7,
        backgroundColor: colors.primaryDarker,
        marginLeft: '32%',
    },
    //my styles
    container: {
        height: 313,
        position: 'relative',
    },
    TilesWrapper: {
        width: '85%',
        height: 313,
        zIndex: 1,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        height: 100,
    },
    tileTouch: {
        // flex-basis: 33.33%;
        width: '33.33%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    columnWrapper: {
        top: 0,
        left: 0,
        flexDirection: 'row',
        flex: 1,
        width: '85%',
        height: 313,
        position: 'absolute',
        zIndex: 0,
    },
    rowLineWrapper: {
        top: 0,
        left: 0,
        flex: 1,
        width: '85%',
        height: 313,
        position: 'absolute',
        zIndex: 0,
    },
})

// const Container = styled.View`
//     height: 313;
//     position: relative;
//     backgroundColor:red
// `

// const Row = styled.View`
//     flex-direction: row;
//     flex: 1;
//     width: 100%;
//     height: 100;
// `

// const TilesWrapper = styled.View`
//     width: 85%;
//     height: 313;
//     z-index: 1;
// `

// const Tile = styled.TouchableOpacity`
//     flex-basis: 33.33%;
//     height: 100;
//     align-items: center;
//     justify-content: center;
// `

// const ColumnWrapper = styled.View`
//     top: 0;
//     left: 0;
//     flex-direction: row;
//     flex: 1;
//     width: 85%;
//     height: 313;
//     position: absolute;
//     z-index: 0;
// `

// const RowLineWrapper = styled.View`
//     top: 0;
//     left: 0;
//     flex: 1;
//     width: 85%;
//     height: 313;
//     position: absolute;
//     z-index: 0;
// `

export default GameGrid

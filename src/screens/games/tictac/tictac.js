import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    StatusBar,
    Alert,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'

import colors from '../../../utils/colors'
import { addNewGamePlayed } from '../AsyncStorage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import GameGrid from './GameGrid'

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const App = () => {
    const [hasGameEnded, setHasGameEnded] = useState(false)
    const [hasGameStarted, setHasGameStarted] = useState(false)
    const [winnerPlayer, setWinnerPlayer] = useState(null)
    const [currentPlayer, setCurrentPlayer] = useState('O')
    const [firsPlayerScore, setFirstPlayerScore] = useState(null)
    const [secondPlayerScore, setSecondPlayerScore] = useState(null)
    const [gameGridPlays, setGameGridPlays] = useState(initialGameState)
    const navigation = useNavigation()

    useEffect(() => {
        if (hasGameEnded) addNewGamePlayed()

        if (winnerPlayer && winnerPlayer === 'X') {
            setFirstPlayerScore(firsPlayerScore + 1 || 1)
        } else if (winnerPlayer && winnerPlayer === 'O') {
            setSecondPlayerScore(secondPlayerScore + 1 || 1)
        }
    }, [winnerPlayer])

    const restartGame = () => {
        setHasGameStarted(true)
        setGameGridPlays(initialGameState)
        setWinnerPlayer(null)
        setCurrentPlayer('O')
        setHasGameEnded(false)
    }

    const handleNewGame = () => {
        if (hasGameStarted && !winnerPlayer && !hasGameEnded) {
            Alert.alert(
                'Are you sure?',
                'If you restart the game the current progress will be lost!',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Restart',
                        onPress: () => restartGame(),
                    },
                ],
                { cancelable: true }
            )
        } else {
            restartGame()
        }
    }

    const checkIfGameEnded = (currentGameGridPlays) => {
        const firstRow = currentGameGridPlays[0]
        const secondRow = currentGameGridPlays[1]
        const thirdRow = currentGameGridPlays[2]

        return (
            [...firstRow, ...secondRow, ...thirdRow].filter((play) => !!play)
                .length === 9
        )
    }

    const hasSomeoneWon = (currentGameGridPlays) => {
        const hasSomeoneWonByRow = (row) =>
            currentGameGridPlays[row].filter((play) => play === currentPlayer)
                .length === 3

        const hasSomeoneWonByColumn = (column) =>
            currentGameGridPlays
                .map((rowPlay) => rowPlay[column] === currentPlayer)
                .filter((winCondition) => winCondition === true).length === 3

        const hasSomeoneWonOnDiagonal = () => {
            const checkIfPlaysAreTheSame = (accumulator, currentValue) =>
                accumulator === currentValue ? currentValue : false

            const firstRow = currentGameGridPlays[0]
            const secondRow = currentGameGridPlays[1]
            const thirdRow = currentGameGridPlays[2]

            const fromLeftDiagonalPlay = [
                firstRow[0],
                secondRow[1],
                thirdRow[2],
            ]
            const fromRightDiagonalPlay = [
                firstRow[2],
                secondRow[1],
                thirdRow[0],
            ]

            if (
                fromLeftDiagonalPlay.reduce(checkIfPlaysAreTheSame) ||
                fromRightDiagonalPlay.reduce(checkIfPlaysAreTheSame)
            )
                return true

            return false
        }

        for (const currentRowOrColumn of [0, 1, 2]) {
            if (
                hasSomeoneWonByRow(currentRowOrColumn) ||
                hasSomeoneWonByColumn(currentRowOrColumn) ||
                hasSomeoneWonOnDiagonal()
            )
                return true
        }

        return false
    }

    const renderPlayerIcon = (player) =>
        player === 'X' ? (
            <Icon name="close" size={40} color={colors.primary} />
        ) : (
            <Icon name="circle-outline" size={40} color={colors.darkGrey} />
        )

    return (
        <View style={styles.Container}>
            <StatusBar
                backgroundColor={colors.primary}
                barStyle="light-content"
            />
            <View
                style={{
                    height: 50,
                    width: 50,
                    position: 'absolute',
                    left: 15,
                }}
            >
                <MaterialIcons
                    onPress={() => navigation.goBack()}
                    name={'arrow-back-ios'}
                    style={{
                        color: colors.primary,
                        padding: 10,
                        left: 0,
                        position: 'absolute',
                        fontSize: 28,
                        lineHeight: 35,
                    }}
                />
            </View>
            <View style={{ margin: -10 }} />
            <GameGrid
                currentPlayer={currentPlayer}
                gameGridPlays={gameGridPlays}
                setGameGridPlays={setGameGridPlays}
                setCurrentPlayer={setCurrentPlayer}
                hasSomeoneWon={hasSomeoneWon}
                winnerPlayer={winnerPlayer}
                setWinnerPlayer={setWinnerPlayer}
                hasGameStarted={hasGameStarted}
                hasGameEnded={hasGameEnded}
                checkIfGameEnded={checkIfGameEnded}
                setHasGameEnded={setHasGameEnded}
            />
            <View style={styles.CurrentPlayerInfoWrapper}>
                {!hasGameStarted ? (
                    <Text style={styles.CurrentPlayerInfoText}>
                        Start a new game!
                    </Text>
                ) : winnerPlayer ? (
                    <>
                        <Text style={styles.CurrentPlayerInfoText}>
                            {'Player '}
                        </Text>
                        {renderPlayerIcon(winnerPlayer)}
                        <Text style={styles.CurrentPlayerInfoText}>
                            {' won!'}
                        </Text>
                    </>
                ) : hasGameEnded ? (
                    <Text style={styles.CurrentPlayerInfoText}>
                        {'The game tied!'}
                    </Text>
                ) : (
                    <>
                        <Text style={styles.CurrentPlayerInfoText}>
                            {'Current player: '}
                        </Text>
                        {renderPlayerIcon(currentPlayer)}
                    </>
                )}
            </View>
            <TouchableOpacity
                style={styles.RestartGame}
                onPress={handleNewGame}
            >
                <Text style={styles.RestartGameText}>
                    {hasGameStarted ? 'RESTART GAME' : 'START GAME'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    RestartGame: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 6,
    },
    RestartGameText: {
        color: colors.white,
        fontSize: 16,
    },

    CurrentPlayerInfoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '80%',
        flexWrap: 'wrap',
    },
    CurrentPlayerInfoText: {
        color: colors.primary,
        fontSize: 26,
        fontWeight: 'bold',
    },
    Container: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default App

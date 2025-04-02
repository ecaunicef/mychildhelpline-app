import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Alert,
} from 'react-native'

// The 9 squares in the Tic-Tac-Toe grid
const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]
import AntDesign from 'react-native-vector-icons/AntDesign'
import WinOverlay from './win_overlay'
const App = () => {
    const [board, setBoard] = useState(Array(9).fill(null)) // board holds the state of the squares
    const [isPlayerTurn, setIsPlayerTurn] = useState(true) // Track whose turn it is, true = player, false = computer
    const navigation = useNavigation()
    // Check for game status (winner or draw)
    const checkWinner = (board) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a] // Return winner: 'X' or 'O'
            }
        }

        if (board.every((square) => square !== null)) {
            return 'DRAW' // If all squares are filled and no winner, it's a draw
        }

        return null // No winner yet
    }

    const handlePlayerMove = (index) => {
        if (board[index] || !isPlayerTurn) return // Prevent moving in a filled square or if it's not player's turn

        const newBoard = [...board]
        newBoard[index] = 'X' // Player moves as 'X'
        setBoard(newBoard)
        setIsPlayerTurn(false) // Switch turn to computer
    }

    const handleComputerMove = () => {
        // Find empty squares
        const emptySquares = board.reduce((acc, val, idx) => {
            if (val === null) acc.push(idx)
            return acc
        }, [])

        // Randomly choose an empty square for the computer
        const randomIndex =
            emptySquares[Math.floor(Math.random() * emptySquares.length)]

        const newBoard = [...board]
        newBoard[randomIndex] = 'O' // Computer moves as 'O'
        setBoard(newBoard)
        setIsPlayerTurn(true) // Switch turn back to player
    }

    // Check if game is over after each move
    useEffect(() => {
        const winner = checkWinner(board)
        if (winner) {
            if (winner === 'DRAW') {
                Alert.alert('Game Over', "It's a Draw!", [
                    { text: 'OK', onPress: resetGame },
                ])
            } else {
                Alert.alert('Game Over', `${winner} Wins!`, [
                    { text: 'OK', onPress: resetGame },
                ])
            }
        } else if (!isPlayerTurn) {
            // Computer's move after player's turn
            handleComputerMove()
        }
    }, [board, isPlayerTurn])

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setIsPlayerTurn(true)
    }

    const renderSquare = (index) => {
        return (
            <TouchableOpacity
                style={styles.square}
                onPress={() => handlePlayerMove(index)}
            >
                <Text style={styles.squareText}>{board[index]}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={{ top: 15, position: 'absolute', left: 15 }}
                onPress={() => {
                    // navigation.navigate('SplashScreen')
                    navigation.goBack()
                }}
            >
                <AntDesign name="left" size={24} />
            </TouchableOpacity>
            <View style={styles.board}>
                {squares.map((square, index) => (
                    <View key={index} style={styles.squareContainer}>
                        {renderSquare(index)}
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetText}>Reset Game</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width - 40,
        marginBottom: 20,
    },
    squareContainer: {
        width: '33.33%',
        height: Dimensions.get('window').width / 3 - 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        fontSize: 48,
        color: '#333',
    },
    resetButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'tomato',
        borderRadius: 5,
    },
    resetText: {
        color: '#fff',
        fontSize: 18,
    },
})

export default App

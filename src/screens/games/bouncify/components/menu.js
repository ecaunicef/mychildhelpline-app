import React, { PureComponent } from 'react'
import { ScrollView, View, StyleSheet, Pressable } from 'react-native'
import Button from './button'
import { Config } from '../config'
import * as Animatable from 'react-native-animatable'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class MainMenu extends PureComponent {
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >
                {this.props.gamesPlayed == 0 && (
                    <Animatable.Text
                        useNativeDriver={true}
                        style={styles.title}
                        animation="pulse"
                        iterationCount="infinite"
                        direction="alternate"
                    >
                        Bouncify
                    </Animatable.Text>
                )}

                {this.props.gamesPlayed > 0 && (
                    <View style={styles.textContainer}>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.lastScore}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            Last Score
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.lastScore}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            {this.props.lastScore}
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.score}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            Best Lines
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.score}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            {this.props.topScore}
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.score}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            Best Bricks
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver={true}
                            style={styles.score}
                            animation=""
                            iterationCount="infinite"
                            direction="alternate"
                        >
                            {this.props.topScoreBricks}
                        </Animatable.Text>
                    </View>
                )}

                <Button
                    onPress={(_) => this.props.onPlayGame(Config.MODE_LINES)}
                >
                    {this.props.gamesPlayed ? 'Restart Lines' : 'Play Lines'}
                </Button>
                <Button
                    onPress={(_) => this.props.onPlayGame(Config.MODE_BRICKS)}
                >
                    {this.props.gamesPlayed ? 'Restart Bricks' : 'Play Bricks'}
                </Button>

                <Pressable
                    onPress={() => this.props.onBack()}
                    style={{
                        height: 50,
                        width: 50,
                        position: 'absolute',
                        left: 15,
                        top: Platform.OS == 'android' ? 10 : 40,
                    }}
                >
                    <MaterialIcons
                        onPress={() => this.props.onBack()}
                        name={'arrow-back-ios'}
                        style={{
                            color: '#fff',
                            padding: 10,
                            left: 0,
                            position: 'absolute',
                            fontSize: 28,
                            lineHeight: 35,
                        }}
                    />
                </Pressable>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    contentContainer: {
        maxWidth: 400,
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 70,
        lineHeight: 87.5,
        color: '#FFF',
    },
    score: {
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 24,
        lineHeight: 30,
        color: '#FFF',
    },
    lastScore: {
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 52,
        lineHeight: 65,
        color: '#FFF',
    },
    textContainer: {
        alignItems: 'center',
    },
})

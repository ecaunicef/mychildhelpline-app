import React from 'react'
import {
    Text,
    ActivityIndicator,
    StyleSheet,
    Modal,
    View,
    Image,
    Pressable,
    ImageBackground,
} from 'react-native'
import { PicturePuzzle, PuzzlePieces } from 'react-native-picture-puzzle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    row: { flexDirection: 'row', justifyContent: 'flex-end' },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 10.0,
    },
})

function shuffle(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

export default function App() {
    const originalPieces = React.useMemo<PuzzlePieces>(
        () => [...Array(16)].map((_, i) => i),
        []
    )
    const shuffledPieces = React.useMemo<PuzzlePieces>(() => {
        const p = [...originalPieces]
        shuffle(p)
        return p
    }, [originalPieces])
    const [hidden, setHidden] = React.useState<number | null>(0)
    const [modal, setModal] = React.useState<boolean | false>(false)
    const navigation = useNavigation()
    const [pieces, setPieces] = React.useState<PuzzlePieces>(shuffledPieces)
    const source = React.useMemo(
        () => ({
            uri: 'https://wallpaperaccess.com/full/1421195.jpg',
        }),
        []
    )
    const renderLoading = React.useCallback(
        (): JSX.Element => (
            <View style={[StyleSheet.absoluteFill, styles.center]}>
                <ActivityIndicator />
            </View>
        ),
        []
    )
    const onChange = React.useCallback(
        (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
            setPieces([...nextPieces])
            setHidden(nextHidden)
        },
        [setPieces, setHidden]
    )
    const solve = React.useCallback(() => {
        setPieces(originalPieces)
        setHidden(null)
    }, [setPieces, originalPieces])
    const retry = React.useCallback(() => {
        setPieces(shuffledPieces)
        setHidden(0)
    }, [setPieces, shuffledPieces])
    return (
        <View style={styles.container}>
            <ImageBackground
                style={{
                    flex: 1,
                }}
                resizeMode="stretch"
                source={require('../../../../assets/image/BeforeWeBegin.png')}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        margin: 10,
                        justifyContent: 'space-between',
                    }}
                >
                    <Pressable onPress={() => navigation.goBack()}>
                        <MaterialIcons
                            onPress={() => navigation.goBack()}
                            name={'arrow-back-ios'}
                            style={{
                                color: '#000000',
                                padding: 10,
                                fontSize: moderateScale(28),
                                lineHeight: moderateScale(35),
                            }}
                        />
                    </Pressable>
                    <Text
                        style={{
                            alignSelf: 'center',
                            fontSize: moderateScale(26),
                            lineHeight: moderateScale(32),
                            color: '#000000',
                            fontFamily: 'OpenSans-MediumRegular',
                        }}
                    >
                        Puzzle
                    </Text>
                    <Pressable onPress={() => alert('hamid')}>
                        <MaterialIcons
                            style={{
                                color: '#00000',
                                padding: 10,
                                paddingRight: 20,
                                fontSize: moderateScale(28),
                                lineHeight: moderateScale(35),
                            }}
                            onPress={() => setModal(true)}
                            name="info"
                        />
                    </Pressable>
                </View>
                <View style={styles.center}>
                    <PicturePuzzle
                        style={styles.shadow}
                        renderLoading={renderLoading}
                        pieces={pieces}
                        hidden={hidden}
                        onChange={onChange}
                        size={320}
                        source={source}
                    />
                </View>
                <Modal
                    visible={modal}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => setModal(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            backgroundColor: 'rgba(52, 52, 52, 0.8)',
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                margin: 20,
                                borderRadius: 25,
                                borderTopRightRadius: 25,
                            }}
                        >
                            <View style={{ margin: 10, marginTop: 20 }}>
                                {
                                    <View
                                        style={{
                                            backgroundColor: '#fff',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                marginTop: 0,
                                                fontSize: moderateScale(20),
                                                lineHeight: moderateScale(25),
                                                color: '#484848',
                                                fontWeight: 'bold',
                                                marginLeft: 0,
                                                textAlign: 'center',
                                                fontFamily: 'helveticaneue',
                                            }}
                                        >
                                            Original Image
                                        </Text>
                                        <MaterialIcons
                                            onPress={() => setModal(false)}
                                            name={'clear'}
                                            style={{
                                                color: '#484848',
                                                fontSize: moderateScale(28),
                                                lineHeight: moderateScale(35),
                                                margin: 0,
                                            }}
                                        />
                                    </View>
                                }
                                <View
                                    style={{
                                        marginHorizontal: 0,
                                        marginTop: 0,
                                        marginBottom: 0,
                                    }}
                                >
                                    <Image
                                        resizeMode="contain"
                                        style={{
                                            height: 300,
                                            width: 300,
                                            borderRadius: 3,
                                            margin: 5,
                                            alignSelf: 'center',
                                        }}
                                        source={{
                                            uri: 'https://wallpaperaccess.com/full/1421195.jpg',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    )
}

function alert(arg0: string): void {}

import * as React from 'react'
import {
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    Text,
    StyleSheet,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const deviceWidth = Dimensions.get('window').width
import { statusBarHeight } from '../../utils/constants'
import Layout from '../../components/common/Layout/Layout'

export default function GameScreen(props) {
    const { navigate, goBack } = props.navigation
    const [gamelist, setGameList] = React.useState([
        {
            title: 'Tic Tac Toe',
            subtitle: 'Multiplayer',
            image: require('../../../assets/image/tic.png'),
            key: '1',
            press: 'tictoc',
        },
        {
            title: 'Tic Tac Toe',
            subtitle: 'Computer player',
            image: require('../../../assets/image/tic.png'),
            key: '2',
            press: 'tictactoai',
        },
    ])

    return (
        <Layout BackButton={true}>
            <View style={{ flex: 1 }}>
                <View style={styles.backView}>
                    <MaterialIcons
                        onPress={() => goBack()}
                        name={'arrow-back-ios'}
                        style={styles.backIcon}
                    />
                </View>
                <View style={styles.flatListView}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        data={gamelist}
                        removeClippedSubviews={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{}}>
                                    <TouchableOpacity
                                        onPress={() => navigate(item.press)}
                                        style={styles.touchView}
                                    >
                                        <View style={styles.subView}>
                                            <Text style={styles.sub}>
                                                {item.subtitle}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    backView: {
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'space-between',
        flex: 1,
    },
    backIcon: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 30,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        resizeMode: 'contain',
    },
    statusBar: {
        backgroundColor: 'transparent',
        height: statusBarHeight,
    },
    flatListView: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50,
    },
    touchView: {
        alignItems: 'center',
        marginTop: 20,
    },
    subView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        width: deviceWidth / 1.3,
        padding: 10,
        marginLeft: 15,
        borderRadius: 5,
    },
    sub: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 25,
        color: '#686868',
        margin: 3,
        fontWeight: 'bold',
        fontFamily: 'helveticaneue',
    },
})

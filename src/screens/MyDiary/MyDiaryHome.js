import * as React from 'react'
import {
    View,
    ScrollView,
    Share,
    Image,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Modal,
    Dimensions,
    Text,
    StatusBar,
    Alert,
    Platform,
    Pressable,
    StyleSheet,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import SafeAreaView from 'react-native-safe-area-view'

import { Menu, MenuItem } from 'react-native-material-menu'

import moment from 'moment'
import { Strings } from '../../utils/Strings'
import { statusBarHeight } from '../../utils/constants'
import AsyncStorageService from '../../utils/AsyncStorage'
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

export default function MyDairyHome(props) {
    const navigation = useNavigation()

    const { navigate } = props.navigation
    const [diaryList, setDiaryList] = React.useState([])
    const [colorList, setColorList] = React.useState([
        { color: '#FF6666', key: '1' },
        { color: 'yellow', key: '2' },
        { color: 'orange', key: '3' },
        { color: 'pink', key: '4' },
        { color: '#eee', key: '5' },
        { color: '#90EE90', key: '6' },
        { color: 'black', key: '7' },
        { color: 'grey', key: '8' },
        { color: 'purple', key: '9' },
    ])
    const [checked, setChecked] = React.useState('pink')
    const [addmodal, setModal] = React.useState(false)
    const [title, onChangeTitle] = React.useState('')
    const [content, onChangeContent] = React.useState('')
    const [Snackvisible, setSnackVisible] = React.useState(false)
    const onToggleSnackBar = () => setSnackVisible(!Snackvisible)

    React.useEffect(() => {
        //diary list store
        async function getDiaryItems() {
            let diaryList = await AsyncStorageService.getItem('diaryList')
            if (diaryList != null && diaryList.length != 0) {
                setDiaryList(diaryList)
            }
        }
        getDiaryItems()
    }, [])

    const onSave = async () => {
        //save diary list
        if (title.trim() == '' || content.trim() == '') {
            onToggleSnackBar()
            return
        }
        setModal(false)

        let array = {
            id: Math.random().toString(36).substr(2, 9),
            title: title,
            desc: content,
            date: moment().format('MMM D, YYYY'),
            color: checked,
        }
        let diaryList = await AsyncStorageService.getItem('diaryList')
        if (diaryList == null || diaryList.length === 0) {
            diaryList = []

            if (diaryList == null || diaryList.length == 0)
                setDiaryList([array])
        }
        let obj = array
        diaryList.push(obj)
        await AsyncStorageService.setItem('diaryList', diaryList)
        setDiaryList()
        onChangeTitle('')
        onChangeContent('')
        setChecked('pink')
        setDiaryList(diaryList)
    }

    const deleteItem = (item) => {
        //delete dairy item
        let diaryList = AsyncStorageService.getItem('diaryList')
        let filteredPeople = diaryList.filter((items) => items.id !== item.id)
        setDiaryList(filteredPeople)
        AsyncStorageService.setItem('diaryList', filteredPeople)
        hideMenu(item.id)
    }

    const shareItem = async (item) => {
        //share text
        hideMenu(item.id)

        Alert.alert(
            'WARNING',
            'You are about to share personal information. Are you sure you want to share?',
            [
                { text: 'Yes', onPress: () => shareit(item) },
                { text: 'No', onPress: () => console.log('cancel') },
            ],
            { cancelable: false }
        )
    }

    const shareit = async (item) => {
        try {
            const result = await Share.share({
                message: `${item.title}: ${item.desc} ...from my childline`,
            })
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert('', error.message)
        }
    }

    const deleteAll = () => {
        Alert.alert(
            '',
            'Are you sure, you want to delete all notes ?',
            [
                { text: 'Yes', onPress: () => deleteSyn() },
                { text: 'No', onPress: () => console.log('cancel') },
            ],
            { cancelable: false }
        )
    }

    const deleteSyn = () => {
        AsyncStorageService.setItem('diaryList', [])
        setDiaryList([])
    }

    let _menu = []

    const hideMenu = (item) => {
        _menu[item].hide()
    }

    const showMenu = (item) => {
        _menu[item].show()
    }

    const displayDropdown = (item, data) => {
        // dropdown
        return (
            <Menu
                ref={(menu) => {
                    _menu[item] = menu
                }}
                anchor={
                    <SimpleLineIcons
                        name={'options-vertical'}
                        style={{
                            color: data.color == 'black' ? '#fff' : '#28282B',
                            fontSize: 18,
                            lineHeight: 2.5,
                            padding: 10,
                        }}
                        onRequestClose={() => hideMenu(item)}
                        onPress={() => showMenu(item)}
                    />
                }
            >
                <MenuItem onPress={() => shareItem(data)}>{'Share'}</MenuItem>
                <MenuItem onPress={() => deleteItem(data)}>{'Delete'}</MenuItem>
                <MenuItem
                    textStyle={{ color: 'red' }}
                    onPress={() => hideMenu(item)}
                >
                    {'Close'}
                </MenuItem>
            </Menu>
        )
    }

    //view diary lists
    return (
        <>
            {Platform.OS == 'android' ? null : (
                <View style={styles.statusBar} />
            )}
            <StatusBar barStyle="light-content" backgroundColor="#FF8AA2" />

            <SafeAreaView style={styles.mianContainer}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.1 }}
                    end={{ x: 0.9, y: 1.0 }}
                    locations={[0.1, 0.45, 1]}
                    colors={['#FF8AA2', '#ffe7ec', '#fff']}
                >
                    <View>
                        <View style={styles.headerView}>
                            <MaterialIcons
                                onPress={() => navigation.goBack()}
                                name={'arrow-back-ios'}
                                style={styles.headerIcon}
                            />
                            <Text style={styles.diaryText}>
                                {Strings.mydiary}
                            </Text>
                            <View style={styles.row}>
                                <MaterialIcons
                                    onPress={() => deleteAll()}
                                    name={'clear'}
                                    style={styles.clear}
                                />
                            </View>
                        </View>
                    </View>
                    <ScrollView>
                        <Pressable onPress={() => {}} style={styles.press} />
                        <View style={styles.diaryView}>
                            {diaryList.length > 0 ? (
                                <View style={styles.gap}>
                                    <FlatList
                                        numColumns={2}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) =>
                                            index.toString()
                                        }
                                        data={diaryList}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={styles.dropView}>
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            navigate(
                                                                'MyDiaryDetails',
                                                                { item }
                                                            )
                                                        }
                                                        style={styles.dropView2}
                                                    >
                                                        <View
                                                            style={{
                                                                backgroundColor:
                                                                    item.color,
                                                                borderRadius: 10,
                                                                width:
                                                                    deviceWidth /
                                                                    2.5,
                                                                height: 150,
                                                            }}
                                                        >
                                                            <View
                                                                style={
                                                                    styles.dropView4
                                                                }
                                                            >
                                                                <View
                                                                    style={
                                                                        styles.dropView5
                                                                    }
                                                                >
                                                                    <Text
                                                                        numberOfLines={
                                                                            2
                                                                        }
                                                                        style={{
                                                                            margin: 10,
                                                                            fontWeight:
                                                                                'bold',
                                                                            color:
                                                                                item.color ==
                                                                                'black'
                                                                                    ? '#fff'
                                                                                    : '#000',
                                                                            fontSize: 16,
                                                                            lineHeight: 20,
                                                                            fontFamily:
                                                                                'helveticaneue',
                                                                        }}
                                                                    >
                                                                        {
                                                                            item.title
                                                                        }
                                                                    </Text>
                                                                </View>
                                                                <View
                                                                    style={{}}
                                                                >
                                                                    {displayDropdown(
                                                                        item.id,
                                                                        item
                                                                    )}
                                                                </View>
                                                            </View>
                                                            <Text
                                                                numberOfLines={
                                                                    2
                                                                }
                                                                style={{
                                                                    marginLeft: 10,
                                                                    marginRight: 10,
                                                                    color:
                                                                        item.color ==
                                                                        'black'
                                                                            ? '#fff'
                                                                            : '#484848',
                                                                    fontFamily:
                                                                        'helveticaneue',
                                                                }}
                                                            >
                                                                {item.desc}
                                                            </Text>
                                                            <Text
                                                                style={{
                                                                    marginTop: 10,
                                                                    textAlign:
                                                                        'right',
                                                                    color:
                                                                        item.color ==
                                                                        'black'
                                                                            ? '#fff'
                                                                            : '#484848',
                                                                    marginRight: 15,
                                                                    fontSize: 12,
                                                                    lineHeight: 15,
                                                                    fontFamily:
                                                                        'helveticaneue',
                                                                }}
                                                            >
                                                                {item.date}
                                                            </Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        }}
                                    />
                                </View>
                            ) : (
                                <View style={styles.emptyView}>
                                    <Image
                                        resizeMode="contain"
                                        style={styles.emptyImg}
                                    />
                                    <Text style={styles.emptyText1}>
                                        {Strings.emptyDairy}
                                    </Text>
                                    <Text style={styles.emptyText2}>
                                        {Strings.whynot}
                                    </Text>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                    <Pressable
                        onPress={() => setModal(true)}
                        style={styles.pressAdd}
                    >
                        <MaterialIcons
                            onPress={() => setModal(true)}
                            name={'add'}
                            style={styles.presstext}
                        />
                    </Pressable>
                </LinearGradient>
                <Modal
                    visible={addmodal}
                    transparent={true}
                    animationType={'fade'}
                    onRequestClose={() => setModal(false)}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'padding' : null}
                        style={styles.modalView}
                    >
                        <View style={styles.modalView1}>
                            <View style={styles.modalView2}>
                                {
                                    <View style={styles.modalView3}>
                                        <Text style={styles.modalText}>
                                            {Strings.adddiary}
                                        </Text>
                                        <MaterialIcons
                                            onPress={() => setModal(false)}
                                            name={'clear'}
                                            style={styles.iconModal}
                                        />
                                    </View>
                                }
                                <View style={styles.marginView}>
                                    <TextInput
                                        style={styles.input}
                                        maxLength={40}
                                        onChangeText={onChangeTitle}
                                        value={title}
                                        placeholderTextColor={'#a8a8a8'}
                                        placeholder={Strings.title}
                                    />
                                    <Text
                                        style={{
                                            color: '#6D6E71',
                                            textAlign: 'right',
                                            marginRight: 10,
                                            fontSize: 12,
                                            lineHeight: 15,
                                            fontFamily: 'helveticaneue',
                                        }}
                                    >
                                        {title.length}/40
                                    </Text>

                                    <TextInput
                                        style={styles.input}
                                        maxLength={1000}
                                        onChangeText={onChangeContent}
                                        value={content}
                                        placeholderTextColor={'#a8a8a8'}
                                        placeholder={Strings.Message}
                                    />
                                    <Text
                                        style={{
                                            color: '#6D6E71',
                                            textAlign: 'right',
                                            marginRight: 10,
                                            fontSize: 12,
                                            lineHeight: 15,
                                            fontFamily: 'helveticaneue',
                                        }}
                                    >
                                        {content.length}/1000
                                    </Text>
                                </View>
                                <View>
                                    <FlatList
                                        style={styles.flatmargin}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(item, index) =>
                                            index.toString()
                                        }
                                        data={colorList}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        setChecked(item.color)
                                                    }
                                                    style={{
                                                        height:
                                                            checked ==
                                                            item.color
                                                                ? 60
                                                                : 40,
                                                        alignSelf: 'center',
                                                        borderRadius: 30,
                                                        marginLeft: 10,
                                                        justifyContent:
                                                            'center',
                                                        width:
                                                            checked ==
                                                            item.color
                                                                ? 60
                                                                : 40,
                                                        backgroundColor:
                                                            item.color,
                                                    }}
                                                >
                                                    {checked == item.color ? (
                                                        <Image
                                                            resizeMode="contain"
                                                            style={
                                                                styles.checkImg
                                                            }
                                                        />
                                                    ) : null}
                                                </TouchableOpacity>
                                            )
                                        }}
                                    />
                                </View>

                                <View>
                                    <Text
                                        onPress={() => onSave()}
                                        style={styles.save}
                                    >
                                        {Strings.save}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#FF8AA2',
        height: statusBarHeight,
    },
    mianContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerView: {
        flexDirection: 'row',
        marginTop: 0,
        justifyContent: 'space-between',
    },
    headerIcon: {
        color: '#fff',
        padding: 20,
        fontSize: 28,
        lineHeight: 35,
    },
    diaryText: {
        fontSize: 24,
        lineHeight: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 15,
        color: '#fff',
        fontFamily: 'helveticaneue',
    },
    row: {
        flexDirection: 'row',
    },
    clear: {
        color: '#fff',
        fontSize: 28,
        lineHeight: 35,
        margin: 20,
        marginLeft: 10,
    },
    press: {
        height: 90,
    },
    diaryView: {
        margin: 10,
        height: deviceHeight / 1.4,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingBottom: 0,
    },
    gap: { marginTop: 50 },
    dropView: { width: '50%' },
    dropView2: {
        alignItems: 'center',
        marginTop: 20,
    },
    dropView4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropView5: {
        width: '80%',
    },

    emptyView: {
        height: deviceHeight / 1.4,
    },
    emptyImg: {
        alignSelf: 'center',
        height: 240,
        width: 240,
        marginTop: 50,
    },
    emptyText1: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#484848',
        fontSize: 28,
        lineHeight: 35,
        marginTop: 20,
        fontFamily: 'helveticaneue',
    },
    emptyText2: {
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 25,
        color: '#484848',
        marginTop: 5,
        fontFamily: 'helveticaneue',
    },
    pressAdd: {
        backgroundColor: '#FF8AA2',
        height: 60,
        width: 60,
        position: 'absolute',
        right: 10,
        bottom: 10,
        justifyContent: 'center',
        borderRadius: 30,
    },
    presstext: {
        color: '#fff',
        margin: 0,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 32,
        lineHeight: 40,
    },
    modalView: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    modalView1: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    modalView2: {
        margin: 10,
        marginTop: 30,
    },
    modalView3: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    modalText: {
        marginTop: 10,
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#484848',
        fontFamily: 'helveticaneue',
    },
    iconModal: {
        color: '#484848',
        fontSize: 28,
        lineHeight: 35,
        margin: 10,
    },
    marginView: {
        marginHorizontal: 10,
        marginTop: 20,
    },
    label: {
        color: '#222',
        fontSize: 14,
        lineHeight: 18,
        marginBottom: 5,
    },
    input: {
        height: 45,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '100%',
        borderRadius: 5,
        borderColor: '#333333',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: 14,
        lineHeight: 18,
    },
    flatmargin: {
        margin: 20,
    },
    checkImg: {
        alignSelf: 'center',
        height: 30,
        width: 30,
        margin: 5,
        alignSelf: 'center',
    },
    save: {
        backgroundColor: '#ffd100',
        marginBottom: 10,
        color: '#141414',
        alignSelf: 'center',
        paddingRight: 35,
        paddingLeft: 35,
        padding: 10,
        fontSize: 16,
        lineHeight: 20,
        overflow: 'hidden',
        fontWeight: '700',
        borderRadius: 20,
        fontFamily: 'helveticaneue',
    },
})

import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    TextInput,
    Dimensions,
    Image,
    Alert,
    Share,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomText from '../../components/basedComponents/customText'
import { moderateScale, scale } from 'react-native-size-matters'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Layout from '../../components/common/Layout/Layout'
import CommentTopSectionBoth from '../../../assets/svgs/CommentTopSectionBoth'
import AsyncStorageService from '../../utils/AsyncStorage'
const { height } = Dimensions.get('window')
const bgHeight = height
import moment from 'moment'
import { Menu, MenuItem } from 'react-native-material-menu'
import { deviceWidth } from '../../utils/constants'
import localization from '../../utils/localization'
interface DiaryItem {
    id: string
    title: string
    desc: string
    date: string
    color: string
}

const MyDiary = (props: any) => {
    const [modalVisible, setModalVisible] = useState(false)

    const navigation = useNavigation<any>()
    const isFocused = useIsFocused()

    const { navigate, goBack } = props.navigation
    const [diaryList, setDiaryList] = React.useState<DiaryItem[]>([])
    const [colorList, setColorList] = React.useState<
        { color: string; key: string }[]
    >([
        { color: '#FF6666', key: '1' },
        { color: 'yellow', key: '2' },
        { color: 'orange', key: '3' },
        { color: 'pink', key: '4' },
        { color: '#eeeeee', key: '5' },
        { color: '#90EE90', key: '6' },
        { color: 'black', key: '7' },
        { color: 'grey', key: '8' },
        { color: 'purple', key: '9' },
    ])
    const [checked, setChecked] = React.useState<string>('pink')
    const [addModal, setModal] = React.useState<boolean>(false)
    const [title, onChangeTitle] = React.useState<string>('')
    const [content, onChangeContent] = React.useState<string>('')
    const [shoo, onShoo] = React.useState<string>('')
    const [visible, setVisible] = React.useState<boolean>(false)
    const [snackVisible, setSnackVisible] = React.useState<boolean>(false)

    const onToggleSnackBar = () => setSnackVisible(!snackVisible)
    const [showActions, setshowActions] = useState<any>({
        index: 0,
        open: false,
        item: null,
    })
    const [openNote, setOpenNote] = useState(false)

    const renderItem = ({ item, index }: any) => {
        return (
            // backgroundColor: item.color
            <TouchableOpacity
                style={{ ...styles.card, backgroundColor: item.color }}
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                    setOpenNote(true)
                    openItem(item, 'Open')
                    setshowActions({ ...showActions, item: item })
                }}
            >
                <View style={styles.cardHeader}>
                    <Text
                        style={[
                            styles.title,
                            item.color === 'black' ? styles.whiteColor : {},
                            item.color === 'grey' ? styles.whiteColor : {},
                            item.color === 'purple' ? styles.whiteColor : {},
                        ]}
                    >
                        {item.title}
                    </Text>
                    <TouchableOpacity
                        style={{ gap: 2, paddingHorizontal: 10 }}
                        onPress={() => {
                            setshowActions({
                                index: index,
                                open: !showActions.open,
                            })
                        }}
                    >
                        {/* <Icon name="more-vert" size={20} color="#000" /> */}
                        <View
                            style={[
                                styles.optionsIcon,
                                styles.optionsIconFirst,
                                item.color === 'black'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'grey'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'purple'
                                    ? styles.whiteBGColor
                                    : {},
                            ]}
                        ></View>
                        <View
                            style={[
                                styles.optionsIcon,
                                styles.optionsIconSecond,
                                item.color === 'black'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'grey'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'purple'
                                    ? styles.whiteBGColor
                                    : {},
                            ]}
                        ></View>
                        <View
                            style={[
                                styles.optionsIcon,
                                styles.optionsIconThird,
                                item.color === 'black'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'grey'
                                    ? styles.whiteBGColor
                                    : {},
                                item.color === 'purple'
                                    ? styles.whiteBGColor
                                    : {},
                            ]}
                        ></View>
                    </TouchableOpacity>

                    {showActions.index == index && showActions.open == true ? (
                        <View style={styles.dropdownOptionsBox}>
                            <TouchableOpacity
                                style={styles.dropdownOptionsAnchor}
                                onPress={() => {
                                    shareItem(item)
                                }}
                            >
                                <CustomText style={styles.dropdownOptionsText}>
                                    {localization['share']}
                                </CustomText>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.dropdownOptionsAnchor}
                                onPress={() => {
                                    setshowActions({ index: -1, open: false })
                                    deleteItem(item)
                                }}
                            >
                                <CustomText style={styles.dropdownOptionsText}>
                                    {localization['delete']}
                                </CustomText>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                </View>
                <Text
                    style={[
                        styles.content,
                        item.color === 'black' ? styles.whiteColor : {},
                        item.color === 'grey' ? styles.whiteColor : {},
                        item.color === 'purple' ? styles.whiteColor : {},
                    ]}
                    numberOfLines={1}
                >
                    {item.desc}
                </Text>
                <Text
                    style={[
                        styles.date,
                        item.color === 'black' ? styles.whiteColor : {},
                        item.color === 'grey' ? styles.whiteColor : {},
                        item.color === 'purple' ? styles.whiteColor : {},
                    ]}
                    numberOfLines={1}
                >
                    {item.date}
                </Text>
            </TouchableOpacity>
        )
    }

    React.useEffect(() => {
        // diary list store
        async function getDiaryItems() {
            const diaryList = await AsyncStorageService.getItem<DiaryItem[]>(
                'diaryList'
            )
            if (diaryList && diaryList.length !== 0) {
                setDiaryList(diaryList)
            }
        }
        getDiaryItems()
    }, [])
    const [actionNameForModal, setactionNameForModal] = useState<
        'Add' | 'Edit' | 'Open'
    >('Add')
    const openItem = (item: DiaryItem, actionName: 'Edit' | 'Open' | 'Add') => {
        setModalVisible(true)
        onChangeTitle(item.title)
        onChangeContent(item.desc)
        setactionNameForModal('Open')
    }

    const onSave = async () => {
        try {
            if (title.trim() === '' || content.trim() === '') {
                // onToggleSnackBar()
                Alert.alert('Message', 'Title and content cannot be empty')
                return
            }
            setModal(false)

            const newDiary: DiaryItem = {
                id: Math.random().toString(36).substr(2, 9),
                title,
                desc: content,
                date: moment().format('MMM D, YYYY'),
                color: checked,
            }

            const diaryList =
                (await AsyncStorageService.getItem<DiaryItem[]>('diaryList')) ||
                []
            diaryList.push(newDiary)
            await AsyncStorageService.setItem('diaryList', diaryList)

            setDiaryList(diaryList)

            onChangeTitle('')
            onChangeContent('')
            // setChecked('pink')
            setModalVisible(false)
        } catch (error) {
            console.log('Error in saving Diary item: ', error)
        }
    }

    const updateItem = async (item: DiaryItem) => {
        //uodate dairy item
        if (item.title.trim() == '' || item.desc.trim() == '') {
            return
        }
        let diraryArray: any = await AsyncStorageService.getItem('diaryList')
        let array = {
            id: item.id,
            title: title,
            desc: content,
            date: moment().format('MMM D, YYYY'),
            color: checked,
        }
        diraryArray[diraryArray.findIndex((el: any) => el.id === item.id)] =
            array
        // props.navigation.goBack()
        await AsyncStorageService.setItem('diaryList', diraryArray)
        setDiaryList(diraryArray)
        onChangeTitle('')
        onChangeContent('')
        setModalVisible(false)
    }
    const deleteItem = async (item: DiaryItem) => {
        const diaryList =
            (await AsyncStorageService.getItem<DiaryItem[]>('diaryList')) || []
        const filteredList = diaryList.filter((diary) => diary.id !== item.id)
        await AsyncStorageService.setItem('diaryList', filteredList)
        setDiaryList(filteredList)
        hideMenu(item.id)
    }

    const shareItem = async (item: DiaryItem) => {
        // hideMenu(item.id)

        Alert.alert(
            'WARNING',
            'You are about to share personal information. Are you sure you want to share?',
            [
                { text: 'Yes', onPress: () => shareIt(item) },
                { text: 'No', onPress: () => console.log('Cancel') },
            ],
            { cancelable: false }
        )
    }

    const shareIt = async (item: DiaryItem) => {
        try {
            const result = await Share.share({
                message: `${item.title}: ${item.desc}`,
            })
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // Shared with specific activity type
                }
            } else if (result.action === Share.dismissedAction) {
                // Dismissed
            }
        } catch (error: any) {
            Alert.alert('', error.message)
        }
    }

    const deleteAll = () => {
        Alert.alert(
            '',
            localization['areYouSureYouWantToDeleteAlNotes'],
            [
                { text: 'Yes', onPress: () => deleteSyn() },
                { text: 'No', onPress: () => console.log('Cancel') },
            ],
            { cancelable: false }
        )
    }

    const deleteSyn = async () => {
        await AsyncStorageService.setItem('diaryList', [])
        setDiaryList([])
    }

    let _menu: Record<string, { hide: () => void; show: () => void }> = {}

    const hideMenu = (itemId: string) => {
        _menu[itemId]?.hide()
    }

    const showMenu = (itemId: string) => {
        _menu[itemId]?.show()
    }

    // const [showDropdownOptions, setShowDropdownOptions] = useState(false)

    // setShowDropdownOptions(true)

    return (
        <Layout
            ScreenName={localization['mydiary']}
            BackButton={true}
            deleteButton={false}
        >
            {diaryList.length <= 0 ? (
                <ScrollView bounces={false}>
                    <View style={styles.cardContainer}>
                        <CommentTopSectionBoth
                            commonCommentTitle={localization.yourDiaryIsEmpty}
                            commonCommentDescription={
                                localization.whyNotAddEntry
                            }
                        />
                    </View>
                </ScrollView>
            ) : (
                <View key="MyScrollView">
                    <FlatList
                        data={diaryList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.list}
                        removeClippedSubviews={false}
                    />
                </View>
            )}

            {/* Modal Component */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setactionNameForModal('Add')
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        contentContainerStyle={styles.modalContainer}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.modalContent}>
                            <View style={styles.bgBefore}>
                                <Image
                                    source={require('../../../assets/image/BeforeWeBegin.png')}
                                    style={styles.bgImage}
                                />
                            </View>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalHeaderTitle}>
                                    {`${
                                        actionNameForModal === 'Edit' ||
                                        actionNameForModal === 'Open'
                                            ? localization.updateEntry
                                            : localization.addEntry
                                    }`}
                                </Text>
                                <TouchableOpacity
                                    style={styles.headerClose}
                                    onPress={() => {
                                        setModalVisible(false)
                                    }}
                                >
                                    <Icon name="close" size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.customMarginBottom}>
                                <CustomText style={styles.label}>
                                    {localization.title}
                                </CustomText>
                                <TextInput
                                    style={styles.input}
                                    value={title}
                                    onChangeText={(text) => {
                                        onChangeTitle(text)
                                    }}
                                    placeholder="Enter text"
                                    placeholderTextColor="gray"
                                />
                            </View>
                            <View style={styles.customMarginBottom}>
                                <CustomText style={styles.label}>
                                    {localization.startWriting}
                                </CustomText>
                                <TextInput
                                    style={[styles.input, styles.textArea]}
                                    multiline
                                    numberOfLines={4}
                                    value={content}
                                    onChangeText={(content) => {
                                        onChangeContent(content)
                                    }}
                                    placeholder="Type here..."
                                    placeholderTextColor="gray"
                                />
                            </View>
                            <View>
                                <FlatList //colorlist
                                    style={{ marginLeft: 20, margin: 20 }}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) =>
                                        index.toString()
                                    }
                                    removeClippedSubviews={false}
                                    data={colorList}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() =>
                                                    setChecked(item.color)
                                                }
                                                style={{
                                                    height:
                                                        checked == item.color
                                                            ? 40
                                                            : 30,
                                                    alignSelf: 'center',
                                                    borderRadius: 20,
                                                    marginLeft: 10,
                                                    justifyContent: 'center',
                                                    width:
                                                        checked == item.color
                                                            ? 40
                                                            : 30,
                                                    backgroundColor: item.color,
                                                }}
                                            >
                                                {/* {checked == item.color ?
                                                        <Image
                                                            resizeMode="contain"
                                                            // style={styles.checkImage}
                                                            source={require("../../assets/checkicon.png")} />
                                                        : null} */}
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                            <View style={styles.centerAlign}>
                                <TouchableOpacity
                                    style={styles.saveButton}
                                    onPress={() => {
                                        {
                                            actionNameForModal === 'Open' ||
                                            actionNameForModal === 'Edit'
                                                ? updateItem(showActions.item)
                                                : onSave()
                                        }
                                    }}
                                >
                                    <Text style={styles.saveButtonText}>
                                        {actionNameForModal === 'Open' ||
                                        actionNameForModal === 'Edit'
                                            ? localization.update
                                            : localization.save}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>
            <AntDesign
                style={styles.fab}
                name="pluscircle"
                size={50}
                color="#D72E50"
                onPress={() => {
                    setChecked('')
                    onChangeContent('')
                    onChangeTitle('')
                    setactionNameForModal('Add'), setModalVisible(true)
                }}
            />
        </Layout>
    )
}

export default MyDiary

const styles = StyleSheet.create({
    customMarginBottom: {
        marginBottom: 10,
    },
    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    bgImage: {},
    // Styles remain the same
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        width: deviceWidth - 30,
        margin: 'auto',
        marginTop: 0,
        marginBottom: 30,
        // backgroundColor: 'red',
    },
    container: {
        flex: 1,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
    },
    modalHeaderTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(25),
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    headerClose: {
        top: 0,
        right: 15,
        opacity: 1,
    },
    list: {
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, .25)',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: moderateScale(16),
        lineHeight: moderateScale(20),
        fontWeight: 'bold',
    },
    content: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        color: '#666',
        marginBottom: 10,
    },
    date: {
        fontSize: moderateScale(12),
        lineHeight: moderateScale(15),
        color: '#888',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        borderRadius: 50,
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.25)',
    },
    modalContainer: {
        flex: 1,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        borderRadius: 8,
        padding: 20,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden',
    },
    label: {
        color: '#222',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        marginBottom: moderateScale(5),
    },
    input: {
        height: moderateScale(40),
        borderWidth: 1,
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        width: '100%',
        borderRadius: moderateScale(5),
        borderColor: '#333333',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    textArea: {
        height: 140,
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#FFD200',
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 'auto',
    },
    saveButtonText: {
        color: '#000',
        fontWeight: 'regular',
        fontSize: moderateScale(16),
    },
    dropdownOptionsBox: {
        position: 'absolute',
        top: '125%',
        right: 0,
        backgroundColor: '#fff',
        // width: '100%',
        // height: '100%',
        zIndex: 1,
        minWidth: 100,
        boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
    },
    dropdownOptionsAnchor: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    dropdownOptionsText: {
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        color: '#000',
        padding: 10,
        zIndex: 1,
    },
    whiteColor: {
        color: '#ffffff',
    },
    whiteBGColor: {
        backgroundColor: '#ffffff',
    },
    optionsIcon: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#000000',
    },
    optionsIconFirst: {},
    optionsIconSecond: {},
    optionsIconThird: {},
})

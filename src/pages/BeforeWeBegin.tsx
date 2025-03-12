import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import DatePicker from 'react-native-date-picker'
import React, { useState } from 'react'
import CustomText from '../components/basedComponents/customText'
import PenSvg from '../../assets/svgs/Pen'
import { moderateScale } from 'react-native-size-matters'
import User from '../../assets/svgs/User'
import NoImageSvg from '../../assets/svgs/NoImage'
import LinearGradient from 'react-native-linear-gradient'
import SelectDropdown from 'react-native-select-dropdown'
import ArrowRightSvg from '../../assets/svgs/ArrowRight'
import DateIcon from '../../assets/svgs/DateIcon'
import CommentTopSectionBoth from '../../assets/svgs/CommentTopSectionBoth'

const { height } = Dimensions.get('window')
const bgHeight = height

const BeforeWeBegin = () => {
    const [text, onChangeText] = React.useState('')
    const [isChecked, setIsChecked] = useState(false)

    const [date, setDate] = useState<any>(new Date())
    const [open, setOpen] = useState(false)
    // French
    const languagesList = [
        { languageName: 'English' },
        { languageName: 'Spanish' },
        { languageName: 'French' },
        { languageName: 'Dutch' },
    ]

    return (
        <ScrollView bounces={false}>
            <View style={styles.bgBefore}>
                <Image
                    source={require('../../assets/image/BeforeWeBegin.png')}
                    style={styles.bgImage}
                />
            </View>
            <View style={styles.BgContainer}>
                <View style={styles.cardContainer}>
                    <CommentTopSectionBoth
                        commonCommentTitle={'Let me know you!'}
                        commentWidth={320}
                        commentTop={45}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        Language{' '}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <SelectDropdown
                        data={languagesList}
                        onSelect={() => {}}
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem &&
                                            selectedItem.languageName}
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={styles.selectOptions}>
                                    <Text>{item.languageName}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        Gender{' '}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>

                    <SelectDropdown
                        data={languagesList}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem &&
                                            selectedItem.languageName}
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={styles.selectOptions}>
                                    <Text>{item.languageName}</Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        Country{' '}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>

                    <SelectDropdown
                        data={languagesList}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem &&
                                            selectedItem.languageName}
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={styles.selectOptions}>
                                    <Text>{item.languageName}</Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        District{' '}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <SelectDropdown
                        data={languagesList}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        renderButton={(selectedItem) => {
                            return (
                                <View style={styles.input}>
                                    <Text>
                                        {selectedItem &&
                                            selectedItem.languageName}
                                    </Text>
                                    <ArrowRightSvg style={styles.selectImage} />
                                </View>
                            )
                        }}
                        renderItem={(item) => {
                            return (
                                <View style={styles.selectOptions}>
                                    <Text>{item.languageName}</Text>
                                </View>
                            )
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        Date of Birth{' '}
                        <CustomText style={styles.required}>*</CustomText>
                    </CustomText>
                    <TouchableOpacity
                        style={styles.input}
                        onPress={() => setOpen(true)}
                        activeOpacity={0.2}
                    >
                        <Text>{JSON.stringify(date)}</Text>
                        <DateIcon style={styles.dateImage} />
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        What should we call you?
                    </CustomText>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.inputBox}>
                    <CustomText style={styles.label}>
                        How do you want to see yourself
                    </CustomText>
                    <View style={styles.chooseBox}>
                        <TouchableOpacity style={styles.chooseAvatar}>
                            <View style={styles.profileImageWrapper}>
                                <User height="100%" width="100%" />
                                <PenSvg style={styles.pen} />
                            </View>
                            <CustomText style={styles.profileImageText}>
                                Choose your Avatar
                            </CustomText>
                        </TouchableOpacity>

                        <CustomText style={styles.orText}>or</CustomText>

                        <TouchableOpacity style={styles.chooseAvatar}>
                            <View style={styles.profileImageWrapper}>
                                <NoImageSvg height="70%" width="70%" />
                                <PenSvg style={styles.pen} />
                            </View>
                            <CustomText style={styles.profileImageText}>
                                Upload an Image
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.information}>
                    <CustomText style={{ flex: 1, color: '#FF0000' }}>
                        *
                    </CustomText>
                    <CustomText style={styles.informationText}>
                        The information you enter is secure and allows us to
                        provide you with accurate country-specific services. You
                        remain anonymous and only your biological data (i.e.
                        age, location and gender) are captured on our system.
                    </CustomText>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            isChecked && styles.checkboxChecked,
                        ]} // Apply checked styles
                        onPress={() => setIsChecked(!isChecked)} // Toggle checkbox state
                    >
                        {isChecked && <Text style={styles.checkMark}>✓</Text>}{' '}
                        {/* Display checkmark when checked */}
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <CustomText style={styles.checkboxText}>
                            I have read, understood and accepted the{' '}
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText style={styles.privacyPolicy}>
                                Privacy Policy
                            </CustomText>
                        </TouchableOpacity>
                        <CustomText style={styles.checkboxText}>
                            {' '}
                            and{' '}
                        </CustomText>
                        <TouchableOpacity>
                            <CustomText style={styles.privacyPolicy}>
                                Terms and Conditions
                            </CustomText>
                        </TouchableOpacity>
                        <CustomText>.</CustomText>
                    </View>
                </View>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#56CCF2', '#1B4987']}
                        start={{ x: 0.35, y: 0 }}
                        end={{ x: 0.92, y: 1 }}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            borderRadius: moderateScale(50),
                            marginTop: 40,
                        }}
                    >
                        <CustomText style={styles.nextButton}>Next</CustomText>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default BeforeWeBegin

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: 30,
        marginBottom: 30,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
    },
    image: {
        width: 200,
        height: 200,
    },
    nextButton: {
        textAlign: 'center',
        fontSize: moderateScale(17),
        color: '#fff',
    },
    checkbox: {
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 2,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 2,
    },
    checkboxChecked: {
        backgroundColor: '#1B4987',
        borderColor: '#fff', // Border color when checked
    },
    checkMark: {
        fontSize: moderateScale(8),
        lineHeight: moderateScale(10),
        color: '#fff', // Checkmark color
    },

    privacyPolicy: {
        fontSize: moderateScale(13),
        fontWeight: '600',
        color: '#1B4987',
    },
    checkboxText: {
        fontSize: moderateScale(13),
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BgContainer: {
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
    },
    bgBefore: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: bgHeight,
        zIndex: -1,
    },
    bgImage: {},
    letsMe: {
        alignItems: 'center',
        paddingTop: moderateScale(20),
        textAlign: 'right',
        justifyContent: 'center',
    },
    hand: {
        alignItems: 'flex-start',
        marginTop: moderateScale(-43),
        marginLeft: moderateScale(50),
    },
    label: {
        color: '#222',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
        marginBottom: moderateScale(5),
    },
    input: {
        height: moderateScale(45),
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
    selectImage: {
        position: 'absolute',
        top: '100%',
        right: 15,
        transform: [{ rotate: '90deg' }],
    },
    dateImage: {
        position: 'absolute',
        top: '100%',
        right: 10,
    },
    required: {
        color: '#FF0000',
    },
    selectOptions: {
        height: moderateScale(45),
        borderBottomWidth: 1,
        padding: moderateScale(15),
        marginTop: moderateScale(3),
        boxShadow: 'none',
    },
    inputBox: {
        marginBottom: moderateScale(15),
    },
    profileImageWrapper: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: '100%',
        backgroundColor: '#fff',
        shadowColor: '#00000061',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(5),
        padding: moderateScale(12),
        position: 'relative',
    },
    pen: {
        position: 'absolute',
        right: 3,
        bottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
    },
    chooseAvatar: {
        alignItems: 'center',
        flex: 1,
    },
    profileImageText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: moderateScale(12),
        color: '#222',
    },
    chooseBox: {
        marginTop: moderateScale(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orText: {
        paddingLeft: moderateScale(30),
        paddingRight: moderateScale(30),
        color: '#666',
        fontSize: moderateScale(16),
    },
    informationText: {
        fontSize: moderateScale(11),
        textAlign: 'justify',
    },
    information: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: moderateScale(20),
        paddingBottom: moderateScale(20),
        marginBottom: moderateScale(20),
        borderBottomWidth: 1,
        borderBottomColor: '#666',
    },
})

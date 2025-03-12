import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import HelpingHandResetButton from './images/HelpingHandResetButton'
import HelpingHandSendButton from './images/HelpingHandSendButton'
import { moderateScale } from 'react-native-size-matters'
import localization from '../../../utils/localization'

interface TypingAreaProps {
    chatText: string
    onTextChange: (text: string) => void
    onReset: () => void
    sendRequest: () => void
}

const TypingArea: React.FC<TypingAreaProps> = ({
    chatText,
    onTextChange,
    onReset,
    sendRequest,
}) => {
    return (
        <>
            <View style={styles.mainBottomSection}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.mainBottomSectionReset}
                    onPress={onReset}
                >
                    <HelpingHandResetButton />
                </TouchableOpacity>
                <View style={styles.mainBottomSectionBox}>
                    <TextInput
                        style={styles.mainBottomSectionInput}
                        value={chatText}
                        onChangeText={onTextChange}
                        placeholder={localization.writeYourMessage}
                        placeholderTextColor="#888" // Light gray placeholder text
                        keyboardType="default" // Ensure default keyboard
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.mainBottomSectionSubmit}
                    onPress={sendRequest}
                >
                    <HelpingHandSendButton />
                </TouchableOpacity>
            </View>
        </>
    )
}

export default TypingArea

const styles = StyleSheet.create({
    mainBottomSection: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 7,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 99999,
        padding: moderateScale(15),
    },
    mainBottomSectionReset: {
        width: moderateScale(40),
        height: moderateScale(40),
        backgroundColor: '#fff',
        borderRadius: 50,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
    },
    mainBottomSectionBox: {
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
        width: '70%',
        height: moderateScale(40),
        overflow: 'hidden',
        borderRadius: moderateScale(20),
    },
    mainBottomSectionInput: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        width: '100%',
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        borderWidth: 0,
        borderColor: '#ccc',
        backgroundColor: '#ffffff',
        color: '#333333',
        fontSize: moderateScale(14),
        lineHeight: moderateScale(18),
    },
    mainBottomSectionSubmit: {
        width: moderateScale(40),
        height: moderateScale(40),
        backgroundColor: '#ffffff',
        borderRadius: 50,
        boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
    },
})

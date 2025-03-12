import Toast from 'react-native-toast-message'
const showToast = (
    type: 'success' | 'error' | 'info',
    message: string,
    text2: string = ''
) => {
    Toast.show({
        type: type,
        position: 'top',
        text1: message,
        text2: text2,
        visibilityTime: 4000,
        autoHide: true,
    })
}

export default showToast

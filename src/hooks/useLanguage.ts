import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLanguage, showLoading } from '../store/actions/commonActions'
import AsyncStorageService from '../utils/AsyncStorage'
import localization from '../utils/localization'

const useLanguage = () => {
    const dispatch = useDispatch()

    const initializeLanguage = async () => {
        try {
            dispatch(showLoading())

            const storedLanguage = (await AsyncStorageService.getItem(
                'language'
            )) as string
            const languageToSet = storedLanguage || 'en'

            dispatch(setLanguage(languageToSet))
            localization.setLanguage(languageToSet)
            dispatch(showLoading())
        } catch (error) {
            console.error('Error initializing language:', error)
            dispatch(showLoading())
        }
    }

    const handleLanguageChange = async (newLanguage: string) => {
        try {
            dispatch(setLanguage(newLanguage))
            localization.setLanguage(newLanguage)
            await AsyncStorageService.setItem('language', newLanguage)
        } catch (error) {
            console.error('Error saving language to AsyncStorage:', error)
        }
    }

    useEffect(() => {
        initializeLanguage()
    }, [dispatch])

    return {
        handleLanguageChange,
    }
}

export default useLanguage

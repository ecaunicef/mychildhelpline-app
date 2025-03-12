import AsyncStorage from '@react-native-async-storage/async-storage'

type StorageKey = string

const AsyncStorageService = {
    setItem: async <T>(key: StorageKey, value: T): Promise<void> => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        } catch (error) {
            console.warn(`Error storing key ${key}:`, error)
        }
    },

    getItem: async <T>(key: StorageKey): Promise<T | null> => {
        try {
            const jsonValue = await AsyncStorage.getItem(key)
            return jsonValue ? JSON.parse(jsonValue) : null
        } catch (error) {
            console.warn(`Error retrieving key ${key}:`, error)
            return null
        }
    },

    removeItem: async (key: StorageKey): Promise<void> => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.warn(`Error removing key ${key}:`, error)
        }
    },

    cleanStorage: async (): Promise<void> => {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.warn('Error in Cleaning Storage')
        }
    },
}

export default AsyncStorageService

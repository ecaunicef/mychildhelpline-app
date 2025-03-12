import { getApi, postApi } from './apiService'

export const getMoodList = async () => {
    try {
        const data = await getApi('data-retrieval/mood-mapper/get-mood-list')
        return data
    } catch (error) {
        console.error('Error in resource category:', error)
        throw error
    }
}

export const addUserMood = async (payload: any) => {
    try {
        const data = await postApi('data-import/moodtracker/create', payload)
        return data
    } catch (error) {
        console.error('Error in moodtracker create:', error)
        throw error
    }
}

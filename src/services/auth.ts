import { getApi, postApi } from './apiService'

export const getUserCountry = async () => {
    try {
        const data = await getApi('/data-retrieval/area/all')
        return data
    } catch (error) {
        console.error('Error in all country:', error)
        throw error
    }
}

export const signUpUser = async (payload: any) => {
    try {
        const data = await postApi('data-import/users/create', payload)
        return data
    } catch (error) {
        console.error('Error in sign up user:', error)
        throw error
    }
}

export const updateUserDetails = async (payload: any) => {
    try {
        const data = await postApi('data-import/users/update', payload)
        return data
    } catch (error) {
        console.error('Error in sign up user:', error)
        throw error
    }
}

export const counsellingUser = async (payload: any) => {
    try {
        const data = await postApi('data-import/counselling/new/save', payload)
        return data
    } catch (error) {
        console.error('Error in counselling user:', error)
        throw error
    }
}

export const getWhatsappLink = async (payload: any) => {
    try {
        const data = await postApi(
            'data-retrieval/chatline/get-chat-link',
            payload
        )
        return data
    } catch (error) {
        console.error('Error in whatsapp link:', error)
        throw error
    }
}

export const feedBackUser = async (payload: any) => {
    try {
        const data = await postApi('data-import/feedback/add', payload)
        return data
    } catch (error) {
        console.error('Error in feedback:', error)
        throw error
    }
}

export const getAllNotifications = async (payload: any) => {
    const response: any = await postApi('data-retrieval/blog/all', payload)
    const data: [] = await response?.data?.data
    if (data.length > 0) data.sort((a: any, b: any) => b.id - a.id)
    return data
}

export const deleteUser = async (payload: any) => {
    try {
        const data = await postApi('data-import/users/delete', payload)
        return data
    } catch (error) {
        console.error('Error in delete user:', error)
        throw error
    }
}

export const getUserLocation = async (payload: any) => {
    try {
        const data = await postApi(
            'data-retrieval/country/get-location-data',
            payload
        )
        return data
    } catch (error) {
        console.error('Error in get user location:', error)
        throw error
    }
}

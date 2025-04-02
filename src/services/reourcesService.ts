import { postApi } from './apiService'

export const getResources = async (payload: any) => {
    try {
        const data = await postApi(
            'data-retrieval/classification/get-list-by-type',
            payload
        )
        return data
    } catch (error) {
        console.error('Error in resource category:', error)
        throw error
    }
}

export const getResourcesLink = async (payload: any) => {
    try {
        const data = await postApi(
            'data-retrieval/helpline/get-helpline-by-classification',
            payload
        )
        return data
    } catch (error) {
        console.error('Error in resource category:', error)
        throw error
    }
}

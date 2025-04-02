import axios, {
    AxiosInstance,
    AxiosError,
    InternalAxiosRequestConfig,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import store from '../store/store'
import { showLoading, hideLoading } from '../store/actions/commonActions'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://mychildhelpline.itechmission.org/mychildapigateway/api/', //client
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        store.dispatch(showLoading())
        return config
    },
    (error: AxiosError) => {
        store.dispatch(hideLoading())
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        store.dispatch(hideLoading())
        return response
    },
    (error: AxiosError) => {
        store.dispatch(hideLoading())
        return Promise.reject(error)
    }
)

export default axiosInstance

export const getApi = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<T> => {
    try {
        const response = await axiosInstance.get<T>(url, config)
        return response.data
    } catch (error: any) {
        handleError(error)
        throw error.response?.data || 'An error occurred'
    }
}

export const postApi = async <T>(
    url: string,
    payload: Record<string, any>,
    config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
    try {
        const response = await axiosInstance.post<T>(url, payload, config)
        return response
    } catch (error: any) {
        handleError(error)
        throw error.response?.data || 'An error occurred'
    }
}

const handleError = (error: AxiosError) => {
    console.error('API Error:', error.response?.data || error.message)
}

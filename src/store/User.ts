import AsyncStorageService from '../utils/AsyncStorage'

export class User {
    async setUserLogin(value: number): Promise<void> {
        await AsyncStorageService.setItem('Login', value)
    }
    async getUserLogin(): Promise<number | null> {
        return await AsyncStorageService.getItem('Login')
    }

    async setUserId(value: string): Promise<void> {
        await AsyncStorageService.setItem('id', value)
    }
    async getUserId(): Promise<string | null> {
        return await AsyncStorageService.getItem('id')
    }

    async setUserName(value: string): Promise<void> {
        await AsyncStorageService.setItem('name', value)
    }
    async getUserName(): Promise<string | null> {
        return await AsyncStorageService.getItem('name')
    }

    async setUserGender(value: string): Promise<void> {
        await AsyncStorageService.setItem('gender', value)
    }
    async getUserGender(): Promise<string | null> {
        return await AsyncStorageService.getItem('gender')
    }

    async setUserPlace(value: string): Promise<void> {
        await AsyncStorageService.setItem('place', value)
    }
    async getUserPlace(): Promise<string | null> {
        return await AsyncStorageService.getItem('place')
    }

    async setLanguage(value: string): Promise<void> {
        await AsyncStorageService.setItem('language', value)
    }
    async getLanguage(): Promise<string | null> {
        return await AsyncStorageService.getItem('language')
    }

    async setUserAge(value: number): Promise<void> {
        await AsyncStorageService.setItem('age', value)
    }
    async getUserAge(): Promise<number | null> {
        return await AsyncStorageService.getItem('age')
    }

    async setUserAvatar(value: number): Promise<void> {
        await AsyncStorageService.setItem('Avatar', value)
    }
    async getUserAvatar(): Promise<number | null> {
        return await AsyncStorageService.getItem('Avatar')
    }

    async setAvatardata(value: any): Promise<void> {
        await AsyncStorageService.setItem('Avatardata', value)
    }
    async getAvatardata(): Promise<any | null> {
        return await AsyncStorageService.getItem('Avatardata')
    }

    async setLat(value: string): Promise<void> {
        await AsyncStorageService.setItem('Lat', value)
    }
    async getLat(): Promise<string | null> {
        return await AsyncStorageService.getItem('Lat')
    }

    async setLong(value: string): Promise<void> {
        await AsyncStorageService.setItem('Long', value)
    }
    async getLong(): Promise<string | null> {
        return await AsyncStorageService.getItem('Long')
    }

    async setHomelock(value: number): Promise<void> {
        await AsyncStorageService.setItem('homelock', value)
    }
    async getHomelock(): Promise<number | null> {
        return await AsyncStorageService.getItem('homelock')
    }

    async setDiarylock(value: number): Promise<void> {
        await AsyncStorageService.setItem('diarylock', value)
    }
    async getDiarylock(): Promise<number | null> {
        return await AsyncStorageService.getItem('diarylock')
    }

    async setResourcesList(value: number): Promise<void> {
        await AsyncStorageService.setItem('resourceList', value)
    }
    async getResourcesList(): Promise<number | null> {
        return await AsyncStorageService.getItem('resourceList')
    }

    async setResourcesCat(value: number): Promise<void> {
        await AsyncStorageService.setItem('resourceCat', value)
    }
    async getResourcesCat(): Promise<number | null> {
        return await AsyncStorageService.getItem('resourceCat')
    }

    async setCounsellingList(value: number): Promise<void> {
        await AsyncStorageService.setItem('counselling', value)
    }
    async getCounsellingList(): Promise<number | null> {
        return await AsyncStorageService.getItem('counselling')
    }

    async setRights(value: number): Promise<void> {
        await AsyncStorageService.setItem('rights', value)
    }
    async getRights(): Promise<number | null> {
        return await AsyncStorageService.getItem('rights')
    }

    async setBlogList(value: number): Promise<void> {
        await AsyncStorageService.setItem('blogs', value)
    }
    async getBlogList(): Promise<number | null> {
        return await AsyncStorageService.getItem('blogs')
    }

    async setPoints(value: number): Promise<void> {
        await AsyncStorageService.setItem('points', value)
    }
    async getPoints(): Promise<number | null> {
        return await AsyncStorageService.getItem('points')
    }

    async setPointsArray(value: number): Promise<void> {
        await AsyncStorageService.setItem('pointsArr', value)
    }
    async getPointsArray(): Promise<number | null> {
        return await AsyncStorageService.getItem('pointsArr')
    }
}

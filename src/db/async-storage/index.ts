import AsyncStorage from '@react-native-async-storage/async-storage'
import { StorageService } from './types'

const STORAGE_PREFIX = 'todolist@storage:'

export const appStorage: StorageService = {
  getItem: async (key) => {
    const item = await AsyncStorage.getItem(STORAGE_PREFIX + key)
    if (item) {
      return JSON.parse(item)
    }
    return null
  },
  setItem: (key, value) => {
    AsyncStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value))
  },
  removeItem: (key) => {
    AsyncStorage.removeItem(STORAGE_PREFIX + key)
  },
  getAllKeys: async () => {
    const item = await AsyncStorage.getAllKeys()
    if (item) {
      return item.filter((key) => key.startsWith(STORAGE_PREFIX))
    }
    return null
  },
}

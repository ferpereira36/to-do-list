import { appStorage } from './storage'

export interface StorageService {
  getItem: <T>(key: string) => Promise<T | null>
  setItem: <T>(key: string, value: T) => void
  removeItem: (key: string) => void
  getAllKeys: () => Promise<string[] | null>
}

export const storageService: StorageService = appStorage

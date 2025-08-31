import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoredData = async <T>(key: string): Promise<T[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(`Failed to fetch ${key}.`, e);
    return [];
  }
};

export const saveStoredData = async <T>(key: string, data: T[]): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.error(`Failed to save ${key}.`, e);
    }
};
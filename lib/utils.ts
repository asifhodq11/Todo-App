// Generates a simple unique ID.
export const generateId = (): string => Date.now().toString(36) + Math.random().toString(36).substr(2);
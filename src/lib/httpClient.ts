import axiosInstance from './axiosInstance';

// Generic API methods
export const api = {
  // GET request
  get: async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  },

  // POST request
  post: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await axiosInstance.post(url, data);
    return response.data;
  },

  // PUT request
  put: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await axiosInstance.put(url, data);
    return response.data;
  },

  // PATCH request
  patch: async <T>(url: string, data?: unknown): Promise<T> => {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  },

  // DELETE request
  delete: async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.delete(url);
    return response.data;
  },

  // File upload
  upload: async <T>(url: string, file: File, onProgress?: (progress: number) => void): Promise<T> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axiosInstance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(progress);
        }
      },
    });

    return response.data;
  },
};

// Token management utilities
export const tokenManager = {
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  },

  getToken: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  },

  removeToken: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  },

  isAuthenticated: (): boolean => {
    return !!tokenManager.getToken();
  },
};

export default api;

import { useState } from 'react';

interface UseCloudinary {
  isUploading: boolean;
  error: string | null;
  uploadImage: (file: File, folder: string) => Promise<string | undefined>;
}

const useCloudinary = (): UseCloudinary => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiURL = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

  const uploadImage = async (file: File, folder: string): Promise<string | undefined> => {
    console.log(apiURL);
    console.log(folder);
    setError(null);
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET as string); 
    formData.append('folder', folder); 
    formData.append('public_id', file.name); 
    console.log(formData);
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setIsUploading(false);
      return data.secure_url;
    } catch (error: any) {
      setIsUploading(false);
      setError(error.message);
      console.error('Error uploading image:', error);
    }
  };

  return { isUploading, error, uploadImage };
}

export default useCloudinary;

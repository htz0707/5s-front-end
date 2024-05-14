import axios from 'axios';

export default async function uploadToFacebook(accessToken, imageUrl) {
  try {
    const response = await axios.post(
      `https://graph.facebook.com/me/photos?access_token=${accessToken}`,
      {
        url: imageUrl,
        caption: 'Uploaded via my Next.js app!'
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error uploading to Facebook: ${error.message}`);
  }
}


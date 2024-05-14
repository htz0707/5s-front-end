import { useSession } from 'next-auth/react';

function ProfilePage() {
  const { data: session } = useSession();

  async function handleUpload() {
    try {
      const imageUrl = 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg';
      const { accessToken } = session;
      const result = await uploadToFacebook(accessToken, imageUrl);
      console.log('Upload result:', result);
    } catch (error) {
      console.error('Error uploading:', error);
    }
  }

  return (
    <div>
      <h1>Welcome to your profile</h1>
      <button onClick={handleUpload}>Upload Picture to Facebook</button>
    </div>
  );
}

export default ProfilePage;

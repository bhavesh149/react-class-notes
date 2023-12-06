// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

  

//   return (
//     <div>
//       <form action="http://localhost:5000/storage" method="post" encType="multipart/form-data">

//       <input type="file" name='recfile' onChange={handleFileChange} />
//       <button 
//       // onClick={handleUpload} 
//       type='submit'
//       disabled={!selectedFile}>
//         Upload
//       </button>
//       </form>
//     </div>
//   );
// };

// export default ImageUploader;

import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('recfile', selectedFile);

      const response = await axios.post('http://localhost:5000/storage', formData);

      // Assuming the response contains the URL in the data property
      const uploadedImageUrl = response.data['Image Uploaded successfully'];
      setImageUrl(uploadedImageUrl);

      console.log('Image URL:', uploadedImageUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} encType="multipart/form-data">
        <input type="file" name="recfile" onChange={handleFileChange} />
        <button type="submit" disabled={!selectedFile}>
          Upload
        </button>
      </form>

      {imageUrl && (
        <div>
          <p>Image uploaded successfully!</p>
          {/* <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} /> */}
          <h1>Object url:</h1>
          <a href={imageUrl}>{imageUrl}</a>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

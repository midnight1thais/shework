import React, { useState } from 'react';

function HomeRegisterProfile() {
  const [avatarImage, setAvatarImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = () => {
        setAvatarImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    // Simule o clique no input de arquivo para selecionar uma imagem
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => onDrop(e.target.files)}
      />
      <div onClick={handleImageClick}>
        {avatarImage ? (
          <img
            src={avatarImage}
            alt="Imagem de perfil"
            style={{ width: '7vw', height: '7vh', borderRadius: '50%', marginTop: '0.5vh',}}
          />
        ) : (
          <div
            style={{
              width: '4vw',
              height: '7vh',
              borderRadius: '50%',
              backgroundColor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0.5vh',
            }}
          >
            <span>Editar</span>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeRegisterProfile;
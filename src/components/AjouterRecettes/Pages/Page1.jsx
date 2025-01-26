import React, { useState } from "react";
import UploadFile from "../comp/UploadFile";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegImage, FaRegImages } from "react-icons/fa6";

function Page1({ newRecette, setNewRecette }) {
  const [video, setVideo] = useState(null);
  const [cover, setCover] = useState(null);
  const [gallery, setGallery] = useState([]);

  const handleVideoUpload = (files) => {
    const file = files[0];
    const videoUrl = URL.createObjectURL(file);
    setVideo(videoUrl);
    setNewRecette({ ...newRecette, video_instructions: videoUrl });
  };

  const handleImageUpload = (files) => {
    const file = files[0];
    const imageUrl = URL.createObjectURL(file); 
    setCover(imageUrl);
    setNewRecette({ ...newRecette, cover: imageUrl });
  };

  const handleGalleryUpload = (files) => {
    const galleryUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file) 
    );
    setGallery(galleryUrls);
    setNewRecette({ ...newRecette, images_resultat: galleryUrls });
  };

  return (
    <div>
      <UploadFile
        title="Vidéo"
        iconComp={<MdOutlineSlowMotionVideo />}
        onUpload={handleVideoUpload}
        limit={1}
        accept="video/*"
        isGallery={false}
      />
     

      <UploadFile
        title="Image de couverture"
        iconComp={<FaRegImage />}
        onUpload={handleImageUpload}
        limit={1}
        accept="image/*"
        isGallery={false}
      />
     

      <UploadFile
        title="Galerie d'images"
        iconComp={<FaRegImages />}
        onUpload={handleGalleryUpload}
        limit={10}
        accept="image/*"
        isGallery={true}
      />
      
    </div>
  );
}

export default Page1;

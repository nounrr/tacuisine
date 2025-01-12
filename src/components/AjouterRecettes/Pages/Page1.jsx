import React, { useState } from "react";
import UploadFile from "../comp/UploadFile";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegImage, FaRegImages } from "react-icons/fa6";

function Page1() {
  const [video, setVideo] = useState([]);
  const [image, setImage] = useState([]);
  const [gallery, setGallery] = useState([]);

  const handleVideoUpload = (files) => {
    setVideo(files.slice(0, 1)); // Only 1 video
  };

  const handleImageUpload = (files) => {
    setImage(files.slice(0, 1)); // Only 1 image
  };

  const handleGalleryUpload = (files) => {
    setGallery(files.slice(0, 10)); // Max 10 images
  };

  return (
    <div>
      <UploadFile
        title={"Video"}
        iconComp={<MdOutlineSlowMotionVideo />}
        onUpload={handleVideoUpload}
        limit={1}
        accept="video/*"
        isGallery={false}
      />
      <UploadFile
        title={"Image Cover"}
        iconComp={<FaRegImage />}
        onUpload={handleImageUpload}
        limit={1}
        accept="image/*"
        isGallery={false}
      />
      <UploadFile
        title={"Gallery"}
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

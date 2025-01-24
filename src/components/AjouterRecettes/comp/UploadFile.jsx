import React, { useState } from "react";
import styles from "./FileUpload.module.css";

const UploadFile = ({ title, iconComp, onUpload, limit, accept, isGallery }) => {
  const [thumbnails, setThumbnails] = useState([]);

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length > limit) {
      alert(`You can upload a maximum of ${limit} ${title.toLowerCase()} files.`);
      return;
    }

    const validFiles = selectedFiles.slice(0, limit);
    const newThumbnails = validFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setThumbnails((prev) => [...prev, ...newThumbnails]);
    onUpload(validFiles);
  };

  const handleRemoveFile = (index) => {
    const updatedThumbnails = thumbnails.filter((_, i) => i !== index);
    setThumbnails(updatedThumbnails);
    onUpload(updatedThumbnails.map((thumbnail) => thumbnail.file));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        <div className={styles.dropZone}>
          {iconComp && React.cloneElement(iconComp, { className: styles.uploadIcon })}
          <button
            type="button"
            className={styles.uploadButton}
            onClick={() => document.getElementById(`${title}-fileInput`).click()}
          >
            Upload {title}
          </button>
          <input
            type="file"
            id={`${title}-fileInput`}
            className={styles.hiddenInput}
            multiple={isGallery}
            accept={accept}
            onChange={handleFileSelect}
          />
        </div>
      </div>
      <div className={styles.preview}>
        {thumbnails.map((thumbnail, index) => (
          <div key={index} className={styles.thumbnail}>
            {accept.includes("video") ? (
              <video src={thumbnail.url} controls className={styles.videoPreview}></video>
            ) : (
              <img src={thumbnail.url} alt={`${title} thumbnail`} className={styles.imagePreview} />
            )}
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveFile(index)}
              title="Remove file"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadFile;
"use client";
import { useRef } from "react";
import Button from "./Button";

const FileUploadButton = ({
  onFileSelect,
  accept = "*",
  text = "Upload",
  variant,
}) => {
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click(); // Triggers the hidden input
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <>
      <input
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
      <Button text={text} onClick={handleClick} variant={variant} />
    </>
  );
};

export default FileUploadButton;

import { useState } from "react";
import UploadMeme from "./components/UploadMeme";
import SuccessfulUploaded from "./components/SuccessfulUploaded";
export default function MoreMemesPage() {
  const [isUploaded, setIsUploaded] = useState(false);
  return <div className="flex flex-col">
    {!isUploaded ? <UploadMeme /> : <SuccessfulUploaded />}
  </div>;
}

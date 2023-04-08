import React from "react";
import { AdvancedImage } from "@cloudinary/react";

interface Props {
  url: string;
}
const AppImage: React.FC<Props> = () => {
  return <AdvancedImage cldImg={{}} />;
};

export default AppImage;

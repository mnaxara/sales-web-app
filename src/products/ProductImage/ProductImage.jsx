import { number, string } from "prop-types";

export default function ProductImage({ imageUrl, name, width = 100, heigth }) {
  return (
    <img src={imageUrl} alt={name} style={{ width: width, heigth: heigth }} />
  );
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
  width: number,
  heigth: number,
};

import placeholderImage from "../assets/placeholder.jpg";

import { ReactElement } from "react";

type PropsType = {
  id: string;
  image: string;
  name: string;
  location: string;
  averagePrice?: number;
};

const Community = ({
  image,
  name,
  location,
  averagePrice,
}: PropsType): ReactElement => {
  const onError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = placeholderImage;
  };

  const content = (
    <article className="product">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <img
        src={image ? image : placeholderImage}
        onError={(e) => onError(e)}
        alt={name}
        className="product__img"
      />

      <p>
        Average price:
        {averagePrice ? (
          <span>
            {" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(averagePrice)}
          </span>
        ) : (
          <span> Not Available</span>
        )}
      </p>
    </article>
  );

  return content;
};

export default Community;

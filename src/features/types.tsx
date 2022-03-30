export type PlaceType = {
  name: string;
  latitude: string;
  longitude: string;
  photo: Photo;
  price_level: string;
  ranking: string;
  rating: string;
  awards: Array<Award>;
  cuisine: Array<Cuisine> | undefined;
  address: string;
  phone: string;
  num_reviews: string;
  web_url: string;
  website: string;
};

export type Cuisine = {
  key: string;
  name: string;
};

export type Image = {
  large: {
    url: string;
  };
  small: {
    url: string;
  };
};

export type Award = {
  images: {
    small: string;
  };
  display_name: string;
};

export type Photo = {
  images: Image;
};

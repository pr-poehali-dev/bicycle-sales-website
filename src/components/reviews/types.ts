
export interface Review {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
  date: string;
}

export interface ReviewsData {
  reviews: Review[];
}

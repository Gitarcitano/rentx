export interface CarProps {
  data: {
    brand: string;
    model: string;
    rent: {
      period: string;
      price: number;
    };
    thumbnail: string;
  };
}

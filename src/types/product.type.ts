export type TProduct = {
  id?: string;
  title: string;
  img: string;
  prefix: string;
  price: number;
  max: number;
  quantity?: number;
  isLiked?: boolean;
};

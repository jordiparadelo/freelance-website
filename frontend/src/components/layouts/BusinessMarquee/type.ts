export type MarqueeData = {
  id?: number;
  details: {
    id: number;
    preview?: string;
    client?: string;
    logo: {
      url: string;
      width: number;
      height: number;
    };
  };
};

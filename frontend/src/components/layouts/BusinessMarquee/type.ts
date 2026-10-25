export type MarqueeData = {
  id?: string;
  details: {
    preview?: string;
    client?: string;
    logo: {
      url: string;
      width: number;
      height: number;
    };
  };
};

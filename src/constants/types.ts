export type imagesProps = {
  src: string;
  alt: string;
};

export type childrenProps = {
  children: React.ReactNode;
};

export type simpleCardProps = {
  title: string;
  src: string;
  desc?: string;
};
export type simpleCard = {
  id: number;
  title: string;
  src: string;
  desc?: string;
};

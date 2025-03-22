export type imagesProps = {
  src: string;
  alt: string;
};
export type simpleImage = {
  id: number;
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

export type articleContent = {
  id: number;
  title: string;
  content: string;
};

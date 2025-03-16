export type GarantirEngressoBtnProps = {
  className?: string;
};

export type btnProps = {
  children: React.ReactNode;
  typeBtn?: "default" | "redirect" | "download";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
};

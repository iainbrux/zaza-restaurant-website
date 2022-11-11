export interface FooterContentProps {
  title: string;
  content: string;
}

export const FooterContent = ({ title, content }: FooterContentProps) => (
  <div className="flex flex-col items-center my-4 mx-20">
    <h3 className="font-bold mb-4">{title}</h3>
    <p>{content}</p>
  </div>
);

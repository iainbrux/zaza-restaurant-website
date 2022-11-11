export interface FooterContentProps {
  title: string;
  content: string;
}

export const FooterContent = ({ title, content }: FooterContentProps) => (
  <div>
    <h3 className="font-bold">{title}</h3>
    <p>{content}</p>
  </div>
);

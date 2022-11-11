export interface FooterContentProps {
  title: string;
  content: string;
}

export const FooterContent = ({ title, content }: FooterContentProps) => (
  <aside className="flex flex-col items-center my-4 mx-16 bg-slate-800">
    <h3 className="font-bold mb-4 p-2">{title}</h3>
    <p className="py-2 px-4 ">{content}</p>
  </aside>
);

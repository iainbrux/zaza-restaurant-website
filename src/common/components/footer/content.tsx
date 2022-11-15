export interface FooterContentProperties {
  title: string;
  content: string | JSX.Element;
}

export const FooterContent = ({ title, content }: FooterContentProperties) => {
  return (
    <aside className="flex flex-col items-center p-4 w-96">
      <h3 className="font-bold mb-4">{title}</h3>
      {content}
    </aside>
  );
};
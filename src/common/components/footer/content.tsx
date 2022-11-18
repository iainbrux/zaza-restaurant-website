export interface FooterContentProperties {
  dataTestId: string;
  title: string;
  content: string | JSX.Element;
}

export const FooterContent = ({
  dataTestId,
  title,
  content,
}: FooterContentProperties) => {
  return (
    <aside
      className="flex flex-col items-center p-4 w-96"
      data-testid={dataTestId}
    >
      <h3 className="font-bold mb-4" data-testid={dataTestId + "-header"}>
        {title}
      </h3>
      {content}
    </aside>
  );
};

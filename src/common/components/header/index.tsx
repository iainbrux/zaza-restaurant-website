export interface HeaderProperties {
  title: string;
}

export const Header = ({ title }: HeaderProperties) => {
  return (
    <div className="mt-40 flex flex-row justify-center" data-testid="header">
      <h1
        className="decoration-black text-3xl font-bold underline underline-offset-8"
        data-testid="header-title"
      >
        {title}
      </h1>
    </div>
  );
};

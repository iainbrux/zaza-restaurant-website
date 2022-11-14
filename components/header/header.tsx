export interface HeaderProperties {
  header: string;
}

export const Header = ({ header }: HeaderProperties) => {
  return (
    <div className="mt-40 flex flex-row justify-center">
      <h1 className="decoration-black text-3xl font-bold underline underline-offset-8 decoration-black">
        {header}
      </h1>
    </div>
  );
};

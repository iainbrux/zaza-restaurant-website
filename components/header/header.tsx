export interface HeaderProps {
  Header: string
}

export const Header = ({Header}: HeaderProps) => {
  return (
    <div className="mt-40 flex flex-row justify-center">
      <h1 className="decoration-black text-3xl font-bold underline underline-offset-8 decoration-black">{Header}</h1>
    </div>
  )
}
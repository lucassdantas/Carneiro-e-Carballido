type ButtonProps = {
  content?:string;
  color?:'yellow' | 'blue'
}
export const Button = ({content='Fale conosco', color='yellow'}:ButtonProps) => {
  if(color=='yellow') return <div className={`rounded-full p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-blue-carneiro-e-carballido hover:text-white bg-yellow-carneiro-e-carballido shadow-lg`}>{content}</div>
  if(color=='blue')   return <div className={`rounded-full p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-yellow-carneiro-e-carballido text-white bg-blue-carneiro-e-carballido  shadow-lg`}>     {content}</div>
}

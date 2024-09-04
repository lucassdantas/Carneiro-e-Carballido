import { whatsApp } from "@/utils/constants/infos";

type ButtonProps = {
  content?:string;
  color?:'yellow' | 'blue';
  url?:string;
}
export const Button = ({content='Fale conosco', color='yellow', url}:ButtonProps) => {
  if(!url) url = whatsApp.url

  if(color=='yellow') return <a href={url} target='_blank'><div className={`rounded-full p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-blue-carneiro-e-carballido  hover:text-white text-black bg-yellow-carneiro-e-carballido shadow-lg`}>{content}</div></a>
  
  if(color=='blue')   return <a href={url} target='_blank'><div className={`rounded-full p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-yellow-carneiro-e-carballido hover:text-black text-white bg-blue-carneiro-e-carballido  shadow-lg`}>{content}</div></a>
}

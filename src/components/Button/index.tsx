import { whatsApp } from "@/utils/constants/infos";
import { Link } from "react-router-dom";

type ButtonProps = {
  content?:string;
  color?:'yellow' | 'blue';
  url?:string;
  onClick?:any;
  target?:string;
}

export const Button = ({content='Fale conosco', color='yellow', url, target='_blank'}:ButtonProps) => {
  if(!url) url = whatsApp.url
  
  if(color=='yellow') return <Link to={url} target={target} ><div className={`rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-blue-carneiro-e-carballido  hover:text-white text-black bg-yellow-carneiro-e-carballido shadow-lg`}>{content}</div></Link>
  if(color=='blue')   return <Link to={url} target={target} ><div className={`rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-yellow-carneiro-e-carballido hover:text-black text-white bg-blue-carneiro-e-carballido  shadow-lg`}>{content}</div></Link>
}
export const ServiceCardButton = ({content='Saiba mais', color='yellow', }:ButtonProps) => {
  if(color=='yellow') return <div className={`rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-blue-carneiro-e-carballido  hover:text-white text-black bg-yellow-carneiro-e-carballido shadow-lg`}>{content}</div>
  if(color=='blue')   return <div className={`rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-yellow-carneiro-e-carballido hover:text-black text-white bg-blue-carneiro-e-carballido  shadow-lg`}>{content}</div>
}

type FormButtonProps = {
  content?: string;
  color?: 'yellow' | 'blue';
  onClick?: any;
  disabled?: boolean;
  type?: 'submit' | 'button'; 
};


export const FormButton = ({
  content = 'Fale conosco',
  color = 'yellow',
  onClick,
  disabled = false,
  type = 'submit', 
}: FormButtonProps) => {
  const buttonClass = color === 'yellow'
    ? 'rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-blue-carneiro-e-carballido hover:text-white text-black bg-yellow-carneiro-e-carballido shadow-lg'
    : 'rounded-md p-4 text-center font-bold cursor-pointer transition ease-in-out hover:scale-110 duration-300 hover:bg-yellow-carneiro-e-carballido hover:text-black text-white bg-blue-carneiro-e-carballido shadow-lg';

  return (
    <button
      className={`${buttonClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={!disabled ? onClick : undefined}
      type={type} 
      disabled={disabled} 
    >
      {content}
    </button>
  );
};
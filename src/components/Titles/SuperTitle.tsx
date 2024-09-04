type SuperTitleProps = {
  color?: 'black' | 'white' | 'yellow' | 'blue',
  content:string,
  className?:string
}
export const SuperTitle = ({color='black', content, className}:SuperTitleProps) => {
  if (color === 'black')  return  <span className={`font-bold tracking-widest text-black ${className}`}>{content}</span>
  if (color === 'white')  return  <span className={`font-bold tracking-widest text-white ${className}`}>{content}</span>
  if (color === 'yellow') return  <span className={`font-bold tracking-widest text-yellow-carneiro-e-carballido ${className}`}>{content}</span>
  if (color === 'blue')   return  <span className={`font-bold tracking-widest text-blue-carneiro-e-carballido ${className}`}>{content}</span>

}

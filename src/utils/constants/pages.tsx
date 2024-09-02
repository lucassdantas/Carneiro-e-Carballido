import { ReactElement } from "react";
import { Home } from '@/pages/Home';
import { About } from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Policy from "@/pages/Policy";
import Terms from "@/pages/Terms";

export type PageType = {
  title:string;
  url:string;
  component:ReactElement;
}
export const pages:PageType[] = [
  {
    title:'Home',
    url:'home',
    component:<Home/>
  },
  {
    title:'Sobre',
    url:'sobre',
    component:<About/>
  },
  {
    title:'Serviços',
    url:'servicos',
    component:<Services/>
  },
  {
    title:'Contato',
    url:'contato',
    component:<Contact/>
  },
  {
    title:'Política de privacidade',
    url:'politica-de-privacidade',
    component:<Policy/>
  },
  {
    title:'Termos e condições de uso',
    url:'termos-e-condicoes-de-uso',
    component:<Terms/>
  },
]
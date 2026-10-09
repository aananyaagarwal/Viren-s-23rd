import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Viren’s 23rd ♡',description:'A little world, just for you',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

import './globals.css';
import { Inter } from 'next/font/google';
import Link from "next/link";
import styles from "./utils.module.css";
import menu from './json/sidebar.json';





const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profiles',
  description: 'SomeProfiles',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const reconds = props.records;
  return (
    <html>
      <head />
      <body>
      <div className={`${styles.sidebar}`}>
        {menu.records.map(({link,name}) =>(
          <Link id={`${name}`} href={`${link}`}>{`${name}`}</Link>
        ))}
        
      
        </div>
        <div className={`${styles.content}`}>
          {children}
        </div>
      </body>
    </html>
  )
}

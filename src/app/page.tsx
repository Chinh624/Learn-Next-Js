import Image from 'next/image'
import Facebook from './facebook/page';
import Tiktok from './tiktok/page';

export default function Home() {
  return (
    <>
    <li>
      <a href='/facebook'>Facebook</a>
    </li>
    <li>     
       <a href='/tiktok'>Tiktok</a>
      </li>
    </>
  )
}

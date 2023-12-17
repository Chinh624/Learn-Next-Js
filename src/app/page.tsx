import Link from 'next/link';

export default function Home() {
  return (
    <>
    <li>
      <Link href={'/facebook'}>Facebook</Link>
    </li>
    <li>     
       <Link href={'/tiktok'}>Tiktok</Link>
      </li>
    </>
  )
}

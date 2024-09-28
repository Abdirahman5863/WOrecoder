
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import Link from "next/link";

export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex ">
    
      {/* left */}
<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:[14%] bg-[ffffff] border-r-slate-500 space-y-4" >
<div className='p-2 '>
      <Link href={'/'} className='flex gap-2 items-center'><Image src='/logo.png' alt='logo'  
      width={20} height={20}/><span className='font-[family-name:var(--font-geist-sans)] lg:block hidden font-extrabold text-green-500'>WOrecoder</span></Link>
        
    </div>
  
<Menu/>
</div>
{/* right */}
<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:[86%] bg-slate-100 ">

  <Navbar/>
{children}

</div>

    </div>
  
  );
}
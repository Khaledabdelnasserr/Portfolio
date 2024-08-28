

import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import Hero from '@/components/Hero/Hero'
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/Ui/FloatingNav';
import { navItems } from '@/data';
import { FaHome } from 'react-icons/fa';



export default function Home() {
  return (
    <main className="relative bg-black-100 flex overflow-clip justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

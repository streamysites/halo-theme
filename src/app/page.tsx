import Image from 'next/image'
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2>Halo Theme</h2>
      </div>
    </main>
  )
}

import Cta from '@/components/Cta/Cta';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Payment from '@/components/Payment/Payment';
import Questions from '@/components/Questions/Questions';
import SellingPoint from '@/components/SellingPoint/SellingPoint';
import Shipment from '@/components/Shipment/Shipment';

export default function Home() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <SellingPoint />
        <Shipment />
        <Payment />
        <Questions />
        <Cta />
        <Footer />
      </main>
    </section>
  );
}

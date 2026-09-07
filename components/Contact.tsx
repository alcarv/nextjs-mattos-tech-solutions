import HomeContact from '@/components/home/HomeContact';
import BuyingGuide from '@/components/BuyingGuide';

export default function Contact() {
  return (
    <>
      <BuyingGuide />
      <div id="contact" className="service-contact-anchor">
        <HomeContact />
      </div>
    </>
  );
}

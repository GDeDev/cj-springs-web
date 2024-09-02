import Advantages from "./components/advantages";
import CustomsSprings from "./components/customSprings";
import Faqs from "./components/faq";
import HeroSection from "./components/hero-section";
import Location from "./components/location";
import ResellersSection from "./components/ressellers";
import SerialsSprings from "./components/serialsSprings";
import AdvantagesSection from "./components/springsAdvantages";
import Stats from "./components/stats";


const faqsData = [
  {
    question: '¿Cómo ser revendedor de CJ SPRINGS?',
    answer: 'Para ser revendedor de CJ SPRINGS, debes contactar con nuestro equipo de ventas y completar el formulario de solicitud.'
  },
  {
    question: '¿Cómo son los envíos?',
    answer: 'Realizamos envíos a todo el país mediante nuestras empresas de logística asociadas. Los tiempos de entrega varían según la ubicación.'
  },
  {
    question: '¿Qué medios de pago ofrecen?',
    answer: 'Aceptamos tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo mediante nuestra red de puntos de pago.'
  },
  {
    question: 'Pregunta 4',
    answer: 'Respuesta a la pregunta 4.'
  },
  {
    question: 'Pregunta 5',
    answer: 'Respuesta a la pregunta 5.'
  }
];

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Advantages />
      <ResellersSection />
      <Stats />
      <SerialsSprings />
      <CustomsSprings />
      <AdvantagesSection />
      <Faqs faqs={faqsData} />
      <Location />
    </main >
  );
}

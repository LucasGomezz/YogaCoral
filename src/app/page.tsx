import GroupClasses from "./components/GroupClasses";
import Hero from "./components/Hero";
import IntroYoga from "./components/IntroYoga";
import PrivateClasses from "./components/PrivateClasses";
import Classes from "./components/Classes";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <Hero title="Find balance, strength and well-being"
        description="Yoga classes to connect body, mind and breath"
        buttonText="View classes"
        buttonColor="bg-coral hover:shippingComplementario/90"
        mediaType="video"
        mediaSrc="/videos/hero.mov"
        overlayOpacity="bg-black/30"
        gradient={true} />
    <IntroYoga></IntroYoga>
    <Classes></Classes>
    <PrivateClasses></PrivateClasses>
    <GroupClasses></GroupClasses>
    <Footer></Footer>
    </>
  );
}

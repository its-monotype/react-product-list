import { HeroSection } from './HeroSection';
import { ProductsList } from './ProductsList';

export function HomeScreen() {
  return (
    <div className="min-h-screen py-6 sm:py-12">
      <HeroSection />
      <ProductsList />
    </div>
  );
}

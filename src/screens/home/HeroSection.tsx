export function HeroSection() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 px-4 text-center md:max-w-2xl">
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-6xl font-bold text-transparent md:text-6xl">
        React Product List
      </h1>
      <p className="mt-2 font-medium text-neutral-300 sm:max-w-2xl md:text-lg">
        Discover the rainbow of products - something for everyone!
      </p>
    </div>
  );
}

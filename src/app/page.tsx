import HomePage from "@/components/home/home-page";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Mobile full width + Desktop container */}
      <div className="w-full md:container md:mx-auto md:px-6 lg:px-8">
        <HomePage />
      </div>
    </main>
  );
}

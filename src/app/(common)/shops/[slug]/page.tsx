import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Heart, MapPin, Phone, Star, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShopDetailsPage() {
  const shop = {
    name: "Rahman Electronics",
    category: "Electronics",
    area: "Dakbangla Bazar, Khulna",
    rating: "4.8",
    verified: true,
    phone: "017XXXXXXXX",
    description:
      "Trusted electronics shop for mobile accessories, chargers, fans, smart gadgets, and everyday essential devices with dependable local service.",
    coverImage:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1400&auto=format&fit=crop",
    logoImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=400&auto=format&fit=crop",
  };

  const products = [
    {
      id: 1,
      name: "Fast Charger",
      price: "৳ 500",
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: "৳ 1,250",
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "৳ 2,300",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "USB Cable",
      price: "৳ 250",
      image:
        "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Power Bank",
      price: "৳ 1,650",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "LED Lamp",
      price: "৳ 780",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* Header Card */}
      <div className="overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-sm">
        {/* Cover */}
        <div className="relative h-52 w-full sm:h-64 lg:h-72">
          <Image
            src={shop.coverImage}
            alt={shop.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        </div>

        {/* Info Section */}
        <div className="relative px-4 pb-5 pt-0 sm:px-6 lg:px-8">
          <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 lg:-mt-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              {/* Left */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="relative h-24 w-24 overflow-hidden rounded-3xl border-4 border-background bg-background shadow-lg sm:h-28 sm:w-28">
                  <Image
                    src={shop.logoImage}
                    alt={`${shop.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {shop.name}
                    </h1>

                    {shop.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-300">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified Shop
                      </span>
                    )}
                  </div>

                  <p className="mt-2 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    <Store className="mr-1.5 h-3.5 w-3.5" />
                    {shop.category}
                  </p>

                  <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      <span>{shop.area}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                      <span className="font-medium text-foreground">
                        {shop.rating}
                      </span>
                      <span>rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button
                  asChild
                  className="rounded-2xl bg-emerald-600 shadow-sm hover:bg-emerald-700"
                >
                  <a href={`tel:${shop.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Shop
                  </a>
                </Button>

                <Button variant="outline" className="rounded-2xl">
                  <Heart className="mr-2 h-4 w-4" />
                  Save Shop
                </Button>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                {shop.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="mt-10 lg:mt-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-emerald-600">
              Shop Products
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Products
            </h2>
          </div>

          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="#">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-36 w-full overflow-hidden sm:h-44">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-3 sm:p-4">
                <h3 className="line-clamp-1 text-sm font-semibold sm:text-base">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Premium quality local product
                </p>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-foreground sm:text-base">
                    {product.price}
                  </span>

                  <Button
                    size="sm"
                    className="rounded-xl bg-emerald-600 px-3 text-xs hover:bg-emerald-700 sm:text-sm"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

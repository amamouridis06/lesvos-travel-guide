import React from 'react';

type Product = {
    id: number;
    name: string;
    price: string;
    badge: string;
    image: string;
};

export default function LesvosSouvenirStore(){
    const products: Product[] = [
        {
            id: 1,
            name: 'Lesvos Sunset Tee',
            price: '24€',
            badge: 'Best Seller',
            image:
                'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop',
        },
        {
            id: 2,
            name: 'Mytilene Vibes',
            price: '22€',
            badge: 'Popular',
            image:
                'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
        },
        {
            id: 3,
            name: 'Aegean Island',
            price: '20€',
            badge: 'New',
            image:
                'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
        },
    ];

    return (
        <div className="min-h-screen bg-[#f7f4ee] text-slate-800">
            <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-black text-[#005f73]">Lesvos Collection</h1>
                    <button className="rounded-xl bg-[#ee9b00] px-5 py-2 text-white">
                        Shop Now
                    </button>
                </div>
            </nav>

            <section className="relative flex h-screen items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"
                    alt="Lesvos"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <span className="font-semibold uppercase tracking-[6px] text-[#ee9b00]">
            Lesvos Collection
          </span>

                    <h1 className="mt-4 text-6xl font-black leading-tight md:text-8xl">
                        Wear The Spirit Of Lesvos
                    </h1>

                    <p className="mt-8 text-xl text-slate-200 md:text-2xl">
                        Premium souvenir t-shirts inspired by Mytilene and the Aegean Sea.
                    </p>
                </div>
            </section>

            <section className="bg-gradient-to-b from-[#e9d8a6] to-[#f7f4ee] py-24 px-6">
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            <div className="p-6">
                <span className="rounded-full bg-[#ee9b00] px-3 py-1 text-sm text-white">
                  {product.badge}
                </span>

                                <h3 className="mt-4 text-2xl font-bold">{product.name}</h3>

                                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#005f73]">
                    {product.price}
                  </span>

                                    <button className="rounded-xl bg-[#005f73] px-5 py-2 text-white">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

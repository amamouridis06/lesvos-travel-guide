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
            image:
                '/mourelia/mourelia1.jpg',
        },
        {
            id: 2,
            image:
                '/mourelia/mourelia2.jpg',
        },
        {
            id: 3,
            image:
                '/mourelia/mourelia3.jpg',
        },
        {
            id: 4,
            image:
                '/mourelia/mourelia4.jpg',
        },
        {
            id: 5,
            image:
                '/mourelia/mourelia5.jpg',
        },
        {
            id: 6,
            image:
                '/mourelia/mourelia6.jpg',
        },{
            id: 7,
            image:
                '/mourelia/mourelia7.jpg',
        },
        {
            id: 8,
            image:
                '/mourelia/mourelia8.jpg',
        },{
            id: 9,
            image:
                '/mourelia/mourelia9.jpg',
        },
        {
            id: 10,
            image:
                '/mourelia/mourelia10.jpg',
        },
        {
            id: 11,
            image:
                '/mourelia/mourelia11.jpg',
        },
        {
            id: 12,
            image:
                '/mourelia/mourelia12.jpg',

        }  ,
        {
            id: 13,
            image:
                '/mourelia/mourelia13.jpg',

        },
        {
            id: 14,
            image:
                '/mourelia/mourelia14.jpg',

        },
        {
            id: 15,
            image:
                '/mourelia/mourelia15.jpg',

        },
        {
            id: 16,
            image:
                '/mourelia/mourelia16.jpg',
        },
        {
            id: 17,
            image:
                '/mourelia/mourelia17.jpg',
        },
        {
            id: 18,
            image:
                '/mourelia/mourelia18.jpg',        },
        {
            id: 19,
            image:
                '/mourelia/mourelia19.jpg',
        },
        {
            id: 20,
            image:
                '/mourelia/mourelia20.jpg',
        },
        {
            id: 21,
            image:
                '/mourelia/mourelia21.jpg',
        }
    ];

    return (
        <div className="min-h-screen bg-[#f7f4ee] text-slate-800">


            <section className="relative flex h-screen items-center justify-center overflow-hidden">
                <img
                    src="/mourelia/mourelia9.jpg"
                    alt="Lesvos"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 max-w-4xl px-6 text-center text-white">

                    <h1 className="mt-4 text-6xl font-black leading-tight md:text-8xl">
                        Wear The Spirit Of Lesvos
                    </h1>

                    <p className="mt-8 text-xl text-slate-200 md:text-2xl">
                        Premium souvenir t-shirts inspired by Mytilene and the Aegean Sea.
                    </p>
                </div>
            </section>
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
      <span className="uppercase tracking-[4px] text-[#ee9b00] font-semibold">
        Η Ιστορία μας
      </span>

                        <h2 className="text-5xl font-black mt-4 mb-8">
                            Ένα κομμάτι της Λέσβου σε κάθε μπλουζάκι
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We are Christina and Panagiotis and we have a origin from Vrisa Lesvos.
                            That every summer we are there. On our island. Where we grew up.
                            Where we lived all our holidays and met our best friends.
                            Where the game was unstoppable, the laughter was endless, our nights are unrepeeled and the moments.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We are Christina and Panagiotis, who love the locals of Mytilene, her magic landscapes, her unique taverns.
                            We who want to put our touch, to keep everything we loved alive over time.
                        </p>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are Christina and Panagiotis, who inspires us with the special
                            humor and countless words and phrases of the inhabitants of Lesvos.
                            That we have been trying for years, as a game, to copy the accent of our grandparents.
                            That their smile lives in every new word we learn.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are Christina and Panagiotis, who worship the beautiful
                            design and the original ideas and that we created this page with a lot.
                            For you and your loved ones.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are Christina and Panagiotis. That is, Ta Mourelia.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Panagiotis Lambridis and Christina Paraskevopoulou have
                            been professional graphic designers, with experience in the
                            industry for over 25 years. They live and work in Athens and Lesvos
                            while they are the owners of the creative office FiftyTwo and have been
                            awarded for their work, in Greece and abroad.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="/images/lesvos-history.jpg"
                            alt="Lesvos History"
                            className="rounded-3xl shadow-2xl h-[650px] w-full object-cover"
                        />

                        <div className="absolute -bottom-6 -left-6 bg-[#005f73] text-white p-8 rounded-3xl shadow-xl">
                            <div className="text-4xl font-black">2024</div>
                            <div>Ίδρυση του Brand</div>
                        </div>
                    </div>
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

                                className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                {/*            <div className="p-6">*/}
                {/*<span className="rounded-full bg-[#ee9b00] px-3 py-1 text-sm text-white">*/}
                {/*  {product.badge}*/}
                {/*</span>*/}

                {/*                /!*<h3 className="mt-4 text-2xl font-bold">{product.name}</h3>*!/*/}

                {/*  /!*              <div className="mt-5 flex items-center justify-between">*!/*/}
                {/*  /!*<span className="text-2xl font-bold text-[#005f73]">*!/*/}
                {/*  /!*  {product.price}*!/*/}
                {/*  /!*</span>*!/*/}
                {/*  */}
                {/*  /!*                  <button className="rounded-xl bg-[#005f73] px-5 py-2 text-white">*!/*/}
                {/*  /!*                      Buy*!/*/}
                {/*  /!*                  </button>*!/*/}
                {/*  /!*              </div>*!/*/}
                {/*            </div>*/}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

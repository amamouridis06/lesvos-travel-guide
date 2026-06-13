"use client";
import React, { useState } from "react";

type HoneyGuideProps = {
    productName?: string;
    producerName?: string;
    location?: string;
    shortDescription?: string;
    fullDescription?: string;
    mainImage?: string;
    gallery?: string[];
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    openingHours?: string;
    mapUrl?: string;
    price?: string;
    accesibility?:string;
};

export default function HoneyTravelGuide({
       productName = "Sigrihoney- Honey in the Petrified Forest",
       producerName = "Beekeeper - Producer: Antonis Georgiou",
       location = "Sigri, Lesvos",
       shortDescription = "Pure thyme honey of small production from the mountains in Sigri.",
        fullDescription = `«Honey in the Fossilized Forest » is a separate destination in
                            western Lesvos, in the picturesque Sigri, in the heart of the only Disinfected
Forest. In our visit lab, visitors have the opportunity to
get to know the bee world up close and the production process
and standardization of honey, from the hive to the jar. Through
tour of the space and information about the beekeeping of Lesvos,
discover the importance of bees for the environment and local
biodiversity.

  At the same time, they can try and get supplied
authentic hive products, such as thyme honey, other honey varieties,
pollen, propolis, aromatic candles and other local products. The visit to
beekeeping laboratory combines knowledge, taste and authentic contact with
nature, offering a unique experience that highlights the special
character of Lesvos.`,
                                             mainImage = "/honey/lab.png",
                                             gallery = [
                                                 "/honey/honey1.jpeg",
                                                 "/honey/honey2.jpeg",

                                             ],
                                             phone = "+30 6972280267",
                                             email = "info@sigrihoney.gr",
                                             website = "www.sigrihoney.gr",
                                             address = "Sigri, Lesvos",
                                             openingHours = "Δευτέρα – Σάββατο, 09:00 – 18:00",
                                             mapUrl = "https://maps.app.goo.gl/S71ZoMUEiUuUUQHH8",
                                             price = "Από 9,50 €",
                                             accesibility = "There is also accessibility for people with mobility problems"
                                         }: HoneyGuideProps) {
    const allImages = [mainImage, ...gallery];
    const [selectedImage, setSelectedImage] = useState(mainImage);

    return (
        <main className="min-h-screen bg-[#fffaf0] text-stone-800">
            <section className="relative">
                <img
                    src={selectedImage}
                    alt={productName}
                    className="h-[420px] w-full object-cover md:h-[560px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-6 pb-10 text-white">
          <span className="inline-block rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-stone-900">
            Local Product
          </span>

                    <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-6xl">
                        {productName}
                    </h1>

                    <p className="mt-3 text-lg font-medium">
                        {producerName} · {location}
                    </p>
                </div>
            </section>

            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_360px]">
                <div>
                    <section>
                        <p className="text-xl leading-9 text-stone-700">
                            {shortDescription}
                        </p>

                        <h2 className="mt-10 text-3xl font-black">
                            Their History
                        </h2>

                        <div className="mt-5 whitespace-pre-line text-lg leading-8 text-stone-700">
                            {fullDescription}
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-3xl font-black">Gallery</h2>

                        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                            {allImages.map((image, index) => (
                                <button
                                    key={`${image}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedImage(image)}
                                    className={`overflow-hidden rounded-2xl border-4 transition ${
                                        selectedImage === image
                                            ? "border-amber-500"
                                            : "border-transparent"
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${productName} - photo ${index + 1}`}
                                        className="h-36 w-full object-cover transition duration-300 hover:scale-105"
                                    />
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="mt-12 rounded-3xl bg-amber-100 p-7">
                        <h2 className="text-2xl font-black">
                            What can the visitor do?
                        </h2>

                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                            <GuideFeature
                                icon="🍯"
                                title="Cressor"
                                description="Honey test."
                            />

                            <GuideFeature
                                icon="🐝"
                                title="Meet the producer"
                                description="Learn about beekeeping and production."
                            />

                            <GuideFeature
                                icon="🛍️"
                                title="Buy products"
                                description="Buy honey and local products."
                            />
                        </div>
                    </section>
                </div>

                <aside>
                    <div className="sticky top-6 rounded-3xl bg-white p-7 shadow-xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
                            Visit informations
                        </p>

                        <p className="mt-3 text-3xl font-black text-stone-900">
                            {price}
                        </p>

                        <div className="mt-7 space-y-6">
                            <ContactItem
                                icon="📍"
                                title="Adress"
                                content={address}
                            />

                            <ContactItem
                                icon="🕒"
                                title="Opening hours"
                                content={openingHours}
                            />
                            <ContactItem
                                icon="♿"
                                title="Accecibility"
                                content={accesibility}
                            />
                            <ContactItem
                                icon="📞"
                                title="Phone"
                                content={
                                    <a
                                        href={`tel:${phone.replace(/\s/g, "")}`}
                                        className="font-semibold text-amber-700 hover:underline"
                                    >
                                        {phone}
                                    </a>
                                }
                            />

                            <ContactItem
                                icon="✉️"
                                title="Email"
                                content={
                                    <a
                                        href={`mailto:${email}`}
                                        className="break-all font-semibold text-amber-700 hover:underline"
                                    >
                                        {email}
                                    </a>
                                }
                            />

                            <ContactItem
                                icon="🌐"
                                title="Website"
                                content={
                                    <a
                                        href={website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-semibold text-amber-700 hover:underline"
                                    >
                                        Official website
                                    </a>
                                }
                            />
                        </div>

                        <div className="mt-8 grid gap-3">
                            <a
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="rounded-full bg-amber-500 px-6 py-4 text-center font-bold text-stone-950 transition hover:bg-amber-400"
                            >
                                Phone Contact
                            </a>

                            <a
                                href={mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border-2 border-stone-900 px-6 py-4 text-center font-bold transition hover:bg-stone-900 hover:text-white"
                            >
                                View on the map
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

type ContactItemProps = {
    icon: string;
    title: string;
    content: React.ReactNode;
};

function ContactItem({ icon, title, content }: ContactItemProps) {
    return (
        <div className="flex items-start gap-4">
      <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl"
          aria-hidden="true"
      >
        {icon}
      </span>

            <div>
                <p className="text-sm font-bold text-stone-500">{title}</p>
                <div className="mt-1 leading-6 text-stone-800">{content}</div>
            </div>
        </div>
    );
}

type GuideFeatureProps = {
    icon: string;
    title: string;
    description: string;
};

function GuideFeature({
                          icon,
                          title,
                          description,
                      }: GuideFeatureProps) {
    return (
        <article className="rounded-2xl bg-white p-5">
      <span className="text-3xl" aria-hidden="true">
        {icon}
      </span>

            <h3 className="mt-3 font-black">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-stone-600">
                {description}
            </p>
        </article>
    );
}
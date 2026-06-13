import React, { useMemo, useState } from "react";

type ProductImage = {
    src: string;
    alt: string;
};

type ContactDetails = {
    producerName?: string;
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
    instagram?: string;
    facebook?: string;
};

type HoneyProductProps = {
    title: string;
    category?: string;
    origin: string;
    shortDescription: string;
    history: string;
    images: ProductImage[];
    price?: number;
    currency?: string;
    weight?: string;
    features?: string[];
    contact?: ContactDetails;
};

const ExternalLinkIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth={1.8}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5h5v5M13 11l6-6M19 13v6H5V5h6"
        />
    </svg>
);

const PhoneIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.8}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.8 3.5 9.3 3l2 5-2 1.5a15.4 15.4 0 0 0 5.2 5.2l1.5-2 5 2-.5 2.5A3 3 0 0 1 17.6 20C10.1 19.4 4.6 13.9 4 6.4A3 3 0 0 1 6.8 3.5Z"
        />
    </svg>
);

const EmailIcon = () => (
    <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        strokeWidth={1.8}
    >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" d="m4 7 8 6 8-6" />
    </svg>
);

export default function HoneyProduct({
                                         title,
                                         category = "Traditional local product",
                                         origin,
                                         shortDescription,
                                         history,
                                         images,
                                         price,
                                         currency = "EUR",
                                         weight,
                                         features = [],
                                         contact,
                                     }: HoneyProductProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const safeImages =
        images.length > 0
            ? images
            : [
                {
                    src: "/images/honey-placeholder.jpg",
                    alt: "Traditional local honey",
                },
            ];

    const formattedPrice = useMemo(() => {
        if (price === undefined) return null;

        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency,
        }).format(price);
    }, [price, currency]);

    const activeImage = safeImages[activeImageIndex];

    return (
        <article className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_24px_80px_rgba(92,60,12,0.12)]">
            <div className="grid lg:grid-cols-[1.05fr_1fr]">
                <section
                    aria-label="Product image gallery"
                    className="bg-amber-50 p-4 sm:p-6"
                >
                    <div className="relative overflow-hidden rounded-3xl bg-stone-100">
                        <img
                            src={activeImage.src}
                            alt={activeImage.alt}
                            className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[620px]"
                        />

                        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-900 shadow-sm backdrop-blur">
                            Local product
                        </div>

                        {weight && (
                            <div className="absolute bottom-5 right-5 rounded-2xl bg-stone-950/65 px-4 py-3 text-white backdrop-blur">
                                <p className="text-xs uppercase tracking-wider text-white/70">
                                    Net weight
                                </p>
                                <p className="mt-1 font-semibold">{weight}</p>
                            </div>
                        )}
                    </div>

                    {safeImages.length > 1 && (
                        <div className="mt-4 grid grid-cols-4 gap-3">
                            {safeImages.map((image, index) => (
                                <button
                                    key={`${image.src}-${index}`}
                                    type="button"
                                    onClick={() => setActiveImageIndex(index)}
                                    aria-label={`View image ${index + 1}`}
                                    aria-pressed={activeImageIndex === index}
                                    className={`overflow-hidden rounded-xl border-2 transition ${
                                        activeImageIndex === index
                                            ? "border-amber-700"
                                            : "border-transparent hover:border-amber-300"
                                    }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-20 w-full object-cover sm:h-24"
                                        loading="lazy"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </section>

                <section className="flex flex-col p-7 sm:p-10 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                        {category}
                    </p>

                    <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-3 text-sm font-semibold text-stone-500">
                        {origin}
                    </p>

                    <p className="mt-7 text-base leading-8 text-stone-600">
                        {shortDescription}
                    </p>

                    {features.length > 0 && (
                        <ul className="mt-7 flex flex-wrap gap-2">
                            {features.map((feature) => (
                                <li
                                    key={feature}
                                    className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900"
                                >
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="my-8 h-px bg-stone-100" />

                    <section aria-labelledby="product-history">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                            Our story
                        </p>

                        <h2
                            id="product-history"
                            className="mt-2 font-serif text-2xl font-semibold text-stone-900"
                        >
                            The history behind the honey
                        </h2>

                        <p className="mt-4 whitespace-pre-line text-base leading-8 text-stone-600">
                            {history}
                        </p>
                    </section>

                    {(formattedPrice || contact) && (
                        <div className="my-8 h-px bg-stone-100" />
                    )}

                    {formattedPrice && (
                        <div className="mb-8">
                            <p className="text-sm text-stone-500">Price</p>
                            <p className="mt-1 text-3xl font-semibold text-stone-900">
                                {formattedPrice}
                            </p>
                        </div>
                    )}

                    {contact && (
                        <section
                            aria-labelledby="contact-heading"
                            className="rounded-2xl border border-stone-200 bg-stone-50 p-6"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                                Contact
                            </p>

                            <h2
                                id="contact-heading"
                                className="mt-2 text-xl font-semibold text-stone-900"
                            >
                                Meet the producer
                            </h2>

                            {contact.producerName && (
                                <p className="mt-3 font-medium text-stone-700">
                                    {contact.producerName}
                                </p>
                            )}

                            {contact.address && (
                                <p className="mt-1 text-sm leading-6 text-stone-500">
                                    {contact.address}
                                </p>
                            )}

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {contact.phone && (
                                    <a
                                        href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                        className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                    >
                                        <PhoneIcon />
                                        {contact.phone}
                                    </a>
                                )}

                                {contact.email && (
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                    >
                                        <EmailIcon />
                                        {contact.email}
                                    </a>
                                )}

                                {contact.website && (
                                    <a
                                        href={contact.website}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                    >
                                        Website
                                        <ExternalLinkIcon />
                                    </a>
                                )}

                                {contact.instagram && (
                                    <a
                                        href={contact.instagram}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                    >
                                        Instagram
                                        <ExternalLinkIcon />
                                    </a>
                                )}

                                {contact.facebook && (
                                    <a
                                        href={contact.facebook}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                    >
                                        Facebook
                                        <ExternalLinkIcon />
                                    </a>
                                )}
                            </div>
                        </section>
                    )}
                </section>
            </div>
        </article>
    );
}
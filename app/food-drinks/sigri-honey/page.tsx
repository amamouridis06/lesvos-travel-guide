"use client";

import { useMemo, useState } from "react";

type ProductImage = {
    src: string;
    alt?: string;
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
    title?: string;
    category?: string;
    origin?: string;
    shortDescription?: string;
    history?: string;
    images?: ProductImage[];
    price?: number;
    currency?: string;
    weight?: string;
    features?: string[];
    contact?: ContactDetails;
};

const DEFAULT_IMAGE: ProductImage = {
    src: "/images/honey-placeholder.jpg",
    alt: "Traditional local honey",
};

function ExternalLinkIcon() {
    return (
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
}

function PhoneIcon() {
    return (
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
}

function EmailIcon() {
    return (
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
}

function LocationIcon() {
    return (
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
                d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
            />
            <circle cx="12" cy="9" r="2.5" />
        </svg>
    );
}

function normalizeExternalUrl(url?: string) {
    if (!url) return undefined;

    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }

    return `https://${url}`;
}

export default function HoneyProduct({
                                         title = "Anaxos Wildflower Honey",
                                         category = "Authentic local product",
                                         origin = "Anaxos, Lesvos, Greece",
                                         shortDescription = "Premium local honey with a rich floral aroma, smooth texture and naturally balanced sweetness.",
                                         history = `Our family has been producing honey in northern Lesvos for three generations.

The story began with a small number of traditional beehives near Anaxos. The knowledge and care of beekeeping passed from one generation to the next.

Today, our honey is still produced in small batches, with respect for nature, the bees and the traditional methods of the island.`,
                                         images = [],
                                         price,
                                         currency = "EUR",
                                         weight,
                                         features = [],
                                         contact,
                                     }: HoneyProductProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const safeImages = useMemo<ProductImage[]>(() => {
        if (!Array.isArray(images) || images.length === 0) {
            return [DEFAULT_IMAGE];
        }

        const validImages = images.filter(
            (image): image is ProductImage =>
                Boolean(image) &&
                typeof image.src === "string" &&
                image.src.trim().length > 0,
        );

        return validImages.length > 0 ? validImages : [DEFAULT_IMAGE];
    }, [images]);

    const activeImage =
        safeImages[activeImageIndex] ?? safeImages[0] ?? DEFAULT_IMAGE;

    const formattedPrice = useMemo(() => {
        if (typeof price !== "number" || Number.isNaN(price)) {
            return null;
        }

        try {
            return new Intl.NumberFormat("el-GR", {
                style: "currency",
                currency,
            }).format(price);
        } catch {
            return `${price.toFixed(2)} ${currency}`;
        }
    }, [price, currency]);

    const safeFeatures = Array.isArray(features)
        ? features.filter(
            (feature): feature is string =>
                typeof feature === "string" && feature.trim().length > 0,
        )
        : [];

    const websiteUrl = normalizeExternalUrl(contact?.website);
    const instagramUrl = normalizeExternalUrl(contact?.instagram);
    const facebookUrl = normalizeExternalUrl(contact?.facebook);

    const phoneHref = contact?.phone
        ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
        : undefined;

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
                            alt={activeImage.alt || title}
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
                        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                            {safeImages.map((image, index) => {
                                const isActive = activeImageIndex === index;

                                return (
                                    <button
                                        key={`${image.src}-${index}`}
                                        type="button"
                                        onClick={() => setActiveImageIndex(index)}
                                        aria-label={`View image ${index + 1}`}
                                        aria-pressed={isActive}
                                        className={`overflow-hidden rounded-xl border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 ${
                                            isActive
                                                ? "border-amber-700"
                                                : "border-transparent hover:border-amber-300"
                                        }`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt || `${title} image ${index + 1}`}
                                            className="h-20 w-full object-cover sm:h-24"
                                            loading="lazy"
                                        />
                                    </button>
                                );
                            })}
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

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-500">
                        <LocationIcon />
                        <span>{origin}</span>
                    </div>

                    <p className="mt-7 text-base leading-8 text-stone-600">
                        {shortDescription}
                    </p>

                    {safeFeatures.length > 0 && (
                        <ul className="mt-7 flex flex-wrap gap-2">
                            {safeFeatures.map((feature) => (
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

                    {formattedPrice && (
                        <>
                            <div className="my-8 h-px bg-stone-100" />

                            <div>
                                <p className="text-sm text-stone-500">Price</p>
                                <p className="mt-1 text-3xl font-semibold text-stone-900">
                                    {formattedPrice}
                                </p>
                            </div>
                        </>
                    )}

                    {contact && (
                        <>
                            <div className="my-8 h-px bg-stone-100" />

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
                                    <p className="mt-2 text-sm leading-6 text-stone-500">
                                        {contact.address}
                                    </p>
                                )}

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {contact.phone && phoneHref && (
                                        <a
                                            href={phoneHref}
                                            className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                        >
                                            <PhoneIcon />
                                            <span>{contact.phone}</span>
                                        </a>
                                    )}

                                    {contact.email && (
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                        >
                                            <EmailIcon />
                                            <span className="break-all">{contact.email}</span>
                                        </a>
                                    )}

                                    {websiteUrl && (
                                        <a
                                            href={websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                        >
                                            <span>Website</span>
                                            <ExternalLinkIcon />
                                        </a>
                                    )}

                                    {instagramUrl && (
                                        <a
                                            href={instagramUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                        >
                                            <span>Instagram</span>
                                            <ExternalLinkIcon />
                                        </a>
                                    )}

                                    {facebookUrl && (
                                        <a
                                            href={facebookUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-amber-300 hover:text-amber-800"
                                        >
                                            <span>Facebook</span>
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                </div>
                            </section>
                        </>
                    )}
                </section>
            </div>
        </article>
    );
}
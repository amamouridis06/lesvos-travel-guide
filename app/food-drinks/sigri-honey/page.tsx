import React from "react";

type HoneyProductProps = {
    name?: string;
    origin?: string;
    description?: string;
    price?: string;
    imageUrl?: string;
};

export default function HoneyProduct({
                                         name = "Lesvos Wildflower Honey",
                                         origin = "Anaxos, Lesvos",
                                         description = "Pure local honey with a rich aroma, golden colour and naturally sweet flavour. Produced in small batches by local beekeepers.",
                                         price = "€9.50",
                                         imageUrl = "/images/lesvos-honey.jpg",
                                     }: HoneyProductProps) {
    return (
        <article className="honey-card">
            <img
                className="honey-card__image"
                src={imageUrl}
                alt={`Jar of ${name}`}
            />

            <div className="honey-card__content">
                <span className="honey-card__label">Local Product</span>

                <h2>{name}</h2>

                <p className="honey-card__origin">
                    <span aria-hidden="true">📍</span> {origin}
                </p>

                <p className="honey-card__description">{description}</p>

                <div className="honey-card__details">
                    <span>100% natural</span>
                    <span>Locally produced</span>
                    <span>No additives</span>
                </div>

                <div className="honey-card__footer">
                    <strong>{price}</strong>
                    <button type="button">Discover the product</button>
                </div>
            </div>
        </article>
    );
}
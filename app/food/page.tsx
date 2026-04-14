import FoodGuideCategoriesClient from "./FoodGuideCategoriesClient";

export const metadata = {
  title: "Φαγητό στη Λέσβο",
  description:
    "Τα καλύτερα μέρη για φαγητό στη Λέσβο: ταβέρνες, εστιατόρια, καφέ και τοπικά προϊόντα.",
};

export default function FoodPage() {
  return <FoodGuideCategoriesClient />;
}

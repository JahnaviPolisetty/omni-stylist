import { Heart, MapPin, Check } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { NavHeader } from "@/components/ui/nav-header";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const productData: Record<string, {
  name: string;
  price: string;
  description: string;
  sizes: string[];
  stores: { name: string; available: boolean }[];
  image: string;
}> = {
  "navy-kurta": {
    name: "Navy Indo-Western Kurta Set",
    price: "₹4,999",
    description: "Elegant navy blue indo-western kurta with intricate embroidery. Perfect for wedding celebrations and festive occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stores: [
      { name: "Gachibowli Store", available: true },
      { name: "Madhapur Store", available: true },
      { name: "Jubilee Hills Store", available: false },
    ],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
  },
  "gold-sherwani": {
    name: "Gold Sherwani",
    price: "₹7,999",
    description: "Luxurious gold sherwani with detailed zari work. A statement piece for the modern groom.",
    sizes: ["M", "L", "XL"],
    stores: [
      { name: "Madhapur Store", available: true },
      { name: "Gachibowli Store", available: false },
    ],
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=600&fit=crop",
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = productData[id || "navy-kurta"] || productData["navy-kurta"];

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: product.name,
    });
  };

  return (
    <PageContainer>
      <NavHeader title="Product Details" />

      {/* Product Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="aspect-square bg-secondary"
      >
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </motion.div>

      <div className="px-4 py-6 space-y-6">
        {/* Title & Price */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="font-serif text-2xl text-foreground">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary mt-2">{product.price}</p>
          <p className="text-muted-foreground mt-3">{product.description}</p>
        </motion.div>

        {/* Size Selection */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-medium text-foreground mb-3">Select Size</h3>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 rounded-xl font-medium transition-all ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Store Availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-medium text-foreground mb-3">Store Availability</h3>
          <div className="space-y-2">
            {product.stores.map((store) => (
              <div
                key={store.name}
                className="flex items-center justify-between p-3 bg-card rounded-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{store.name}</span>
                </div>
                {store.available ? (
                  <span className="flex items-center gap-1 text-success text-sm">
                    <Check className="w-4 h-4" />
                    Available
                  </span>
                ) : (
                  <span className="text-muted-foreground text-sm">Out of Stock</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 pt-4"
        >
          <Button
            variant="outline"
            size="lg"
            className="w-14 shrink-0"
            onClick={handleFavorite}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
          </Button>
          <Button
            size="lg"
            className="flex-1"
            onClick={() => navigate(`/reserve/${id}`)}
            disabled={!selectedSize}
          >
            Reserve In-Store
          </Button>
        </motion.div>
      </div>
    </PageContainer>
  );
}

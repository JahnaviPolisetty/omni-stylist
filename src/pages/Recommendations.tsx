import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { NavHeader } from "@/components/ui/nav-header";
import { ProductCard } from "@/components/ui/product-card";

const products = [
  {
    id: "navy-kurta",
    name: "Navy Indo-Western Kurta Set",
    price: "₹4,999",
    store: "Gachibowli Store",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=450&fit=crop",
  },
  {
    id: "gold-sherwani",
    name: "Gold Sherwani",
    price: "₹7,999",
    store: "Madhapur Store",
    availability: "Low Stock",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&h=450&fit=crop",
  },
];

export default function Recommendations() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <NavHeader title="Curated for You" backTo="/chat" />

      <div className="px-4 py-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-muted-foreground mb-6"
        >
          Based on your preference for wedding outfits
        </motion.p>

        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => navigate("/recommendations")}
          className="flex items-center justify-center gap-2 w-full mt-8 py-3 text-primary font-medium"
        >
          More Looks
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </PageContainer>
  );
}

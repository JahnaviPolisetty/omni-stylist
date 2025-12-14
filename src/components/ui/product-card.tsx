import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  store: string;
  availability?: string;
  image: string;
}

export function ProductCard({ id, name, price, store, availability, image }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-card rounded-2xl shadow-card overflow-hidden">
      <div className="aspect-[4/3] bg-secondary overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-serif text-lg text-foreground">{name}</h3>
          <p className="text-xl font-semibold text-primary mt-1">{price}</p>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>{store}</span>
          {availability && (
            <span className="ml-2 px-2 py-0.5 bg-accent/20 text-accent-foreground text-xs rounded-full font-medium">
              {availability}
            </span>
          )}
        </div>
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => navigate(`/product/${id}`)}
          >
            View Details
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={() => navigate(`/reserve/${id}`)}
          >
            Reserve
          </Button>
        </div>
      </div>
    </div>
  );
}

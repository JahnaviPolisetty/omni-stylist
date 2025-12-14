import { Check, QrCode, MapPin, Clock, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { Button } from "@/components/ui/button";

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, timeSlot, date } = location.state || {
    product: { name: "Navy Indo-Western Kurta Set", store: "Gachibowli Store" },
    timeSlot: "4:30 PM",
    date: "Today, Dec 14",
  };

  return (
    <PageContainer className="flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 rounded-full bg-success flex items-center justify-center mb-6"
        >
          <Check className="w-10 h-10 text-success-foreground" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="font-serif text-2xl text-foreground">Reservation Confirmed!</h1>
          <p className="text-muted-foreground mt-2">Your outfit is waiting for you</p>
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 bg-card rounded-2xl shadow-card w-full max-w-xs"
        >
          <div className="aspect-square bg-foreground rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-4 bg-background rounded-lg" />
            <QrCode className="w-32 h-32 text-foreground relative z-10" />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Show this QR code at the store
          </p>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-full max-w-xs space-y-4"
        >
          <div className="flex items-start gap-3 p-4 bg-secondary rounded-xl">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">{product.store}</p>
              <p className="text-sm text-muted-foreground">{product.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
            <Clock className="w-5 h-5 text-primary shrink-0" />
            <div>
              <p className="font-medium text-foreground">{timeSlot}</p>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6"
      >
        <Button
          variant="outline"
          size="lg"
          className="w-full gap-2"
          onClick={() => navigate("/")}
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Button>
      </motion.div>
    </PageContainer>
  );
}

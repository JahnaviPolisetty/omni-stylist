import { MapPin, Calendar, Clock } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { NavHeader } from "@/components/ui/nav-header";
import { Button } from "@/components/ui/button";

const productInfo: Record<string, { name: string; size: string; store: string }> = {
  "navy-kurta": { name: "Navy Indo-Western Kurta Set", size: "L", store: "Gachibowli Store" },
  "gold-sherwani": { name: "Gold Sherwani", size: "M", store: "Madhapur Store" },
};

const timeSlots = ["4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM"];

export default function Reserve() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const product = productInfo[id || "navy-kurta"] || productInfo["navy-kurta"];

  const handleConfirm = () => {
    if (selectedSlot) {
      navigate("/confirmation", { 
        state: { 
          product, 
          timeSlot: selectedSlot,
          date: "Today, Dec 14"
        } 
      });
    }
  };

  return (
    <PageContainer>
      <NavHeader title="Reserve In-Store" />

      <div className="px-4 py-6 space-y-6">
        {/* Item Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-4 shadow-soft"
        >
          <h3 className="font-serif text-lg text-foreground">{product.name}</h3>
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">Size: {product.size}</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {product.store}
            </div>
          </div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Select Date
          </h3>
          <div className="bg-card rounded-2xl p-4 shadow-soft">
            <p className="text-foreground font-medium">Today, December 14</p>
            <p className="text-sm text-muted-foreground mt-1">Available for same-day reservation</p>
          </div>
        </motion.div>

        {/* Time Slots */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Select Time Slot
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  selectedSlot === slot
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-card text-foreground hover:bg-secondary shadow-soft"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Confirm Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-6"
        >
          <Button
            size="lg"
            className="w-full h-14 text-lg rounded-2xl"
            disabled={!selectedSlot}
            onClick={handleConfirm}
          >
            Confirm Reservation
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-3">
            You'll receive a confirmation QR code
          </p>
        </motion.div>
      </div>
    </PageContainer>
  );
}

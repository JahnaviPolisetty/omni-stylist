import { Package, Truck, CheckCircle2, Circle, MessageCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { NavHeader } from "@/components/ui/nav-header";
import { Button } from "@/components/ui/button";

const orderSteps = [
  { id: 1, label: "Order Placed", time: "Dec 12, 10:30 AM", complete: true, icon: Package },
  { id: 2, label: "Packed", time: "Dec 12, 4:00 PM", complete: true, icon: Package },
  { id: 3, label: "Out for Delivery", time: "Dec 14, 9:00 AM", complete: true, icon: Truck },
  { id: 4, label: "Delivered", time: "Expected by 6:00 PM", complete: false, icon: CheckCircle2 },
];

export default function Tracking() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <NavHeader title="Order Tracking" backTo="/" />

      <div className="px-4 py-6 space-y-6">
        {/* Order Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-4 shadow-soft"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=128&h=128&fit=crop"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Navy Indo-Western Kurta Set</h3>
              <p className="text-sm text-muted-foreground">Order #OM12345678</p>
              <p className="text-sm text-primary font-medium mt-1">₹4,999</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-6 shadow-soft"
        >
          <h3 className="font-medium text-foreground mb-6">Delivery Status</h3>
          <div className="space-y-0">
            {orderSteps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === orderSteps.length - 1;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.complete
                          ? "bg-timeline-complete text-success-foreground"
                          : "bg-timeline-pending text-muted-foreground"
                      }`}
                    >
                      {step.complete ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </div>
                    {!isLast && (
                      <div
                        className={`w-0.5 h-12 ${
                          step.complete ? "bg-timeline-complete" : "bg-timeline-pending"
                        }`}
                      />
                    )}
                  </div>
                  <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                    <p className={`font-medium ${step.complete ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.label}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Delivery Info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/5 rounded-2xl p-4 border border-primary/20"
        >
          <div className="flex items-center gap-3">
            <Truck className="w-6 h-6 text-primary" />
            <div>
              <p className="font-medium text-foreground">Your order is on the way!</p>
              <p className="text-sm text-muted-foreground">Arriving by 6:00 PM today</p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-3 pt-4"
        >
          <Button size="lg" className="w-full gap-2">
            <MessageCircle className="w-5 h-5" />
            Contact Support
          </Button>
          <Button variant="outline" size="lg" className="w-full gap-2" onClick={() => navigate("/")}>
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        </motion.div>
      </div>
    </PageContainer>
  );
}

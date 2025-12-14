import { MessageCircle, Shirt, MapPin, Sparkles, TrendingUp, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/ui/page-container";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Sparkles, label: "Wedding Collection", color: "bg-primary/10 text-primary" },
  { icon: TrendingUp, label: "Trending Now", color: "bg-accent/20 text-accent-foreground" },
  { icon: Star, label: "Best Sellers", color: "bg-success/10 text-success" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageContainer className="pb-8">
      {/* Header */}
      <header className="px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">AI-Powered</p>
          <h1 className="text-4xl font-serif text-foreground mt-2">
            <span className="text-primary">OmniStylist</span><br />
            <span className="text-2xl">Assistant</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            AI-powered styling, personalized for you
          </p>
        </motion.div>
      </header>

      {/* Main Actions */}
      <div className="px-6 space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            className="w-full h-16 text-lg justify-start gap-4 rounded-2xl shadow-soft"
            onClick={() => navigate("/chat")}
          >
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            Chat with Stylist
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="secondary"
            size="lg"
            className="w-full h-16 text-lg justify-start gap-4 rounded-2xl shadow-soft"
            onClick={() => navigate("/recommendations")}
          >
            <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
              <Shirt className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-foreground">Explore Outfits</span>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="w-full h-16 text-lg justify-start gap-4 rounded-2xl"
            onClick={() => navigate("/reserve/navy-kurta")}
          >
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-foreground">Reserve In-Store</span>
          </Button>
        </motion.div>
      </div>

      {/* Categories */}
      <div className="px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="font-serif text-xl text-foreground mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => navigate("/recommendations")}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-foreground">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Nav Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="px-6 mt-10"
      >
        <button
          onClick={() => navigate("/tracking")}
          className="w-full p-4 bg-secondary/50 rounded-2xl text-center"
        >
          <p className="text-sm text-muted-foreground">Have an active order?</p>
          <p className="text-primary font-medium mt-1">Track your delivery →</p>
        </button>
      </motion.div>
    </PageContainer>
  );
}

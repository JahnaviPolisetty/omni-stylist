import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Recommendations from "./pages/Recommendations";
import ProductDetails from "./pages/ProductDetails";
import Reserve from "./pages/Reserve";
import Confirmation from "./pages/Confirmation";
import Tracking from "./pages/Tracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/reserve/:id" element={<Reserve />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    
      <motion.div
        className="w-8 h-8 border-4 border-t-4 border-t-purple-500 border-black-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

  );
};

export default LoadingSpinner;
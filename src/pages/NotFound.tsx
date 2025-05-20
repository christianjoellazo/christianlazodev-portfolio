
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-8xl md:text-9xl font-bold text-navy dark:text-primary">404</span>
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Page Not Found
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Oops! It seems the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-navy hover:bg-navy/90 text-white dark:bg-primary dark:text-navy flex gap-2 items-center focus-ring"
          >
            <Link to="/">
              <Home size={18} aria-hidden="true" />
              Return Home
            </Link>
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 flex gap-2 items-center focus-ring"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;

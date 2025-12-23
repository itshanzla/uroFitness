"use client";

import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface PasswordFieldProps {
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  isError?: boolean;
}

export const PasswordField: React.FC<PasswordFieldProps> = ({
  name,
  value,
  onChange,
  onBlur,
  placeholder = "••••••••",
  required = false,
  isError = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative group">
      <input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        required={required}
        className={`input-field pr-11 ${
          isError ? "!border-feedback-error bg-feedback-error/5" : ""
        }`}
      />
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-background-hover text-text-muted hover:text-text-primary transition-colors focus:outline-none"
        aria-label={isVisible ? "Hide password" : "Show password"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isVisible ? (
            <motion.div
              key="eye-off"
              initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              <FiEyeOff className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="eye"
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: -45 }}
              transition={{ duration: 0.15 }}
            >
              <FiEye className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

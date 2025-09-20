"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-lg shadow p-8 max-w-xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">Contact Us</h3>
      {submitted && (
        <motion.div
          className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thank you! Your message has been sent.
        </motion.div>
      )}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Name</label>
        <input
          {...register("name", { required: true })}
          className="border rounded w-full px-3 py-2"
        />
        {errors.name && <span className="text-red-600 text-xs">Name is required</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          className="border rounded w-full px-3 py-2"
        />
        {errors.email && <span className="text-red-600 text-xs">Valid email is required</span>}
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          {...register("message", { required: true })}
          className="border rounded w-full px-3 py-2"
          rows={4}
        />
        {errors.message && <span className="text-red-600 text-xs">Message is required</span>}
      </div>
      <button
        type="submit"
        disabled={isSubmitSuccessful}
        className="w-full bg-blue-700 text-white font-bold py-3 rounded hover:bg-blue-800 transition"
      >
        Send Message
      </button>
    </motion.form>
  );
}
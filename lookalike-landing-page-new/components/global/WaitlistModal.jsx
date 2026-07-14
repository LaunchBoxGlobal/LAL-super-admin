"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X, CheckCircle2 } from "lucide-react";
import axios from "axios";

export function WaitlistModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message:
        "Hello this is dummy message from your waitlist form from the landing page.",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      setApiError("");

      try {
        setSubmitting(true);

        // await axios.post("https://api.lookalikematch.com/api/customer-support", {
        //   name: values.name,
        //   email: values.email,
        //   subject: "Waitlist Form",
        //   message:
        //     "Hello this is dummy message from your waitlist form from the landing page.",
        // });
        const timestamp = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());

        await axios.post("/api/waitlist", {
          name: values.name,
          email: values.email.toLowerCase(),
        });

        setIsSubmitted(true);
        formik.resetForm();
      } catch (error) {
        console.error("API Error:", error);

        const apiResponse = error?.response?.data;

        setApiError(
          apiResponse?.message ||
            apiResponse?.error ||
            "Something went wrong. Please try again.",
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleClose = () => {
    setIsSubmitted(false);
    setApiError("");
    formik.resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/20 backdrop-blur-md z-40"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.08)] pointer-events-auto border border-gray-100 overflow-hidden relative"
            >
              {/* Background */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-50 z-0" />

              <div className="relative z-10 p-8">
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 bg-white/50 rounded-full p-1 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* SUCCESS STATE */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      You&apos;re on the list!
                    </h3>

                    <p className="text-gray-500">
                      We&apos;ll notify you as soon as we launch.
                    </p>

                    <button
                      onClick={handleClose}
                      className="mt-8 px-6 py-3 w-full gradient-bg text-white rounded-2xl font-medium"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* HEADER */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        Join the waitlist
                      </h2>
                      <p className="text-gray-500 text-sm">
                        Get early access and be the first to know when we
                        launch.
                      </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                      {/* NAME */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>

                        <input
                          name="name"
                          type="text"
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                        />

                        {formik.touched.name && formik.errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.name}
                          </p>
                        )}
                      </div>

                      {/* EMAIL */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>

                        <input
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-gray-100 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />

                        {formik.touched.email && formik.errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {formik.errors.email}
                          </p>
                        )}
                      </div>

                      {/* API ERROR */}
                      {apiError && (
                        <p className="text-red-500 text-sm">{apiError}</p>
                      )}

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="w-full mt-6 px-6 py-3.5 gradient-bg text-white rounded-2xl font-medium disabled:opacity-60"
                      >
                        {formik.isSubmitting
                          ? "Joining..."
                          : "Get Early Access"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

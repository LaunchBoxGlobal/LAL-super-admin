import { useFormik } from "formik";
import * as Yup from "yup";

export const createNotificationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  description: Yup.string()
    .required("Description is required")
    .min(5, "Description must be at least 5 characters")
    .max(150, "Description must be less than 150 characters"),
});

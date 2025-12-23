"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { PasswordField } from "@/components/common/PasswordField";
import { authUtils } from "@/lib/auth";

const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

export default function LoginPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values, { setSubmitting }) => {
      const users = authUtils.getUsers();
      const normalizedEmail = values.email.toLowerCase();
      if (users.find((u) => u.email === normalizedEmail)) {
        toast.error("User with this email already exists", {
          id: "signup-toast",
        });
        setSubmitting(false);
        return;
      }

      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        email: normalizedEmail,
        password: values.password,
      };

      authUtils.saveUser(newUser);

      const session = {
        user: { id: newUser.id, email: newUser.email },
        token: "bearer_" + authUtils.generateToken(),
        refreshToken: "refresh_" + authUtils.generateToken(),
      };

      authUtils.setSession(session);
      toast.success("Account created successfully!");
      setSubmitting(false);
      router.push("/dashboard");
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background-page">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-button-secondary-hover text-button-primary mb-4 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-text-primary">
            Create Your Account
          </h1>
          <p className="text-text-secondary mt-2">
            Start your personalized health tracking journey
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="card space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-bold text-text-secondary">
                Email
              </label>
              {formik.touched.email && formik.errors.email && (
                <span className="text-xs text-feedback-error font-medium">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="you@example.com"
              className={`input-field ${
                formik.touched.email && formik.errors.email
                  ? "!border-feedback-error bg-feedback-error/5"
                  : ""
              }`}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-bold text-text-secondary">
                Password
              </label>
              {formik.touched.password && formik.errors.password && (
                <span className="text-xs text-feedback-error font-medium">
                  {formik.errors.password}
                </span>
              )}
            </div>
            <PasswordField
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Create a password"
              isError={!!(formik.touched.password && formik.errors.password)}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-bold text-text-secondary">
                Confirm password
              </label>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="text-xs text-feedback-error font-medium">
                    {formik.errors.confirmPassword}
                  </span>
                )}
            </div>
            <PasswordField
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm your password"
              isError={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              if (Object.keys(formik.errors).length > 0) {
                formik.setTouched({
                  email: true,
                  password: true,
                  confirmPassword: true,
                });
              }
            }}
            className="w-full btn-primary py-3 transition-all hover:scale-[1.01]"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Creating..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-text-muted mt-4">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-text-link hover:underline"
            >
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-text-muted mt-4 leading-relaxed">
            By creating an account, you agree that this app provides general
            wellness tracking only and is not intended for medical diagnosis.
          </p>
        </form>
      </div>
    </div>
  );
}

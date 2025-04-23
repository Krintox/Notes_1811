'use client';

import { CreateUserInput, createUserSchema } from "@/lib/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpWithEmailAndPassword } from "../_actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { motion } from "framer-motion";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const methods = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateUserInput> = (values) => {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword({
        data: values,
        emailRedirectTo: `${location.origin}/auth/callback`,
      });
      const { error } = JSON.parse(result);
      if (error?.message) {
        toast.error(error.message);
        reset({ password: "" });
        return;
      }

      toast.success("Registered successfully");
      router.push("/login");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Full Name</label>
        <Input
          {...register("name")}
          placeholder="John Doe"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.name && (
          <p className="text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Email</label>
        <Input
          type="email"
          {...register("email")}
          placeholder="your@email.com"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Password</label>
        <Input
          type="password"
          {...register("password")}
          placeholder="••••••••"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.password && (
          <p className="text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-300">Confirm Password</label>
        <Input
          type="password"
          {...register("passwordConfirm")}
          placeholder="••••••••"
          className="bg-gray-700 border-gray-600 text-white"
        />
        {errors.passwordConfirm && (
          <p className="text-sm text-red-400">{errors.passwordConfirm.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary-600 hover:bg-primary-700"
      >
        {isPending ? "Creating account..." : "Sign Up"}
      </Button>
    </form>
  );
};
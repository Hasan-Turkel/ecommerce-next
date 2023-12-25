"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { user } = useSelector((state: any) => state.auth);
  let router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("login");
    }
  }, [user]);

  return <section>{children}</section>;
}
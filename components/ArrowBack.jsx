'use client'

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ArrowBack() {
  const router = useRouter();
  return <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />

}
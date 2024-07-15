"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const ModalBackdrop = () => {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
};

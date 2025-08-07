"use client"
import React from "react";
import { Button } from "../ui/button";
import { setAddProductDialog } from "@/store/slices/stateSlice";
import { useDispatch } from "react-redux";

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
    const dispatch = useDispatch()
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 font-medium max-w-2xl">{description}</p>
      </div>
      <Button onClick={()=> dispatch(setAddProductDialog(true))}>Add Product</Button>
    </div>
  );
}

export default Header;

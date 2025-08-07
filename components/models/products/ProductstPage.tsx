"use client";
import React from "react";
import { useGetProductsQuery } from "@/store/slices/apiSlice";
import { Loader } from "lucide-react";
import { DataTable } from "@/components/tables/products/data-table";
import { columns } from "@/components/tables/products/columns";
import Header from "@/components/elements/Header";
import AddProductDialog from "./AddProductDialog";

export default function ProductstPage() {
  const { data, isError, isLoading } = useGetProductsQuery();

  console.log("All products:", data);

  if (isLoading) {
    return (
      <div className="w-full h-[93vh] flex flex-col items-center justify-center ">
        <Loader className="animate-spin size-8" />
        <h1 className="text-lg font-medium">Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-[93vh] flex flex-col items-center justify-center ">
        <h1 className="text-lg font-medium">Can't load data</h1>
      </div>
    );
  }
  return (
    <div>
      <AddProductDialog/>
      <div>
        <DataTable data={data?.products} columns={columns} />
      </div>
    </div>
  );
}

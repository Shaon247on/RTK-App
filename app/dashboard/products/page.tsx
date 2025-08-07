import Header from "@/components/elements/Header";
import ProductstPage from "@/components/models/products/ProductstPage";
import React from "react";

export default function page() {
  return (
    <section className="p-4">
      <Header
        description="Browse, add, edit, and organize your product inventory. Maintain accurate product data to streamline sales, stock management, and customer experience across all channels."
        title="Product Management"
      />
      <ProductstPage />
    </section>
  );
}

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@/types/productType";
import { Separator } from "@/components/ui/separator";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "",
    header: "No.",
    cell: ({ row }) => <div>{row.index + 1}</div>,
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    accessorKey: "Action",
    enableHiding: false,
    cell: ({ row }) => {
      const product: Product = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="flex items-center flex-col justify-center px-2">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Separator/>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="w-20 flex items-center justify-baseline px-2 gap-3"><Eye/> View </DropdownMenuItem>
            <DropdownMenuItem className="w-20 flex items-center justify-baseline px-2 gap-3"><Pencil/> Edit </DropdownMenuItem>
            <DropdownMenuItem className="w-20 flex items-center justify-baseline px-2 gap-3"><Trash/> Delete </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

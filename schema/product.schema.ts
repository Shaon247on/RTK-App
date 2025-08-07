import z from "zod";

export const productSchema = z.object({
  title: z.string().min(2, 'Product title is required'),
  description: z.string().min(10, 'Description should be at least 10 characters'),
  price: z.number().min(0.01, 'Price must be greater than 0'),
  discountPercentage: z.number().min(0).max(100),
  stock: z.number().int().min(0),
  minimumOrderQuantity: z.number().int().min(1),
  availabilityStatus: z.enum(['In Stock', 'Out of Stock', 'Preorder']),
  brand: z.string().min(1),
  category: z.string().min(1),
  tags: z.string().array().optional(),
  sku: z.string(),
  weight: z.number(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number(),
  }),
  returnPolicy: z.string().optional(),
  warrantyInformation: z.string().optional(),
  shippingInformation: z.string().optional(),
  thumbnail: z.string().url({ message: 'Must be a valid URL' }),
})


export type ProductFormValues = z.infer<typeof productSchema>

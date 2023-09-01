"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
    id: string
    phone: string
    address: string
    isPaid: boolean
    totalPrice: String
    products: string
    createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Productos",
    },
    {
        accessorKey: "phone",
        header: "Telefono",
    },
    {
        accessorKey: "address",
        header: "Dirección",
    },
    {
        accessorKey: "totalPrice",
        header: "Precio Total",
    },
    {
        accessorKey: "isPaid",
        header: "Pagado",
    },
]

"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { ColorColumn, columns } from "./columns"

interface ColorsClientProps {
    data: ColorColumn[],
}

export const ColorsClient: React.FC<ColorsClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title={`Colores (${data.length})`}
                    description="Gestiona los colores de tu tienda"
                />
                <Button onClick={() =>
                    router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir color
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="name" />
            <Heading title="API" description="API de tableros" />
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId" />
        </>
    )
}
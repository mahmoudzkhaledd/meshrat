import React from 'react'
import { prisma } from '@/lib/db';
import NotFoundComponent from '@/components/GeneralComponents/NotFoundComponent';
import { Box } from 'lucide-react';
import AddServiceForm from '../../add/_components/AddServiceForm';
export default async function EditServicePage({ params }: { params: { serviceId: string; } }) {
    const service = await prisma.service.findUnique({
        where: {
            id: params.serviceId,
        },
    });
    if (service == null) {
        return <NotFoundComponent
            icon={Box}
            title='This service is not found!'
        />;
    }
    return (
        <div>
            <AddServiceForm service={JSON.parse(JSON.stringify(service))} />
        </div>
    )
}

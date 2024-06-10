
import React from 'react'
import AddServiceForm from './_components/AddServiceForm';
import { Metadata } from 'next';
export const metadata: Metadata ={
    title: "Add Service"
}
export default function AddServicePage() {
    return (
        <div>
            <AddServiceForm />
        </div>
    );
}

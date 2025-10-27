import React from "react";
import { RegistrationForm } from "./components/RegisterForm";
import { MultiStepForm } from "./components/MultiStepForm";
import { DynamicFieldForm } from "./components/DynamicFieldForm";
import { AdvancedForm } from "./components/AdvancedForm";


export default function app() {
    return (
        <div className="p-6 space-y-6 container mx-auto">
            <h1 className="text-2xl font-bold">Tugas Hari ke-23 </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RegistrationForm />
                <MultiStepForm />
                <DynamicFieldForm />
                <AdvancedForm />
            </div>
        </div>
    );
}
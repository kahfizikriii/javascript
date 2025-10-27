import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

// Skema Zod untuk validasi semua langkah
const multiStepSchema = z.object({
    shippingName: z.string().min(1, "Nama penerima wajib diisi"),
    shippingAddress: z.string().min(1, "Alamat wajib diisi"),
    cardNumber: z.string().length(16, "Nomor kartu harus 16 digit").regex(/^\d+$/, "Nomor kartu harus berupa angka"),
    expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Format expiry MM/YY tidak valid"),
    notes: z.string().optional(),
});

type MultiStepFormValues = z.infer<typeof multiStepSchema>;

export function MultiStepForm() {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        getValues,
    } = useForm<MultiStepFormValues>({
        resolver: zodResolver(multiStepSchema),
        mode: "onTouched",
        defaultValues: {
            shippingName: "",
            shippingAddress: "",
            cardNumber: "",
            expiry: "",
            notes: "",
        },
    });

    async function next() {
        const fields: (keyof MultiStepFormValues)[] = step === 1 ? ["shippingName", "shippingAddress"] : ["cardNumber", "expiry"];
        const ok = await trigger(fields);
        if (ok) setStep((s) => Math.min(totalSteps, s + 1));
    }

    function back() {
        setStep((s) => Math.max(1, s - 1));
    }

    function onSubmit(values: MultiStepFormValues) {
        console.log("Multi-step submit:", values);
        alert("Checkout selesai");
    }

    const progress = Math.round(((step - 1) / (totalSteps - 1)) * 100);

    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle>Soal 2 Multi-Step Form</CardTitle>
            </CardHeader>
            <CardContent>
                <Progress value={progress} className="mb-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {step === 1 && (
                        <div className="space-y-3">
                            <div>
                                <Label htmlFor="shippingName">Nama Penerima</Label>
                                <Input id="shippingName" {...register("shippingName")} />
                                {errors.shippingName && <p className="text-red-600 text-sm">{errors.shippingName.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="shippingAddress">Alamat</Label>
                                <Textarea id="shippingAddress" {...register("shippingAddress")} />
                                {errors.shippingAddress && <p className="text-red-600 text-sm">{errors.shippingAddress.message}</p>}
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="space-y-3">
                            <div>
                                <Label htmlFor="cardNumber">Nomor Kartu</Label>
                                <Input id="cardNumber" {...register("cardNumber")} />
                                {errors.cardNumber && <p className="text-red-600 text-sm">{errors.cardNumber.message}</p>}
                            </div>
                            <div>
                                <Label htmlFor="expiry">Expiry (MM/YY)</Label>
                                <Input id="expiry" placeholder="MM/YY" {...register("expiry")} />
                                {errors.expiry && <p className="text-red-600 text-sm">{errors.expiry.message}</p>}
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="space-y-3">
                            <div>
                                <p>
                                    <strong>Name :</strong> {getValues("shippingName")}
                                </p>
                                <p>
                                    <strong>Address :</strong> {getValues("shippingAddress")}
                                </p>
                                <p>
                                    <strong>Card Number :</strong> {getValues("cardNumber")}
                                </p>
                                <p>
                                    <strong>Expiry :</strong> {getValues("expiry")}
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-between mt-4">
                        {step > 1 ? <Button type="button" variant="outline" onClick={back}>Kembali</Button> : <div />}
                        {step < totalSteps && <Button type="button" onClick={next}>Lanjut</Button>}
                        {step === totalSteps && <Button type="submit">Bayar</Button>}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const registerSchema = z.object({
    fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    agree: z.boolean().refine((v) => v === true, "Anda harus menyetujui syarat"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        defaultValues: { fullName: "", email: "", password: "", agree: false },
    });


    function onSubmit(values: RegisterFormValues) {
        console.log("Registration submit:", values);
        alert("Registrasi berhasil (console untuk detail)");
    }


    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle>Soal 1 Form Registrasi</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="fullName">Nama Lengkap</Label>
                        <Input id="fullName" {...register("fullName")} />
                        {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
                    </div>


                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" {...register("email")} />
                        {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                    </div>


                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" {...register("password")} />
                        {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                    </div>


                    <div className="flex items-center gap-2">
                        <Input id="agree" type="checkbox" {...register("agree")} className="h-4 w-4" />
                        <Label htmlFor="agree">Saya setuju dengan syarat & ketentuan</Label>
                    </div>
                    {errors.agree && <p className="text-sm text-red-600">{errors.agree.message}</p>}


                    <div className="flex justify-end">
                        <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? "Mengirim..." : "Daftar"}</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MAX_FILE_SIZE = 500000; // 500KB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const advancedSchema = z.object({
    title: z.string().min(3, "Judul minimal 3 karakter"),
    file: z.any()
        .refine((files) => files?.length == 1, "File gambar wajib diisi.")
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Ukuran file maksimal 500KB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Format gambar yang diterima .jpg, .jpeg, .png dan .webp."
        ),
});


export function AdvancedForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: zodResolver(advancedSchema) });
    const [preview, setPreview] = useState<string | null>(null);
    const fileVal = watch("file");


    useEffect(() => {
        if (fileVal && fileVal[0]) {
            const url = URL.createObjectURL(fileVal[0]);
            setPreview(url);
            return () => URL.revokeObjectURL(url);
        }
        setPreview(null);
    }, [fileVal]);


    function onSubmit(value: z.infer<typeof advancedSchema>) {
        console.log("Advanced submit:", value);
        alert("Uploaded!");
    }


    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle>Soal 4 File Upload + Preview</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="title">Judul</Label>
                        <Input id="title" {...register("title")} />
                        {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="file">Upload File</Label>
                        <Input id="file" type="file" accept="image/*" {...register("file")} />
                        {errors.file && <p className="text-red-600 text-sm">{errors.file.message as string}</p>}
                        {preview && <img src={preview} alt="preview" className="w-40 h-40 mt-2 object-cover" />}
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </CardContent>
        </Card>
    );
}
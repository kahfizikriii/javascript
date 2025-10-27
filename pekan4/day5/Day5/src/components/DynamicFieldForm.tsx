import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const participantSchema = z.object({ name: z.string().min(1), email: z.string().email() });
const dynamicSchema = z.object({ participants: z.array(participantSchema).min(1) });
type DynamicFormValues = z.infer<typeof dynamicSchema>;


export function DynamicFieldForm() {
    const { control, register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(dynamicSchema),
        defaultValues: { participants: [{ name: "", email: "" }] },
    });
    const { fields, append, remove } = useFieldArray({ control, name: "participants" });

    function onSubmit(data: DynamicFormValues) {
        console.log("Dynamic form data:", data);
        alert("Data disimpan");
    }


    return (
        <Card className="w-full max-w-xl">
            <CardHeader>
                <CardTitle>Soal 3 Dynamic Fields</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {fields.map((f, idx) => (
                        <div key={f.id} className="grid grid-cols-12 gap-2 items-end">
                            <div className="col-span-5">
                                <Label htmlFor={`participants.${idx}.name`}>Nama</Label>
                                <Input id={`participants.${idx}.name`} {...register(`participants.${idx}.name`)} />
                                {errors.participants?.[idx]?.name && <p className="text-red-600 text-sm">{errors.participants[idx].name.message}</p>}
                            </div>
                            <div className="col-span-5">
                                <Label htmlFor={`participants.${idx}.email`}>Email</Label>
                                <Input id={`participants.${idx}.email`} {...register(`participants.${idx}.email`)} />
                                {errors.participants?.[idx]?.email && <p className="text-red-600 text-sm">{errors.participants[idx].email.message}</p>}
                            </div>
                            <div className="col-span-2">
                                <Button type="button" variant="destructive" onClick={() => remove(idx)}>Hapus</Button>
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <Button type="button" onClick={() => append({ name: "", email: "" })}>Tambah</Button>
                        <Button type="submit">Simpan</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
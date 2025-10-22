// components/ProfileCard.jsx atau profile/page.jsx

import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react"; // Ikon untuk Alert

export default function ProfilePage() {
  return (
    <div className="flex justify-center items-center p-8">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Edit Profil</CardTitle>
          <CardDescription>Perbarui informasi akun Anda.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Perhatian!</AlertTitle>
            <AlertDescription>
              Pastikan Anda menyimpan perubahan sebelum meninggalkan halaman ini.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
            <Input id="name" placeholder="Masukkan nama Anda"  />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="contoh@gmail.com" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="mr-2">Batal</Button>
          <Button>Simpan Perubahan</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
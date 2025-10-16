import { useForm } from "../hooks/useForm";

export default function FormComponent() {
  const { formData, handleChange } = useForm({ name: "", email: "" });

  return (
    <div>
      <h3>Form Input</h3>
      <input name="name" placeholder="Nama" onChange={handleChange} value={formData.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
      <p>Nama: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

import React, { useState } from "react";
import { InputField, SelectField } from "./components/inputField";

export default function UserForm({ onStatusChange, setSummaryData }) {
  const [formData, setFormData] = useState({ playerId: "", nickname: "", email: "", item: "", payment: "" });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let msg = "";
    if (name === "playerId") {
      if (!value) msg = "ID Pemain wajib diisi!";
      else if (isNaN(value)) msg = "ID harus berupa angka!";
    }
    if (name === "nickname" && value.length < 3) msg = "Nick Name terlalu pendek!";
    if (name === "email" && (!value.includes("@") || !value.includes("."))) msg = "Format email tidak valid!";
    if (!value && (name === "item" || name === "payment")) msg = "Pilihan wajib dipilih!";
    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...formData, [name]: value };
    setFormData(nextForm);
    
    const errorMsg = validate(name, value);
    const nextErrors = { ...errors, [name]: errorMsg };
    setErrors(nextErrors);

    setSummaryData(nextForm);

    const isValid = Object.values(nextForm).every(v => v !== "") && 
                    Object.values(nextErrors).every(e => !e);
    onStatusChange(isValid);
  };

  return (
    <div className="space-y-2">
      <InputField 
        label="ID Pemain" 
        name="playerId" 
        placeholder="Contoh: 12345678" 
        value={formData.playerId} 
        onChange={handleChange} 
        error={errors.playerId} 
      />
      <InputField 
        label="Nick Name" 
        name="nickname" 
        placeholder="farrassurya" 
        value={formData.nickname} 
        onChange={handleChange} 
        error={errors.nickname} 
      />
      
      <div className="grid grid-cols-2 gap-4">
        <SelectField 
          label="Pilihan Top Up" 
          name="item" 
          value={formData.item} 
          onChange={handleChange} 
          error={errors.item} 
          options={[
            {val:"100 Diamonds", label:"100 Diamonds"}, 
            {val:"Weekly Pass", label:"Weekly Pass"}
          ]} 
        />
        <SelectField 
          label="Metode Pembayaran" 
          name="payment" 
          value={formData.payment} 
          onChange={handleChange} 
          error={errors.payment} 
          options={[
            {val:"ShopeePay", label:"ShopeePay"}, 
            {val:"DANA", label:"DANA"}
          ]} 
        />
      </div>

      <InputField 
        label="Email Konfirmasi" 
        name="email" 
        placeholder="suryaputra24si@mahasiswa.pcr.ac.id" 
        value={formData.email} 
        onChange={handleChange} 
        error={errors.email} 
      />
    </div>
  );
}
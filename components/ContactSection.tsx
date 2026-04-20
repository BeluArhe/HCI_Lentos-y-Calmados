import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Por favor, introduce un correo válido.");
      return;
    }
    setError(null);
    setIsSent(true);
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-md mx-auto px-4 text-center">
        {isSent ? (
          <div className="p-6 bg-green-100 text-green-800 rounded-lg animate-in fade-in zoom-in">
            <h3 className="font-bold">¡Suscripción exitosa!</h3>
            <p>Tu experiencia ahora es más segura y calmada.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold">Únete al cambio</h2>
            <p className="text-slate-600 mb-6">Recibe actualizaciones sobre mejoras de usabilidad.</p>
            <Input 
              label="Email" 
              placeholder="nombre@ejemplo.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />
            <Button className="w-full">Suscribirse</Button>
          </form>
        )}
      </div>
    </section>
  );
};
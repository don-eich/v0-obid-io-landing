"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email) {
      setError("Nombre y email son obligatorios.");
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from("leads")
      .insert([{ name, email, phone, message }]);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setOk(true);
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white shadow rounded-xl p-2 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
    Dejanos tus datos
  </h2>
      <div>
        <input
          name="name"
          placeholder="Nombre completo"
          required
          className="w-full border rounded p-2 text-gray-900"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full border rounded p-2 text-gray-900"
        />
      </div>
      <div>
        <input
          name="phone"
          placeholder="Teléfono (opcional)"
          className="w-full border rounded p-2 text-gray-900"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="¿Cómo podemos ayudarte?"
          rows={4}
          className="w-full border rounded p-2 text-gray-900"
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      {ok && (
        <div className="text-green-600 text-sm mb-2">¡Gracias por tu interés! Te contactaremos pronto.</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-obid-accent hover:bg-obid-accent/90 text-white py-3 text-lg rounded-xl"
      >
        {loading ? "Enviando..." : "Quiero saber más"}
      </button>
    </form>
  );
}

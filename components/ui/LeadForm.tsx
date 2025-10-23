"use client";
import { useState, RefObject } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface LeadFormProps {
  autoFocusRef?: RefObject<HTMLInputElement>;
}

export default function LeadForm({ autoFocusRef }: LeadFormProps = {}) {
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
      className="w-full bg-white rounded-xl space-y-3"
    >
      <h2 className="text-xl font-bold text-center mb-4 text-gray-900 pr-8">
        Dejanos tus datos
      </h2>
      <div>
        <input
          ref={autoFocusRef}
          name="name"
          placeholder="Nombre completo"
          required
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <input
          name="phone"
          placeholder="Teléfono (opcional)"
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="¿Cómo podemos ayudarte?"
          rows={3}
          className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm p-2 bg-red-50 rounded">{error}</div>
      )}
      {ok && (
        <div className="text-green-600 text-sm p-2 bg-green-50 rounded">¡Gracias por tu interés! Te contactaremos pronto.</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-obid-accent hover:bg-obid-accent/90 disabled:opacity-50 text-white py-2.5 text-base font-semibold rounded-lg transition-all"
      >
        {loading ? "Enviando..." : "Quiero saber más"}
      </button>
    </form>
  );
}

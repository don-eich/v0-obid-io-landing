"use server"

export async function submitDemoRequest(formData: FormData) {
  try {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      fleetSize: formData.get("fleetSize"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
      source: "obid.io-landing",
    }

    // Validate required fields
    if (!data.name || !data.email || !data.company) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos",
      }
    }

    // Send to n8n webhook
    const response = await fetch("https://test-tatuaigent.app.n8n.cloud/webhook/obidio-demomail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Error al enviar la solicitud")
    }

    return {
      success: true,
      message: "¡Gracias! Te contactaremos pronto para coordinar tu demo.",
    }
  } catch (error) {
    console.error("Error submitting demo request:", error)
    return {
      success: false,
      message: "Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.",
    }
  }
}

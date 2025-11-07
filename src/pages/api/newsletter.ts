import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Service de newsletter non configuré' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create contact in Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || '',
          LASTNAME: lastName || '',
        },
        listIds: import.meta.env.BREVO_LIST_ID ? [parseInt(import.meta.env.BREVO_LIST_ID)] : undefined,
        updateEnabled: true, // Update if contact already exists
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Contact already exists (not an error for us)
      if (response.status === 400 && data.code === 'duplicate_parameter') {
        return new Response(
          JSON.stringify({ success: true, message: 'Vous êtes déjà inscrit(e) à notre newsletter !' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      console.error('Brevo API error:', data);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'inscription. Veuillez réessayer.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Inscription réussie ! Merci de votre confiance ✨' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Une erreur est survenue. Veuillez réessayer.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

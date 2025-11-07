import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, firstName, lastName, doubleOptIn = true } = body;

    // Validate email
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
    const DOI_TEMPLATE_ID = import.meta.env.BREVO_DOI_TEMPLATE_ID; // Double Opt-In template ID

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Service de newsletter non configuré' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if contact already exists
    const checkResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    });

    // Contact already exists and is subscribed
    if (checkResponse.ok) {
      const existingContact = await checkResponse.json();
      if (existingContact.emailBlacklisted === false) {
        return new Response(
          JSON.stringify({ success: true, message: 'Vous êtes déjà inscrit(e) à notre newsletter !' }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Create or update contact with double opt-in
    const contactData: any = {
      email,
      attributes: {
        FIRSTNAME: firstName || '',
        LASTNAME: lastName || '',
      },
      updateEnabled: true,
    };

    // Add list IDs if configured
    if (import.meta.env.BREVO_LIST_ID) {
      contactData.listIds = [parseInt(import.meta.env.BREVO_LIST_ID)];
    }

    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: contactData.attributes,
        includeListIds: contactData.listIds || [],
        templateId: DOI_TEMPLATE_ID ? parseInt(DOI_TEMPLATE_ID) : undefined,
        redirectionUrl: `${import.meta.env.SITE_URL || 'https://spiritpathlight.com'}/newsletter/confirmation`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', data);

      // Fallback to regular subscription if DOI not configured
      if (response.status === 400 || !DOI_TEMPLATE_ID) {
        const fallbackResponse = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'api-key': BREVO_API_KEY,
          },
          body: JSON.stringify(contactData),
        });

        if (fallbackResponse.ok) {
          return new Response(
            JSON.stringify({ success: true, message: 'Inscription réussie ! Merci de votre confiance ✨' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          );
        }
      }

      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'inscription. Veuillez réessayer.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Un email de confirmation vous a été envoyé. Veuillez vérifier votre boîte mail pour confirmer votre inscription ✉️',
        doubleOptIn: true
      }),
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

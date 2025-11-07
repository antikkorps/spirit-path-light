import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cookieConsent',
  title: 'Consentement Cookie',
  type: 'document',
  fields: [
    defineField({
      name: 'ipHash',
      title: 'Hash IP',
      type: 'string',
      description: 'Hash SHA-256 de l\'adresse IP (anonymisé)',
      readOnly: true,
    }),
    defineField({
      name: 'region',
      title: 'Région',
      type: 'string',
      description: 'Région géographique (pays ou région)',
      readOnly: true,
    }),
    defineField({
      name: 'consentDate',
      title: 'Date du consentement',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'choices',
      title: 'Choix de cookies',
      type: 'object',
      fields: [
        {
          name: 'necessary',
          title: 'Cookies nécessaires',
          type: 'boolean',
          initialValue: true,
          description: 'Toujours actifs (requis pour le fonctionnement du site)',
        },
        {
          name: 'analytics',
          title: 'Cookies analytiques',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'marketing',
          title: 'Cookies marketing',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'preferences',
          title: 'Cookies de préférences',
          type: 'boolean',
          initialValue: false,
        },
      ],
      readOnly: true,
    }),
    defineField({
      name: 'userAgent',
      title: 'User Agent',
      type: 'string',
      description: 'Navigateur utilisé (pour stats uniquement)',
      readOnly: true,
    }),
    defineField({
      name: 'expiryDate',
      title: 'Date d\'expiration',
      type: 'datetime',
      description: 'Date à laquelle ce consentement doit être supprimé (6 mois après)',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      region: 'region',
      date: 'consentDate',
      analytics: 'choices.analytics',
    },
    prepare(selection) {
      const {region, date, analytics} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('fr-FR') : 'N/A'
      return {
        title: `${region || 'Inconnu'} - ${formattedDate}`,
        subtitle: `Analytics: ${analytics ? 'Accepté' : 'Refusé'}`,
      }
    },
  },
})

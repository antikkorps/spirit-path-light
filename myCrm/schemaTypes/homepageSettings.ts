import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageSettings',
  title: 'Paramètres de la page d\'accueil',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Section Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Titre principal',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'quote',
          title: 'Citation',
          type: 'string',
        },
        {
          name: 'ctaText',
          title: 'Texte du bouton',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Lien du bouton',
          type: 'string',
        },
        {
          name: 'backgroundImage',
          title: 'Image de fond',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'Section À propos',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Titre',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'image',
          title: 'Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'signature',
          title: 'Signature / Citation personnelle',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'values',
      title: 'Valeurs fondamentales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'emoji',
              title: 'Emoji',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Titre',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'color',
              title: 'Couleur',
              type: 'string',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                  {title: 'Accent', value: 'accent'},
                ],
              },
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'inspirationalQuote',
      title: 'Citation inspirante du jour',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Citation',
          type: 'text',
        },
        {
          name: 'author',
          title: 'Auteur',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Paramètres de la page d\'accueil',
      }
    },
  },
})

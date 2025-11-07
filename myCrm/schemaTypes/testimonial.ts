import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Avis client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom / Pseudonyme',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Note',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'testimonial',
      title: 'Témoignage',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'service',
      title: 'Service concerné',
      type: 'string',
      options: {
        list: [
          {title: 'Guidance spirituelle', value: 'guidance'},
          {title: 'Communication animale', value: 'animal'},
          {title: 'Contact défunt', value: 'defunt'},
          {title: 'Autre', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'avatarStyle',
      title: 'Style d\'avatar DiceBear',
      type: 'string',
      options: {
        list: [
          {title: 'Initials', value: 'initials'},
          {title: 'Shapes', value: 'shapes'},
          {title: 'Bottts Neutral', value: 'bottts-neutral'},
          {title: 'Lorelei', value: 'lorelei'},
          {title: 'Notionists', value: 'notionists'},
          {title: 'Thumbs', value: 'thumbs'},
        ],
      },
      initialValue: 'initials',
    }),
    defineField({
      name: 'avatarSeed',
      title: 'Seed de l\'avatar',
      type: 'string',
      description: 'Utilisé pour générer l\'avatar. Par défaut, utilise le nom.',
      initialValue: '',
    }),
    defineField({
      name: 'date',
      title: 'Date du témoignage',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isPublished',
      title: 'Publié',
      type: 'boolean',
      initialValue: false,
      description: 'Afficher ce témoignage sur le site',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Mis en avant',
      type: 'boolean',
      initialValue: false,
      description: 'Mettre en avant ce témoignage (apparaît en premier)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'testimonial',
      rating: 'rating',
      isPublished: 'isPublished',
    },
    prepare(selection) {
      const {title, subtitle, rating, isPublished} = selection
      return {
        title,
        subtitle: `${subtitle?.substring(0, 60)}... (${rating}⭐) ${isPublished ? '✓' : '✗'}`,
      }
    },
  },
})

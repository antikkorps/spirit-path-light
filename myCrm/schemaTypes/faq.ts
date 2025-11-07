import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ (Questions fréquentes)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Réponse',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Général', value: 'general'},
          {title: 'Services', value: 'services'},
          {title: 'Réservations', value: 'booking'},
          {title: 'Tarifs', value: 'pricing'},
          {title: 'Contact', value: 'contact'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre dans lequel la question apparaît (1, 2, 3...)',
      initialValue: 0,
    }),
    defineField({
      name: 'isPublished',
      title: 'Publié',
      type: 'boolean',
      initialValue: true,
      description: 'Afficher cette question sur le site',
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'string',
      description: 'Emoji ou icône pour la question (optionnel)',
      options: {
        list: [
          {title: 'Question ❓', value: '❓'},
          {title: 'Info ℹ️', value: 'ℹ️'},
          {title: 'Calendrier 📅', value: '📅'},
          {title: 'Argent 💰', value: '💰'},
          {title: 'Email ✉️', value: '✉️'},
          {title: 'Téléphone 📞', value: '📞'},
          {title: 'Étoile ⭐', value: '⭐'},
          {title: 'Cœur ❤️', value: '❤️'},
        ],
      },
    }),
    defineField({
      name: 'relatedPages',
      title: 'Pages associées',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Pages où cette FAQ devrait apparaître (ex: /services, /contact)',
      options: {
        list: [
          {title: 'Toutes les pages', value: 'all'},
          {title: 'Page d\'accueil', value: 'home'},
          {title: 'Services', value: 'services'},
          {title: 'Contact', value: 'contact'},
          {title: 'Blog', value: 'blog'},
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'question',
      category: 'category',
      isPublished: 'isPublished',
      icon: 'icon',
    },
    prepare(selection) {
      const {title, category, isPublished, icon} = selection
      return {
        title: `${icon || '❓'} ${title}`,
        subtitle: `${category} ${isPublished ? '✓' : '✗'}`,
      }
    },
  },
})

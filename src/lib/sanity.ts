import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: 'ml8qjzt7',
  dataset: 'production',
  useCdn: true, // set to false if you need fresh data
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function to fetch blog posts
export async function getBlogPosts() {
  return await sanityClient.fetch(`
    *[_type == "blogPost" && isDraft != true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      categories[]->{
        title,
        slug,
        color
      },
      tags,
      publishedAt,
      author->{
        name,
        image
      }
    }
  `)
}

// Helper function to fetch a single blog post by slug
export async function getBlogPost(slug: string) {
  return await sanityClient.fetch(`
    *[_type == "blogPost" && slug.current == $slug && isDraft != true][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      body,
      categories[]->{
        title,
        slug,
        color
      },
      tags,
      publishedAt,
      author->{
        name,
        image,
        bio
      },
      seo
    }
  `, { slug })
}

// Helper function to fetch published testimonials
export async function getTestimonials() {
  return await sanityClient.fetch(`
    *[_type == "testimonial" && isPublished == true] | order(isFeatured desc, date desc) {
      _id,
      name,
      rating,
      testimonial,
      service,
      avatarStyle,
      avatarSeed,
      date,
      isFeatured
    }
  `)
}

// Helper function to fetch homepage settings
export async function getHomepageSettings() {
  return await sanityClient.fetch(`
    *[_type == "homepageSettings"][0] {
      hero,
      about,
      values,
      inspirationalQuote
    }
  `)
}

// Helper function to generate DiceBear avatar URL
export function getDiceBearAvatar(style: string, seed: string) {
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${encodeURIComponent(seed)}`
}

// Helper function to fetch FAQs
export async function getFAQs(category?: string, page?: string) {
  let query = `*[_type == "faq" && isPublished == true`

  if (category) {
    query += ` && category == "${category}"`
  }

  if (page) {
    query += ` && "${page}" in relatedPages[]`
  }

  query += `] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order,
    icon,
    relatedPages
  }`

  return await sanityClient.fetch(query)
}

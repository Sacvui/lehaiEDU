import { groq } from 'next-sanity'

// Query for recent posts (homepage)
export const RECENT_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readingTime,
  "categories": categories[]->title,
  "author": author->{name, image}
}`

// Query for all posts (blog page)
export const ALL_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readingTime,
  featured,
  tags,
  "categories": categories[]->{title, slug, color},
  "author": author->{name, slug, image, role}
}`

// Query for single post
export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readingTime,
  featured,
  tags,
  body,
  "categories": categories[]->{title, slug, color},
  "author": author->{name, slug, image, role, bio, social},
  seo
}`

// Query for all categories
export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description,
  color,
  "postCount": count(*[_type == "post" && references(^._id)])
}`

// Query for posts by category
export const POSTS_BY_CATEGORY_QUERY = groq`*[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  readingTime,
  "categories": categories[]->{title, slug, color},
  "author": author->{name, image}
}`

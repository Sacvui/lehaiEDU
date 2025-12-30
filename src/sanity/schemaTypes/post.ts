import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            description: 'Short summary for previews and SEO',
            validation: Rule => Rule.max(200)
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'mainImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility'
                }
            ]
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'blockContent',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'featured',
            title: 'Featured Post',
            type: 'boolean',
            description: 'Display this post prominently on the homepage',
            initialValue: false
        }),
        defineField({
            name: 'readingTime',
            title: 'Reading Time (minutes)',
            type: 'number',
            description: 'Estimated reading time in minutes',
            initialValue: 5
        }),
        // SEO Fields
        defineField({
            name: 'seo',
            title: 'SEO Settings',
            type: 'object',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                {
                    name: 'metaTitle',
                    title: 'Meta Title',
                    type: 'string',
                    description: 'Override the default title for SEO (max 60 characters)',
                    validation: Rule => Rule.max(60)
                },
                {
                    name: 'metaDescription',
                    title: 'Meta Description',
                    type: 'text',
                    rows: 3,
                    description: 'SEO description (max 160 characters)',
                    validation: Rule => Rule.max(160)
                },
                {
                    name: 'keywords',
                    title: 'Focus Keywords',
                    type: 'array',
                    of: [{ type: 'string' }],
                    options: {
                        layout: 'tags'
                    }
                }
            ]
        })
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
            publishedAt: 'publishedAt',
            featured: 'featured'
        },
        prepare(selection) {
            const { author, publishedAt, featured } = selection
            const subtitle = [
                author && `by ${author}`,
                publishedAt && new Date(publishedAt).toLocaleDateString(),
                featured && '⭐ Featured'
            ].filter(Boolean).join(' • ')

            return { ...selection, subtitle }
        },
    },
})

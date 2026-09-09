import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'clientName',
            title: 'Client Name',
            type: 'string',
            validation: (Rule) => Rule.required().error('Client name is required.'),
        }),
        defineField({
            name: 'avatar',
            title: 'Client Avatar',
            type: 'image',
            options: {
                hotspot: true, // Enables cropping in Sanity Studio
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Important for accessibility and SEO.',
                },
            ],
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().min(10).max(500).error('Quote must be between 10 and 500 characters.'),
        }),
    ],
})
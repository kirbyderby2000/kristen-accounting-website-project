import { defineField, defineType } from 'sanity';



export const homePageType = defineType({
    name: 'homePage',
    title: 'Homepage',
    type: 'document',

    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
        }),

        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
        }),

        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
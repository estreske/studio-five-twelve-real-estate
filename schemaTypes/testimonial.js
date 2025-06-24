export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
    fields: [
      {
        name: 'quote',
        type: 'text',
        title: 'Quote',
        validation: Rule => Rule.required(),
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author Name',
        validation: Rule => Rule.required(),
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating (1–5 stars)',
        validation: Rule => Rule.min(1).max(5).required(),
      }
    ]
  }
  
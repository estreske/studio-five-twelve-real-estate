export default {
    name: 'blogPost',
    type: 'document',
    title: 'Blog Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'publishedAt',
        type: 'datetime',
        title: 'Published At'
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author'
      },
      {
        name: 'excerpt',
        type: 'text',
        title: 'Excerpt'
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }]
      }
    ]
  };
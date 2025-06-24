// schemas/listing.js
export default {
    name: 'listing',
    title: 'Listing',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'price',
        title: 'Price (USD)',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'bedrooms',
        title: 'Bedrooms',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'bathrooms',
        title: 'Bathrooms',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'squareFeet',
        title: 'Square Feet',
        type: 'number'
      },
      {
        name: 'availableFrom',
        title: 'Available From',
        type: 'date'
      },
      {
        name: 'address',
        title: 'Address',
        type: 'string'
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: ['available', 'upcoming', 'rented']
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true }
          }
        ],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'highlights',
        title: 'Highlights',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'description',
        title: 'Full Description',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'leaseTerms',
        title: 'Lease Terms',
        type: 'array',
        of: [{ type: 'block' }]
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'locationNote',
        title: 'Location Notes',
        type: 'array',
        of: [{ type: 'block' }]
      }
    ]
  };
  
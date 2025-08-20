export default {
  name: 'faq',
  type: 'document',
  title: 'FAQ',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: [
        {
          type: 'block',
        },
        {
          type: 'list',
          name: 'bulletList',
          title: 'Bulleted List',
          of: [{ type: 'string' }],
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
};
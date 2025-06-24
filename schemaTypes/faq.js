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
        type: 'text',
        title: 'Answer',
        validation: Rule => Rule.required(),
      },
    ]
  };
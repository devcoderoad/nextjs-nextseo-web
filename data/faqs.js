export default {
  title: 'Faq',
  slug: 'faq',
  description: 'Frequently Asked Questions.',
  metaTitle: 'Frequently Asked Questions. Meta Title',
  metaDescription: 'Frequently Asked Questions Meta Description',
  metaImg:
    'https://images.unsplash.com/photo-1501336843423-d808e7a9dc08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80',
  header: '<small class="d-block h2">The IOT Service Agent Company</small>',
  block_top: {
    title:
      '<h1 class="display-1 text-warning">FAQS <small class="d-block h2">The IOT Service Agent Company</small></h1>',
    image:
      'https://images.unsplash.com/photo-1501336843423-d808e7a9dc08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80',
    body:
      '<p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p><a href="#learn" class="btn btn-warning">Learn More</a> <a href="#about" class="btn btn-outline-warning">Getting Started</a>',
  },
  items: [
    {
      id: 1,
      title: 'Do I have to ask frequently question one title?',
      text:
        'This is the explanation why you have to ask frequently question one text?',
      status: 'active',
      answers: [
        {
          answerId: 1,
          answerTitle: 'Question Title One',
          answerText: 'Question Text One',
          status: 'active',
        },
        {
          answerId: 2,
          answerTitle: 'Question Title Two',
          answerText: 'Question Text Two',
          status: 'active',
        },
      ],
    },
    {
      id: 2,
      title: 'Do I have to ask frequently question two title?',
      text:
        'This is the explanation why you have to ask frequently question two text?',
      status: 'active',
      answers: [
        {
          answerId: 2,
          answerTitle: 'Question Title two',
          answerText: 'Question Text two',
          status: 'active',
        },
      ],
    },
    {
      id: 3,
      title: 'Do I have to ask frequently question three title?',
      text:
        'This is the explanation why you have to ask frequently question three text?',
      status: 'active',
      answers: [
        {
          answerId: 3,
          answerTitle: 'Question Title three',
          answerText: 'Question Text three',
          status: 'active',
        },
      ],
    },
  ],
};

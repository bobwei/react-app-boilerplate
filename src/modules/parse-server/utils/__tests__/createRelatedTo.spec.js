import createRelatedTo from '../createRelatedTo';

test('createRelatedTo', () => {
  expect({
    $relatedTo: createRelatedTo('_User', 'objectId', 'posts'),
  }).toEqual({
    $relatedTo: {
      object: {
        __type: 'Pointer',
        className: '_User',
        objectId: 'objectId',
      },
      key: 'posts',
    },
  });
});

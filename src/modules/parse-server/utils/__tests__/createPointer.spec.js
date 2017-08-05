import createPointer from '../createPointer';

test('createPointer', () => {
  expect(createPointer('Post', 'postId')).toEqual({
    __type: 'Pointer',
    className: 'Post',
    objectId: 'postId',
  });
  expect(createPointer('Post')('postId')).toEqual({
    __type: 'Pointer',
    className: 'Post',
    objectId: 'postId',
  });
});

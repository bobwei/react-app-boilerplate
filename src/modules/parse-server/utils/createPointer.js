import R from 'ramda';

const createPointer = (className, objectId) => ({
  __type: 'Pointer',
  className,
  objectId,
});

export default R.curry(createPointer);

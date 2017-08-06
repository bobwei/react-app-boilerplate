const createRelatedTo = (className, objectId, key) => ({
  object: {
    __type: 'Pointer',
    className,
    objectId,
  },
  key,
});

export default createRelatedTo;

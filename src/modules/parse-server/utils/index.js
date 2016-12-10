export const transformQuery = fields => ({ q } = {}) => (!!q && {
  where: JSON.stringify({
    $or: fields.map(field => ({
      [field]: { $regex: q },
    })),
  }),
});

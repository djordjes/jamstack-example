/*
exports.handler = (event, _context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      boop: true,
      foo: "bar",
      event,
      _context,
      callback,
    }),
  });
};
*/

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ todos: [] }),
  };
  /*const result = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  });

  return result.data;
  */
};

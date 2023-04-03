module.exports.handler = async (event) => {

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello to my first serverless app",
        input: event,
      },
      null,
      2
    ),
  };
};

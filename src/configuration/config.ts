export default () => {
  return {
    http: {
      host: process.env.HOST ?? 'localhost',
      port: process.env.PORT ?? 3000,
    },
    api: {
      trello: process.env.TRELLO_API,
    },
    secretKey: {
      key: process.env.SECRET,
    },
  };
};

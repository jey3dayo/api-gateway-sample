import runWarm from './utils/runWarm';
import { successResponse } from './utils/lambdaResponse';

const notifyTest = async event => {
  const message = {
    NODE_ENV: process.env.NODE_ENV,
    query: event.queryStringParameters,
  };

  return successResponse({ message });
};

export default runWarm(notifyTest);

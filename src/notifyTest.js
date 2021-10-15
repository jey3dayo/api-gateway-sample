import runWarm from './utils/runWarm';
import { successResponse } from './utils/lambdaResponse';

const AWS = require('aws-sdk');

const lambda = new AWS.Lambda();

const notifyTest = async event => {
  const query = event?.queryStringParameters ?? null;

  const payload = {
    message: query,
  };

  const params = {
    FunctionName: 'caproni-sample-development-hello',
    InvocationType: 'RequestResponse',
    Payload: JSON.stringify(payload),
  };

  let callLambda = null;
  try {
    // Lambda関数呼び出し
    callLambda = await lambda.invoke(params).promise();

    console.log(callLambda);
  } catch (e) {
    console.log('[ERROR]hello/callLambda', e);
  }

  return successResponse({ query, callLambda });
};

export default runWarm(notifyTest);

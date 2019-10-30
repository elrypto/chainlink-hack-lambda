'use strict';

module.exports.status = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Service up',
  
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.balanceForAddress = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '321',
  
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

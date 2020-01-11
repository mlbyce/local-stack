exports.handler = async (event, context) => {
  // Log the event argument for debugging and for use in local development.
  //console.log(JSON.stringify(event, undefined, 2));
  console.log('HEY: I Got This');

  //return event;

  return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: 'At Least This Works'
    };
};

import * as functions from 'firebase-functions';

export const gitHook = functions.region('asia-northeast1').https.onRequest((request, response) => {
  console.log(request.body.sender.id);
  response.send('success');
});

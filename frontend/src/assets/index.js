// import anylinejs
const { init, errorCodes } = window.anylinejs;

// if copied into node_modules
// import { init, errorCodes } from 'anyline-js';

function delay(n){
  return new Promise(function(resolve){
    setTimeout(resolve,n*1000);
  });
}


// create a view configuration
const viewConfig = {
  outerColor: '000000',
  outerAlpha: 0.5,
  cutouts: [
    {
      cutoutConfig: {
        // style: 'rect',
        maxWidthPercent: '80%',
        alignment: 'top_half',
        ratioFromSize: {
          width: 300,
          height: 250,
        },
        width: 720,
        strokeWidth: 2,
        cornerRadius: 4,
        strokeColor: 'FFFFFFFF',
        feedbackStrokeColor: '0099FF',
      },
      scanFeedback: {
        style: 'contour_point',
        strokeColor: '0099FF',
        fillColor: '300099FF',
        strokeWidth: 2,
        cornerRadius: 4,
        animation: 'none',
      },
    },
  ],
};

async function myAsyncFunction(){
  //Do what you want here
  console.log("Before the delay")
  console.log(document.getElementById('rooti'));
  await delay(5);

  console.log("After the delay")
  console.log(document.getElementById('rooti'));
  //Do what you want here too
  //zergatik horrela? Anyline-k rooti horretan jarri behar ditu bere gauzak. Baino script-a egikaritzean rooti hori ez dago oraindik prest, ta beraz kaskatzen du.
  //bost segundu itxoiten dugu beraz, rooti-a hor dagoela ziurtatzeko. Gero anyline kargatzen dugu beheko deian.
  theMainThing();
}

myAsyncFunction();

function theMainThing() {

// access the container you want to mount anylinejs into
  const rooti = document.getElementById('rooti');

// inititalize anylinejs with optional presets
// presets will override some dimension configuration of your viewConfig and modules in anylinejs config
  const Anyline = init({
    preset: 'id',
    viewConfig,
    license: 'eyJzY29wZSI6WyJBTEwiXSwicGxhdGZvcm0iOlsiaU9TIiwiQW5kcm9pZCIsIldpbmRvd3MiLCJKUyIsIldlYiJdLCJ2YWxpZCI6IjIwMjEtMTEtMjciLCJtYWpvclZlcnNpb24iOjMsIm1heERheXNOb3RSZXBvcnRlZCI6NSwic2hvd1dhdGVybWFyayI6dHJ1ZSwicGluZ1JlcG9ydGluZyI6dHJ1ZSwiZGVidWdSZXBvcnRpbmciOiJvbiIsInRvbGVyYW5jZURheXMiOjUsInNob3dQb3BVcEFmdGVyRXhwaXJ5Ijp0cnVlLCJpb3NJZGVudGlmaWVyIjpbImxva2FsaG9zdCJdLCJhbmRyb2lkSWRlbnRpZmllciI6WyJsb2thbGhvc3QiXSwid2luZG93c0lkZW50aWZpZXIiOlsibG9rYWxob3N0Il0sIndlYklkZW50aWZpZXIiOlsibG9rYWxob3N0Il0sImpzSWRlbnRpZmllciI6WyJsb2thbGhvc3QiXSwiaW1hZ2VSZXBvcnRDYWNoaW5nIjp0cnVlLCJsaWNlbnNlS2V5VmVyc2lvbiI6MiwiYWR2YW5jZWRCYXJjb2RlIjp0cnVlLCJzdXBwb3J0ZWRCYXJjb2RlRm9ybWF0cyI6WyJBTEwiXX0KaWFtZXdQVmVNVUdkTlA4d0NIazNGeERSYW0yV3h1QmU2b2lOWllwMEt3TUsySitIbjZrZEw2OUVMT3BYNzRtK252dDY1Q0pmNE1sMkkxME1PdVVzajJMdTZvQXVrS3hLQ1JJV041eHB2bmhlYnVyL0NMaXBlR2VwWmtpSExwRVNpRzVRK2RDYXA0Rk1NdXhwNWJSbm4yb0JsNzV1MVJ0bG9ZY2llZml0eXVDbVpxWmEzN1BvWlVXZ29maDF3cCtQVGtHaDhnQzZ2Ti9WOGVyaHliZy9qRHUxcWNKeTdKV2RIYmdOaXVoTmtJWUxGWTM2TkQzdUVmY1crYnJKRU4xV0pDQ3dPM2FUSWJYcERUUlRaaGJSQWRNYnUwYmRlUHhncW1FeU1WZXpkVDdIQVBrc25lcWNJUDNsYml0U0E2cEVYZm9vOXFYUHZ4L01kYXZtYm85RE53PT0=',
    element: rooti
  });

  Anyline.startScanning();

  Anyline.onResult = function(result) {
    console.log('Anyline has result: ', result);
    console.log('x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x');
    console.log(result.result[14]);
    Anyline.stopScanning();
  };
}



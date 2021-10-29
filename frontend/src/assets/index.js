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
    license: 'ewogICJsaWNlbnNlS2V5VmVyc2lvbiI6IDIsCiAgImRlYnVnUmVwb3J0aW5nIjogIm9uIiwKICAiaW1hZ2VSZXBvcnRDYWNoaW5nIjogZmFsc2UsCiAgIm1ham9yVmVyc2lvbiI6ICI0IiwKICAibWF4RGF5c05vdFJlcG9ydGVkIjogNSwKICAiYWR2YW5jZWRCYXJjb2RlIjogZmFsc2UsCiAgInBpbmdSZXBvcnRpbmciOiB0cnVlLAogICJwbGF0Zm9ybSI6IFsKICAgICJKUyIKICBdLAogICJzY29wZSI6IFsKICAgICJBTEwiCiAgXSwKICAic2hvd1BvcFVwQWZ0ZXJFeHBpcnkiOiB0cnVlLAogICJzaG93V2F0ZXJtYXJrIjogdHJ1ZSwKICAidG9sZXJhbmNlRGF5cyI6IDUsCiAgInZhbGlkIjogIjIwMjEtMTAtMzEiLAogICJqc0lkZW50aWZpZXIiOiBbCiAgICAicGxhdGUtc2hhcmUuaXRlYy1pbm5vdmF0aW9uLmV1IgogIF0KfQp3VVUvR3loSXJSUDhiZDJMMnZTSFRyVndRU2kwRTVFdHYvQUN3emV5Q2RrSkdCYmZBZUlBOWkyb3BOM0xrY3NUdTZPNHBmYnFxWEYzMWVSNWpOUUt3OVRXcE9VVzI3SUVoQTVHYWxudWZxeWJ4THJZbXFNSTRBVzZ3eFQzZ1VGZXZFZHJEcVpQZHVCcXJPcWNHWDNrVkk0RFI2d1NlVHpleUgrWW9KMlhKMkJ0b1Z5UFY0RS9TUC9LSHNNOW1hcnlFQ2J6c25QcjRNMkxYS0RLdVprZXlEYjUxOWxha0RyOVpxRlNranFvOUpTa1FpUjE0N0libUtmckE4T3JFWElQQm1IOVg2blF0WEVITUIvbGRROWR3NGNCRHNvbmFtN0FMSjF0ajdjSnRTamJGUlQyTWdJTGFNblJjekxtSjN1cHZHbWpwcUdEYkMzekFZK3BhVVAzcEE9PQ==',
    element: rooti
  });

  Anyline.startScanning();

  Anyline.onResult = function(result) {
    console.log('Anyline has result: ', result);
    console.log('x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x');
    console.log(result.result[13]);
    Anyline.stopScanning();
  };
}



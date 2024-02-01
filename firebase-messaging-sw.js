importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDXjSXwRoVg2ys249qJEVMfQ8UGR6QQw9Y",
  authDomain: "kwickbite-partner.firebaseapp.com",
  projectId: "kwickbite-partner",
  storageBucket: "kwickbite-partner.appspot.com",
  messagingSenderId: "442988095970",
  appId: "1:442988095970:web:a207698969b4d4236d71bb",
  measurementId: "G-17KJWCPSE4",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    const promiseChain = self.clients
                .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
                .then((windowClients) => {
                    for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
                }
                })
        .then(() => {

        });

//    const notificationTitle = payload.notification.title;
////    self.localStorage.setItem('testObject', JSON.stringify(payload));
// console.log('endpoint:', payload);
//            self.registration.active.postMessage(JSON.stringify(payload));
//            console.log("Posted message");
//window.dartFunc(notificationTitle);

//    const notificationOptions = {
//      body: payload.notification.body,
//    };
//
//    self.registration.showNotification(notificationTitle,
//      notificationOptions);
  });

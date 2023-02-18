import React from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAR9irwj8azEaagtu_Kt7wMYUFCxI_dQ0o",
    authDomain: "next-test-10d5f.firebaseapp.com",
    projectId: "next-test-10d5f",
    storageBucket: "next-test-10d5f.appspot.com",
    messagingSenderId: "158837338386",
    appId: "1:158837338386:web:7976184898b8996ed503cb",
    measurementId: "G-HSLM3CKLS9",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return <div>firebaseConfig</div>;
};

export default firebaseConfig;

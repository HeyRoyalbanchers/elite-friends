import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyDIA1VKqVLy9k3DeLJ22tBrPqCOelmWez0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "elitefriendss-43e85.firebaseapp.com",
  databaseURL:
    import.meta.env.VITE_FIREBASE_DATABASE_URL ??
    "https://elitefriendss-43e85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "elitefriendss-43e85",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "elitefriendss-43e85.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "450064022815",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:450064022815:web:36bdfa70d0136da1de442a",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? "G-3SVMCLB4N5",
};

export const firebaseApp = initializeApp(firebaseConfig);

export async function getFirebaseAnalytics() {
  const { getAnalytics, isSupported } = await import("firebase/analytics");
  const supported = await isSupported();
  return supported && firebaseConfig.measurementId ? getAnalytics(firebaseApp) : null;
}

export async function getFirebaseAuth() {
  const { getAuth } = await import("firebase/auth");
  return getAuth(firebaseApp);
}

export async function getFirebaseDatabase() {
  const { getDatabase } = await import("firebase/database");
  return getDatabase(firebaseApp);
}

export async function getFirebaseFirestore() {
  const { getFirestore } = await import("firebase/firestore");
  return getFirestore(firebaseApp);
}

export async function getFirebaseStorage() {
  const { getStorage } = await import("firebase/storage");
  return getStorage(firebaseApp);
}

export const analyticsPromise = getFirebaseAnalytics();

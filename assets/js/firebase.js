import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, getDownloadURL, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyDzMqnUERMQpAWmNLdfKk73RD-LcF4U-0k",
  authDomain: "omandits-2695b.firebaseapp.com",
  projectId: "omandits-2695b",
  storageBucket: "omandits-2695b.appspot.com",
  messagingSenderId: "546512999074",
  appId: "1:546512999074:web:56b145c952ce912c447dfb",
  measurementId: "G-LXNCB535LF"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);



export function getImageUrl(imageUrl) {
  const imageRef = ref(storage, imageUrl); 
  getDownloadURL(imageRef)
    .then((url) => {
      console.log(url);
    })
    .catch((error) => {
      console.error('Error getting download URL:', error);
    });

}

export async function saveImage() {
  const image = document.getElementById('image');
  const selectedImage = image.files[0];

  if (!image || !selectedImage) {
    alert('Please Upload your profile image');
    return
  }

  const storage = getStorage();
  const storageRef = ref(storage, `/images/${selectedImage.name}`);

  try {
    const snapshot = await uploadBytes(storageRef, selectedImage);
    const downloadURL = await getDownloadURL(snapshot.ref);

    const passUrl = await savePassproImage();

    return [downloadURL,passUrl];
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

async function savePassproImage() {
  const passport = document.getElementById('passport');
  const selectedPassport = passport.files[0];

  if(!selectedPassport || !passport){
    alert('Please Upload your passport');
    return
  }

  const storage = getStorage();
  const storageRef = ref(storage, `/passport/${selectedPassport.name}`);

  try {
    const snapshot = await uploadBytes(storageRef, selectedPassport);
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}


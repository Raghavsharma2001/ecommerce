import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div>
      <h1> Sign IN Page</h1>
      <button onClick={logGoogleUser}> Sign In With Google popup</button>

      <SignUpForm />
    </div>
  );
};
export default SignIn;

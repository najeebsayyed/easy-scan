import auth from '@react-native-firebase/auth';

export const signup = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email.trim(), password);
};

export const login = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email.trim(), password);
};

export const logout = async () => {
  return auth().signOut();
};

export const resetPassword = async (email: string) => {
  return auth().sendPasswordResetEmail(email);
};

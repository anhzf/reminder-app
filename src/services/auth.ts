import firebase from 'src/firebase';

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

export interface User {
  uid: string;
  displayName: string;
  email?: string;
  emailVerified: boolean;
  photoURL?: string;
  phoneNumber?: string;
}

function parseUserObject(user: firebase.User): User {
  return {
    uid: user.uid,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    displayName: user.displayName!,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    email: user.email!,
    emailVerified: user.emailVerified,
    ...(user.photoURL ? { photoURL: user.photoURL } : {}),
    ...(user.phoneNumber ? { phoneNumber: user.phoneNumber } : {}),
  };
}

export default {
  async login() {
    await firebase.auth().signInWithRedirect(GoogleProvider);
  },

  async getRedirectResult(): Promise<User | null> {
    const { user } = await firebase.auth().getRedirectResult();

    if (user) return parseUserObject(user);

    return null;
  },

  getCurrentUser(): User | null {
    const user = firebase.auth().currentUser;

    if (user) return parseUserObject(user);

    return null;
  },

  async logout() {
    await firebase.auth().signOut();
  },
};

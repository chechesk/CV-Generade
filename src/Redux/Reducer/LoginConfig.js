import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {  auth }  from '../../Config/db';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ email, password, name, lastname }, { rejectWithValue }) => {
    try {
      // Aquí solo necesitas email y password, así que elimina name y lastname
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, name, lastname );
      
      // Si deseas almacenar el nombre y apellido, podrías hacerlo en Firestore después de crear el usuario
      const user = userCredential.user;
      
      // Opcional: Aquí puedes almacenar los datos adicionales en Firestore
      // await setDoc(doc(db, "users", user.uid), { name, lastname });

      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, { rejectWithValue }) => {
      try {
          const auth = getAuth();
          await sendPasswordResetEmail(auth, email);
          return 'Password reset email sent successfully';
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);
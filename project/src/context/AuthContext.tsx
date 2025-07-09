import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';


interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

interface AuthContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isLoggedIn: false
  });

  const login = async (email: string, password: string) => {
    const mockUser: User = {
      id: '1',
      name: 'Subhojeet Ganguli',
      email,
      phone: '+91 9305205959'
    };

    setAuth({
      user: mockUser,
      isLoggedIn: true
    });
  };

  const signup = async (name: string, email: string, password: string) => {
    const mockUser: User = {
      id: '2',
      name,
      email
      // phone is optional
    };

    setAuth({
      user: mockUser,
      isLoggedIn: true
    });
  };

  const logout = () => {
    setAuth({
      user: null,
      isLoggedIn: false
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

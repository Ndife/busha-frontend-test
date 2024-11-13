import React, { createContext, useContext, useReducer } from 'react';
import { IAccounts } from '../apis/handlers/accounts/interfaces';

// Define the WalletState interface with IAccounts type for wallets
interface WalletState {
  wallets: IAccounts[];
  loading: boolean;
  error: boolean;
}

// Define action types with IAccounts as the payload for wallet actions
type WalletAction = 
  | { type: 'ADD_WALLET'; payload: IAccounts }
  | { type: 'SET_WALLETS'; payload: IAccounts[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: boolean };

const initialState: WalletState = {
  wallets: [],
  loading: false,
  error: false,
};

const walletReducer = (state: WalletState, action: WalletAction): WalletState => {
  switch (action.type) {
    case 'ADD_WALLET':
      return { ...state, wallets: [...state.wallets, action.payload] };
    case 'SET_WALLETS':
      return { ...state, wallets: action.payload, error: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

// Create the WalletContext
const WalletContext = createContext<{
  state: WalletState;
  dispatch: React.Dispatch<WalletAction>;
}>({ state: initialState, dispatch: () => null });

// WalletProvider component
export const WalletProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom hook to use WalletContext
export const useWalletContext = () => useContext(WalletContext);

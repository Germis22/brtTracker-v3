import {createContext, useContext, useEffect, useState} from 'react';
import {ref, onValue} from 'firebase/database';
import {fireabase} from 'firebase';
import {auth, db} from '../FirebaseConfig';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw Error('Ther is no auth provider');
  return context;
};

export function AuthProvider({children}) {
  const [datos, setDatos] = useState([]);
  const [datosFire, setDatosFire] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoading = () => {
      if (datos) {
        setLoading(false);
      }
    };
    return () => isLoading();
  }, [datos]);

  useEffect(() => {
    const getDatos = () => {
      const starCountRef = ref(db, 'Datos');
      onValue(starCountRef, snapshot => {
        const data = snapshot.val();
        setDatos(data);
      });
    };
    getDatos();
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <authContext.Provider value={{datos, loading}}>
      {children}
    </authContext.Provider>
  );
}

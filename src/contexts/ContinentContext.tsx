import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from '../services/api';

interface Continent {
  id: number;
  uid: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  countries: number;
  languages: number;
  mostVisitedCities: number;
  cities: Array<{
    name: string;
    country: string;
    image: string;
  }>
}

interface ContinentContextProps {
  continents: Continent[];
}

interface ContinentContextProviderProps {
  children: ReactNode;
}

export const ContinentContext = createContext({} as ContinentContextProps);

export function ContinentContextProvider({ children }: ContinentContextProviderProps) {
  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get('/continents').then(data => setContinents(data.data as any))
  }, []);

  return (
    <ContinentContext.Provider value={{ continents }}>
      {children}
    </ContinentContext.Provider>
  )
}

export function useContinent() {
  const context = useContext(ContinentContext);

  return context;
}
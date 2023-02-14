import { createContext,useState } from 'react';

const ConfigContext = createContext();
export default ConfigContext;

export function ConfigProvider({ children }) {
  const [configData, setConfigData] = useState({dificultyLevel: '1'})
  
  return (
    <ConfigContext.Provider value={{ configData, setConfigData }}>
      {children}
    </ConfigContext.Provider>
  );
}
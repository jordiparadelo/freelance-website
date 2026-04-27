import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import type { Capability } from "@/lib/types/index";

interface CapabilitiesContextProps {
  activeCapability: number | null;
  setActiveCapability: Dispatch<SetStateAction<number | null>>;
  previousCapability: number | null;
  changeCapability: (activeIndex: number | null) => void;
  capabilities: React.RefObject<Capability[]>;
}

const CapabilitiesContext = createContext<CapabilitiesContextProps | undefined>(
  undefined,
);

export const CapabilitiesProvider = ({
  children,
  data,
}: {
  children: ReactNode;
  data: Capability[];
}) => {
  const [activeCapability, setActiveCapability] = useState<number | null>(null);
  const [previousCapability, setPreviousCapability] = useState<number | null>(
    null,
  );
  const capabilities = useRef(data);

  const changeCapability = useCallback(
    (activeIndex: number | null) => {
      setPreviousCapability(activeCapability);
      setActiveCapability(activeIndex);
    },
    [activeCapability],
  );

  return (
    <CapabilitiesContext.Provider
      value={{
        activeCapability,
        setActiveCapability,
        previousCapability,
        changeCapability,
        capabilities,
      }}
    >
      {children}
    </CapabilitiesContext.Provider>
  );
};

export const useCapabilities = () => {
  const context = useContext(CapabilitiesContext);
  if (!context) {
    throw new Error(
      "useCapabilities must be used within a CapabilitiesProvider",
    );
  }
  return context;
};

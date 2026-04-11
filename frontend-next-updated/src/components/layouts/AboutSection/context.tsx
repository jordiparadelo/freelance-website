import {
	createContext,
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	useCallback,
	useContext,
	useState,
} from "react";

interface CapabilitiesContextProps {
	activeCapability: number | null;
	setActiveCapability: Dispatch<SetStateAction<number | null>>;
	previousCapability: number | null;
	changeCapability: (activeIndex: number | null) => void;
}

const CapabilitiesContext = createContext<CapabilitiesContextProps | undefined>(
	undefined,
);

export const CapabilitiesProvider = ({ children }: { children: ReactNode }) => {
	const [activeCapability, setActiveCapability] = useState<number | null>(null);
	const [previousCapability, setPreviousCapability] = useState<number | null>(
		null,
	);

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

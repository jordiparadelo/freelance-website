"use client";

import usePageScroll from "@/hooks/usePageScroll";
import useSectionList from '@/hooks/useSectionList';

import React, { useReducer, useEffect } from "react";

import { usePathname } from "next/navigation";

import "./styles.scss";

interface State {
	isDropdownOpen: boolean;
	activeIndex: string;
}

export interface Section {
	id: string;
	label: string;
}

// Action types
enum ActionType {
	TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN',
	RESET_DROPDOWN = 'RESET_DROPDOWN',
	SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX'
}

interface Action {
	type: ActionType;
	payload?: string;
}

// Initialize
const initialState: State = {
	isDropdownOpen: false,
	activeIndex: "Index",
}

// Reducer function
const reducer = (state: State, action: Action): State => {
	const actionHandlers = {
		[ActionType.TOGGLE_DROPDOWN]: () => ({ ...state, isDropdownOpen: !state.isDropdownOpen }),
		[ActionType.RESET_DROPDOWN]: () => ({ ...state, isDropdownOpen: false, activeIndex: "Index" }),
		[ActionType.SET_ACTIVE_INDEX]: () => ({ ...state, activeIndex: action.payload || "Index" }),
		default: () => state
	};

	const actionHandler = actionHandlers[action.type] || actionHandlers.default;
	return actionHandler();
};

const NavIndex: React.FC = () => {
	// Initialize state using reducer
	const [state, dispatch] = useReducer(reducer, initialState);

	const pathname = usePathname();
	const { scrollToElement } = usePageScroll();
	const sectionList = useSectionList();

	useEffect(() => {
		dispatch({ type: ActionType.RESET_DROPDOWN });
	}, [pathname]);

	const toggleDropdown = () => dispatch({ type: ActionType.TOGGLE_DROPDOWN });

	const handleClick = (section: Section) => {
		scrollToElement(`#${section.id}`);
		dispatch({ type: ActionType.SET_ACTIVE_INDEX, payload: section.label });
		dispatch({ type: ActionType.TOGGLE_DROPDOWN });
	};

	return (
		<div className='nav-index'>
			<button
				className='button nav-index__button'
				aria-haspopup='true'
				aria-expanded={state.isDropdownOpen}
				onClick={toggleDropdown}
			>
				{state.activeIndex}
			</button>
			<div className={`nav-index__dropdown ${state.isDropdownOpen ? "open" : ""}`}>
				<div
					className='navmenu__sections'
					role='menu'
					aria-label='Sections'
				>
					<ul>
						{sectionList?.map(({ id, label }, index) => (
							<li key={`${id}-${index}`} role='none'>
								<button
									role='menuitem'
									onClick={() => handleClick({ id, label })}
								>
									{label}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavIndex;

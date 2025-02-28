"use client";

import React, { useReducer, useEffect } from "react";
import { usePathname } from "next/navigation";
// Components
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
import useSectionList from '@/hooks/useSectionList';
// Styles
import "./styles.scss";

interface NavState {
	isDropdownOpen: boolean;
	activeIndex: string;
}

// Action types
const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN' as const;
const RESET_DROPDOWN = 'RESET_DROPDOWN' as const;
const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX' as const;

type NavAction = 
	| { type: typeof TOGGLE_DROPDOWN }
	| { type: typeof RESET_DROPDOWN }
	| { type: typeof SET_ACTIVE_INDEX; payload: string };

// Initialize
const initialState: NavState = {
	isDropdownOpen: false,
	activeIndex: "Index",
}

// Reducer function
const reducer = (state: NavState, action: NavAction): NavState => {
	switch (action.type) {
		case TOGGLE_DROPDOWN:
			return { ...state, isDropdownOpen: !state.isDropdownOpen };
		case RESET_DROPDOWN:
			return { ...state, isDropdownOpen: false, activeIndex: "Index" };
		case SET_ACTIVE_INDEX:
			return { ...state, activeIndex: action.payload };
		default:
			return state;
	}
};

interface Section {
	id: string;
	label: string;
}

const NavIndex = () => {
	// Initialize state using reducer
	const [state, dispatch] = useReducer(reducer, initialState);

	const pathname = usePathname();
	const { scrollToElement } = usePageScroll();
	const sectionList = useSectionList();

	useEffect(() => {
		dispatch({ type: RESET_DROPDOWN });
	}, [pathname]);

	const toggleDropdown = () => dispatch({ type: TOGGLE_DROPDOWN });

	const handleClick = (section: Section) => {
		scrollToElement(`#${section.id}`);
		dispatch({ type: SET_ACTIVE_INDEX, payload: section.label });
		dispatch({ type: TOGGLE_DROPDOWN });
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

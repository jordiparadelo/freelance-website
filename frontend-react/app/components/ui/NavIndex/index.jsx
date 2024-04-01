"use client";

import React, { useReducer, useEffect } from "react";
import { usePathname } from "next/navigation";
// Components
import { Button } from "@/ui";
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
import useSectionList from '@/hooks/useSectionList';
// Styles
import "./styles.scss";

// Initialize
const initialState = {
	isDropdownOpen: false,
	activeIndex: "Index",
}

// Action types
const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const RESET_DROPDOWN = 'RESET_DROPDOWN';
const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';

// Reducer function
const reducer = (state, action) => {
    const actionHandlers = {
		[TOGGLE_DROPDOWN]: () => ({ ...state, isDropdownOpen: !state.isDropdownOpen }),
        [RESET_DROPDOWN]: () => ({ ...state, isDropdownOpen: false, activeIndex: "Index" }),
        [SET_ACTIVE_INDEX]: () => ({ ...state, activeIndex: action.payload }),
        default: () => state
    };

	const actionHandler = actionHandlers[action.type] || actionHandlers.default;

    return actionHandler();
};

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

    const handleClick = (section) => {
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

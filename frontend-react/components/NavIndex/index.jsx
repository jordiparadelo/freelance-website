"use client";

import React, { useReducer, useEffect } from "react";
import { usePathname } from "next/navigation";
// Components
import { Button } from "@/components";
// Hooks
import usePageScroll from "@/hooks/usePageScroll";
import useSectionList from '@/hooks/useSectionList';
// Styles
import "./styles.scss";

// Initialize
const initialState = {
	isDropdownOpen: false,
	activeIndex: "Index",
	dropdownList: [],
}

// Action types
const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const RESET_DROPDOWN = 'RESET_DROPDOWN';
const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
const SET_DROPDOWN = 'SET_DROPDOWN';

// Reducer function
const reducer = (state, action) => {
    const actionHandlers = {
        [SET_DROPDOWN]: () => ({ ...state, dropdownList: action.payload }),
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
		
        dispatch({ type: SET_DROPDOWN, payload: sectionList });
        // dispatch({ type: RESET_DROPDOWN });
		console.log({sectionList})
		
		return() => dispatch({ type: RESET_DROPDOWN });
    }, [pathname]);

    const toggleDropdown = () => dispatch({ type: TOGGLE_DROPDOWN });

    const handleClick = (section) => {
        scrollToElement(`#${section.id}`);
        dispatch({ type: SET_ACTIVE_INDEX, payload: section.label });
        dispatch({ type: TOGGLE_DROPDOWN });
    };

    return (
        <div className='nav-index'>
            <Button
                className='nav-index__button'
                aria-haspopup='true'
                aria-expanded={state.isDropdownOpen}
                onClick={toggleDropdown}
            >
                {state.activeIndex}
            </Button>
            <div className={`nav-index__dropdown ${state.isDropdownOpen ? "open" : ""}`}>
                <div
                    className='navmenu__sections'
                    role='menu'
                    aria-label='Sections'
                >
                    <ul>
                        {state.sectionList?.map(({ id, label }, index) => (
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
};


// const NavIndex = () => {
// 	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// 	const [activeIndex, setActiveIndex] = useState("Index");
// 	const [pageSections, setPageSections] = useState([]);

// 	const pathname = usePathname();

// 	// const pageSections = useRef([]);
// 	const { scrollToElement } = usePageScroll();

// 	function toggleDropdown() {
// 		setIsDropdownOpen(!isDropdownOpen);
// 	}

// 	function handleClick(section) {
// 		scrollToElement(`#${section.id}`);
// 		toggleDropdown(false);
// 		setActiveIndex(section.label);
// 	}

// 	useEffect(() => {
// 		const sectionsWithId = Array.from(document.querySelectorAll("section"))
// 			.filter((section) => section.id)
// 			.map((section) => ({ label: formatString(section.id), id: section.id }));

// 		setPageSections(sectionsWithId);

// 		return (() =>{
// 			setActiveIndex("Index")
// 			setIsDropdownOpen(false)
// 		})

// 	}, [pathname]);

// 	return (
// 		<div className='nav-index'>
// 			<Button
// 				className='nav-index__button'
// 				aria-haspopup='true'
// 				aria-expanded={isDropdownOpen ? "true" : "false"}
// 				onClick={toggleDropdown}
// 			>
// 				{activeIndex && activeIndex}
// 			</Button>
// 			<div className={`nav-index__dropdown ${isDropdownOpen ? "open" : ""}`}>
// 				<div
// 					className='navmenu__sections'
// 					role='menu'
// 					aria-label='Sections'
// 				>
// 					{pageSections && (
// 						<ul>
// 							{pageSections.map((section, index) => (
// 								<li
// 									key={section.id + "-" + index}
// 									role='none'
// 								>
// 									<button
// 										role='menuitem'
// 										onClick={() => handleClick(section)}
// 									>
// 										{section.label}
// 									</button>
// 								</li>
// 							))}
// 						</ul>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default NavIndex;

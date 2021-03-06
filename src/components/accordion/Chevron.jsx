import React from "react";

export const Chevron = ({className}) => {
    return (
        <svg  className={className} width="12px" height="12px" viewBox="0 0 7 12"
             xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
                <g transform="translate(-205.000000, -78.000000)" fillRule="nonzero">
                    <g transform="translate(200.000000, 76.000000)">
                        <rect opacity="0" x="0" y="0" width="16" height="16"></rect>
                        <path fill="#fff"
                              d="M5.29289322,3.70710678 C4.90236893,3.31658249 4.90236893,2.68341751 5.29289322,2.29289322 C5.68341751,1.90236893 6.31658249,1.90236893 6.70710678,2.29289322 L11.7071068,7.29289322 C12.0976311,7.68341751 12.0976311,8.31658249 11.7071068,8.70710678 L6.70710678,13.7071068 C6.31658249,14.0976311 5.68341751,14.0976311 5.29289322,13.7071068 C4.90236893,13.3165825 4.90236893,12.6834175 5.29289322,12.2928932 L9.58578644,8 L5.29289322,3.70710678 Z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
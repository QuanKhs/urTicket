import React from 'react'

export default function Dislike(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 24 24"
            style={{
                fill: `${fillColor}`,
            }}
        >
            <path d="M20 3h-1v13h1c1.104 0 2-.896 2-2V5C22 3.896 21.104 3 20 3zM4 16h7l-1.122 3.368C9.446 20.663 10.41 22 11.775 22H12l5-5.438V3H6l-3.937 8.649C2.042 11.748 2.021 11.843 2 11.942V14C2 15.104 2.896 16 4 16z" />
        </svg>
    )
}

import React from 'react'

export default function Like(props) {
    const { width, height, fillColor } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width} height={height} viewBox="0 0 24 24"
            style={{
                fill: `${fillColor}`,
            }}
        >
            <path d="M4 21h1V8H4c-1.104 0-2 .896-2 2v9C2 20.104 2.896 21 4 21zM20 8h-7l1.122-3.368C14.554 3.337 13.59 2 12.225 2H12L7 7.438V21h11l3.912-8.596C21.937 12.291 21.976 12.114 22 12v-2C22 8.896 21.104 8 20 8z" />
        </svg>
    )
}

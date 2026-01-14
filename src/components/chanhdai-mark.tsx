export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 512 256"
    //   {...props}
    // >
    //   <path
    //     fill="currentColor"
    //     d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
    //   />
    // </svg>
    <svg viewBox="0 0 512 128">
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontSize="120"
        fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
      >
        S54A
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
  return `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill="${color}" /><text x='50' y='50' font-size='50' fill='#ffffff' text-anchor='middle' dy='.3em' font-family='Poppins, sans-serif' font-weight='bold'>SG</text></svg>`;
}

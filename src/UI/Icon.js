import React from 'react';
import styled from 'styled-components';

const icons = {
  share: (
    <path d="M8.28 4.5c-.16.12-.35.18-.56.18-.26 0-.52-.1-.7-.3-.13-.16-.2-.38-.17-.6.02-.2.14-.4.32-.52l4.28-3.1.08-.03.07-.03.07-.04c.1-.04.22-.06.33-.06.06 0 .12 0 .18.02.05 0 .1.02.15.04l.06.03h.04c.03 0 .06.02.08.04l4.28 3.1c.2.12.3.3.33.52.03.2-.04.4-.2.58-.15.2-.4.3-.68.3-.2 0-.4-.06-.55-.18L13.5 2.9l-.63-.47v13.8c0 .43-.4.8-.88.8-.5 0-.9-.37-.9-.8V2.43l-.66.48-2.2 1.6zm11.42 4h3.42c.48 0 .88.35.88.8v13.9c0 .22-.1.4-.25.56-.16.15-.4.24-.63.24H.88C.4 24 0 23.64 0 23.2V9.3c0-.45.4-.8.88-.8h4.28c.48 0 .88.35.88.8 0 .44-.4.8-.88.8h-3.4v12.3h20.47V10.1H19.7c-.5 0-.9-.36-.9-.8.02-.45.4-.8.9-.8z" />
  ),

  heartOutline: (
    <path d="M17.43 3.6c.35 0 .64-.3.64-.66 0-.36-.3-.65-.64-.65v1.3zm-.6-.62l-.1-.65.1.65zm-2.33.77l.32.57-.32-.57zm-2.5 2l-.47.46c.13.2.3.2.47.2.18 0 .34 0 .46-.2L12 5.8zm-2.5-2l.3-.56-.3.5zm-2.32-.77l.08-.65-.08.65zm-.6-.04V2.3v.64zm5.04 18l.36-.53-.36.6zm.76 0l-.36-.54.36.54zM17.43 2.3c-.36 0-.65.28-.65.64s.3.65.65.65V2.3zm0 0c-.22 0-.46 0-.7.03l.16 1.3c.1-.03.3-.04.5-.04V2.3zm-.7.03c-.83.1-1.73.4-2.54.86l.6 1.1c.7-.4 1.3-.6 2-.7l-.2-1.3zm-2.54.86c-.9.4-1.8 1.1-2.7 2.1l.9.9c.8-.9 1.5-1.5 2.3-1.9l-.6-1.1zm-1.8 2.1c-.9-1-1.8-1.7-2.7-2.1l-.6 1.1c.8.4 1.5 1 2.3 1.9l.95-.9zM9.8 3.2c-.8-.47-1.7-.77-2.54-.87l-.15 1.3c.8.07 1.4.3 2.1.7l.6-1.13zm-2.55-.87c-.2-.02-.46-.04-.68-.04v1.3h.54l.2-1.3zm-.68-.04c-.77 0-2.14.3-3.34 1.2C2 4.5 1 6.1 1 8.6h1.3c0-2.14.82-3.4 1.73-4.1.95-.76 2.03-.98 2.54-.98V2.3zM1 8.6c0 2.98 2.27 5.94 4.55 8.2 2.33 2.3 4.88 4.06 5.7 4.6l.73-1.06c-.83-.55-3.27-2.24-5.52-4.46-2.28-2.2-4.16-4.83-4.16-7.23H1zm10.26 12.8c.45.3 1.03.3 1.48 0l-.72-1.06h-.04l-.72 1.07zm1.48 0c.83-.54 3.38-2.3 5.7-4.6 2.3-2.26 4.56-5.22 4.56-8.2h-1.3c0 2.4-1.88 5.02-4.16 7.28-2.25 2.23-4.7 3.9-5.52 4.47l.72 1.07zM23 8.68c0-2.53-1-4.15-2.23-5.13-1.2-.94-2.57-1.25-3.34-1.25v1.3c.5 0 1.6.2 2.54.96.9.72 1.74 1.97 1.74 4.1H23z" />
  ),

  outlinedHeart: (
    <g>
      <path d="M17.746,2.477c-0.213,0 -0.43,0.012 -0.646,0.037c-0.819,0.094 -1.645,0.368 -2.45,0.816c-0.884,0.49 -1.732,1.165 -2.65,2.11c-0.92,-0.946 -1.767,-1.62 -2.65,-2.111c-0.805,-0.447 -1.631,-0.721 -2.451,-0.815c-0.214,-0.025 -0.429,-0.037 -0.645,-0.037c-1.353,0 -5.215,1.106 -5.215,6.022c0,5.651 8.796,11.74 10.561,12.903c0.242,0.161 0.558,0.161 0.8,0c1.764,-1.163 10.561,-7.252 10.561,-12.903c0,-4.917 -3.863,-6.022 -5.215,-6.022Z" />
      <path
        d="M17.746,3.016c0.297,0 0.539,-0.241 0.539,-0.539c0,-0.298 -0.242,-0.539 -0.539,-0.539l0,1.078Zm-0.646,-0.502l-0.06,-0.536l-0.001,0l0.061,0.536Zm-2.45,0.816l0.262,0.471l0.001,0l-0.263,-0.471Zm-2.65,2.11l-0.387,0.376c0.102,0.105 0.241,0.163 0.387,0.163c0.145,0 0.285,-0.059 0.386,-0.163l-0.386,-0.376Zm-2.65,-2.111l0.261,-0.471l0,0l-0.261,0.471Zm-2.451,-0.815l0.061,-0.536l-0.001,0l-0.06,0.536Zm-0.645,-0.037l0.001,-0.539l-0.001,0l0,0.539Zm5.346,18.925l0.299,-0.449l-0.002,-0.001l-0.297,0.45Zm0.8,0l-0.297,-0.45l-0.002,0.001l0.299,0.449Zm5.346,-19.464c-0.298,0 -0.54,0.241 -0.54,0.539c0,0.298 0.242,0.539 0.54,0.539l0,-1.078Zm0,0c-0.228,0 -0.475,0.014 -0.706,0.04l0.121,1.071c0.201,-0.023 0.387,-0.033 0.585,-0.033l0,-1.078Zm-0.707,0.04c-0.875,0.103 -1.801,0.411 -2.651,0.881l0.525,0.942c0.76,-0.425 1.484,-0.667 2.249,-0.752l-0.123,-1.071Zm-2.65,0.881c-0.922,0.513 -1.833,1.237 -2.776,2.206l0.773,0.751c0.894,-0.921 1.68,-1.548 2.526,-2.015l-0.523,-0.942Zm-2.003,2.205c-0.945,-0.969 -1.853,-1.692 -2.775,-2.206l-0.523,0.943c0.845,0.467 1.63,1.093 2.525,2.015l0.773,-0.752Zm-2.775,-2.206c-0.85,-0.469 -1.775,-0.777 -2.651,-0.88l-0.123,1.071c0.766,0.085 1.491,0.327 2.251,0.752l0.523,-0.943Zm-2.652,-0.88c-0.228,-0.026 -0.474,-0.04 -0.704,-0.04l-0.001,1.078c0.2,0 0.385,0.01 0.584,0.033l0.121,-1.071Zm-0.705,-0.04c-0.784,0 -2.208,0.309 -3.448,1.282c-1.267,0.995 -2.306,2.658 -2.306,5.279l1.078,0c0,-2.295 0.892,-3.643 1.894,-4.431c1.03,-0.808 2.213,-1.052 2.782,-1.052l0,-1.078Zm-5.754,6.561c0,3.068 2.359,6.143 4.78,8.519c2.455,2.406 5.137,4.25 6.023,4.834l0.594,-0.9c-0.878,-0.579 -3.477,-2.361 -5.862,-4.703c-2.417,-2.373 -4.457,-5.167 -4.457,-7.75l-1.078,0Zm10.801,13.352c0.423,0.282 0.975,0.282 1.398,0l-0.598,-0.898c-0.061,0.041 -0.141,0.041 -0.202,0l-0.598,0.898Zm1.396,0.001c0.886,-0.584 3.568,-2.428 6.022,-4.834c2.422,-2.376 4.781,-5.451 4.781,-8.519l-1.078,0c0,2.583 -2.04,5.377 -4.458,7.75c-2.385,2.342 -4.983,4.124 -5.861,4.703l0.594,0.9Zm10.803,-13.353c0,-2.621 -1.04,-4.284 -2.307,-5.279c-1.239,-0.973 -2.664,-1.282 -3.447,-1.282l0,1.078c0.568,0 1.752,0.244 2.782,1.052c1.002,0.787 1.894,2.135 1.894,4.431l1.078,0Z"
        fill="currentColor"
      />
    </g>
  ),

  star: (
    <path d="M22.9 9.4c.22.6.06 1.1-.45 1.47l-5.22 3.78 2 6.15c.26.86-.4 1.65-1.24 1.65-.3 0-.55-.1-.78-.26L12 18.4l-5.22 3.8c-.58.37-1.37.25-1.8-.27-.28-.35-.35-.73-.2-1.12l2-6.1-5.25-3.82C1.03 10.5.88 10 1.1 9.4c.17-.53.66-.88 1.2-.88h6.46l2-6.12c.18-.5.66-.85 1.2-.85.6 0 1.1.37 1.26.9l2 6.07h6.5c.52 0 1 .35 1.2.88z" />
  ),

  close: (
    <path d="M22.86 20.88c.6.6.6 1.58 0 2.18-.6.6-1.58.6-2.17 0l-8.7-8.9-8.9 8.9c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.58 0-2.18L9.82 12l-8.7-8.88c-.6-.6-.6-1.58 0-2.18.6-.6 1.6-.6 2.2 0l8.7 8.9 8.9-8.9c.6-.6 1.56-.6 2.16 0 .6.6.6 1.58 0 2.18L14.17 12l8.7 8.88z" />
  ),
};

const Svg = styled.svg`
  fill: currentColor;
  width: ${props => (props.size ? `${props.size}px` : '24px')};
  height: ${props => (props.size ? `${props.size}px` : '24px')};
`;

export default function Icon({
  icon,
  width = 24,
  height = 24,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  ...props
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      aria-hidden="true"
      {...props}
    >
      {icons[icon]}
    </Svg>
  );
}

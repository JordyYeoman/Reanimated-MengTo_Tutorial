import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

export const NotificationIcon = (props) =>  (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="#4775f2"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)" fill="#333">
        <Path d="M20 10V8A8 8 0 004 8v2a4.441 4.441 0 01-1.547 3.193A4.183 4.183 0 001 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 00-1.453-2.807A4.44 4.44 0 0120 10zM9.145 21.9a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )


  export const CloseIcon = (props) =>  (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      width={45}
      height={45}
      {...props}
    >
      <Path
      fill={props.color}
      d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" 
      />
    </Svg>
    )


    export const SettingsIcon = (props) => (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
      width={props.size}
      height={props.size}
    >
      <Path
        d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
    )

    export const CardIcon = (props) => (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
      width={props.size}
      height={props.size}
    >
      <Rect
        x={48}
        y={96}
        width={416}
        height={320}
        rx={56}
        ry={56}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={60}
        d="M48 192h416M128 300h48v20h-48z"
      />
    </Svg>
    )

    export const CompassIcon = (props) => (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
      width={props.size}
      height={props.size}
    >
      <Path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <Path fill={props.color} d="M350.67 150.93l-117.2 46.88a64 64 0 00-35.66 35.66l-46.88 117.2a8 8 0 0010.4 10.4l117.2-46.88a64 64 0 0035.66-35.66l46.88-117.2a8 8 0 00-10.4-10.4zM256 280a24 24 0 1124-24 24 24 0 01-24 24z" />
    </Svg>
    )

    export const ExitIcon = (props) => (
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__ionicon"
      viewBox="0 0 512 512"
      {...props}
      style={{marginRight: -10}}
      width={props.size}
      height={props.size}
    >
      <Path
        d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
    )
    
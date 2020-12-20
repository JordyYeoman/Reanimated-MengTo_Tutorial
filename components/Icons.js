import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

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
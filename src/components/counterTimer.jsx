import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React from "react";

function UrgeWithPleasureComponent(props) {

  const oncompleHandler = ()=>{
    props.onComplete()
    return [false,4000]
  }

  return (
      <CountdownCircleTimer
        key={props.key}  
        isPlaying
        size={46}
        duration={20}
        strokeWidth={5}
        onComplete={oncompleHandler}
        colors={[
          ["#09AE17", 0.33],
          ["#F7B801", 0.33],
          ["#A30000", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
  );
}
export default UrgeWithPleasureComponent;

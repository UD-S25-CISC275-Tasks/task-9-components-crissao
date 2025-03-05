import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
* Here is a helper function you *must* use to "roll" your die.
* The function uses the builtin `random` function of the `Math`
* module (which returns a random decimal between 0 up until 1) in order
* to produce a random integer between 1 and 6 (inclusive).
*/
export function d6(): number {
   return 1 + Math.floor(Math.random() * 6);
}


export function TwoDice(): React.JSX.Element {
   const [left_die, setLeft] = useState<number>(1);
   const [right_die, setRight] = useState<number>(2);
   return (
       <span>
           <div>
               <Button
                   style={{ backgroundColor: "lime", color: "black" }}
                   onClick={() => {setLeft(d6())}}
               >
                   Roll Left
               </Button>
               <span data-testid="left-die">{left_die}</span>
           </div>
           <div>
               <Button
                   style={{ backgroundColor: "lime", color: "black" }}
                   onClick={() => {setRight(d6())}}
               >
                   Roll Right
               </Button>
               <span data-testid="right-die">{right_die}</span>
           </div>
           <div>
               {left_die === right_die
                   ? left_die === 1
                       ? "LOSE"
                       : "WIN"                 
                       : ""
               }
           </div>
       </span>
   );
}


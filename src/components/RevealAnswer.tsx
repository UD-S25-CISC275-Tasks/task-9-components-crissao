import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisibility] = useState<boolean>(false);
    return (
        <span>
            <Button
                style={{ backgroundColor: "orange", color: "black" }}
                onClick={() => {
                    setVisibility(!visible);
                }}
            >
                Reveal Answer
            </Button>
            {visible && <span> 42</span>}
        </span>
    );
}


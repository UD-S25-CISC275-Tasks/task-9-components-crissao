import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [in_progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    return (
        <span>
            <Button
                style={{ backgroundColor: "yellow", color: "black" }}
                onClick={startQuiz}
                disabled={in_progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                style={{ backgroundColor: "yellow", color: "black" }}
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!in_progress}
            >
                Stop Quiz
            </Button>
            <Button
                style={{ backgroundColor: "yellow", color: "black" }}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
                disabled={in_progress}
            >
                Mulligan
            </Button>
            <div>Attempts: {attempts}</div>
        </span>
    );
}

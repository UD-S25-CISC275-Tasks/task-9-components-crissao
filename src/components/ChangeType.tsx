import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    return (
        <span>
            <Button
                style={{ backgroundColor: "aqua", color: "black" }}
                onClick={() => {
                    setType(
                        type === "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    );
                }}
            >
                Change Type
            </Button>
            {type === "short_answer_question" && <div>Short Answer</div>}
            {type === "multiple_choice_question" && <div>Multiple Choice</div>}
        </span>
    );
}

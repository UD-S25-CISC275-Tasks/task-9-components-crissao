import React, { useState } from "react";
import { Button } from "react-bootstrap";

type HOLIDAY = "🎄" | "🐰" | "👻" | "🦫" | "🇺🇸";

const yearlyTransition: Record<HOLIDAY, HOLIDAY> = {
    "🦫": "🐰",
    "🐰": "🇺🇸",
    "🇺🇸": "👻",
    "👻": "🎄",
    "🎄": "🦫"
};

const alphabeticallyTransition: Record<HOLIDAY, HOLIDAY> = {
    "🎄": "🐰",
    "🐰": "🇺🇸",
    "🇺🇸": "🦫",
    "🦫": "👻",
    "👻": "🎄"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<HOLIDAY>("🎄");

    function cycleYearly(): void {
        const new_holiday = yearlyTransition[holiday];
        setHoliday(new_holiday);
    }

    function cycleAlphabetically(): void {
        const new_holiday = alphabeticallyTransition[holiday];
        setHoliday(new_holiday);
    }
    return (
        <span>
            <Button
                style={{ backgroundColor: "darkviolet", color: "black" }}
                onClick={cycleYearly}
            >
                Advance by Year
            </Button>
            <Button
                style={{ backgroundColor: "darkviolet", color: "black" }}
                onClick={cycleAlphabetically}
            >
                Advance by Alphabet
            </Button>
            <div>Holiday: {holiday}</div>
        </span>
    );
}

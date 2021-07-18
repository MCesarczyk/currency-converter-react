import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer, ClockElement } from "./styled";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <ClockContainer>
            <ClockElement>
                Dzisiaj jest
                {" "}
                {date.toLocaleString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                })}
            </ClockElement>
        </ClockContainer>
    );
};

export default Clock;
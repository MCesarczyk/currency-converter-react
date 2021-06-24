import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer, ClockElement } from "./styled";

const Clock = () => {

    const customDate = useCurrentDate();

    return (
        <ClockContainer>
            <ClockElement>
                Dzisiaj jest
                {" "}
                {customDate}
            </ClockElement>
        </ClockContainer>
    );
};

export default Clock;
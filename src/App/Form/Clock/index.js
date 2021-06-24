import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer, ClockElement } from "./styled";

const Clock = () => {

    const customDateWithTime = useCurrentDate();

    return (
        <ClockContainer>
            <ClockElement>
                {customDateWithTime}
            </ClockElement>
        </ClockContainer>
    );
};

export default Clock;
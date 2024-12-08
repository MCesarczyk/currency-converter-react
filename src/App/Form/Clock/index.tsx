import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer, ClockElement } from "./styled";
import { Languages } from "../../types";

interface Props {
  languages: Languages;
  language: string;
}

const Clock = ({ languages, language }: Props) => {
  const date = useCurrentDate();

  return (
    <ClockContainer>
      <ClockElement>
        {languages[language].clockLabel}{" "}
        {date.toLocaleString(language, {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </ClockElement>
    </ClockContainer>
  );
};

export default Clock;

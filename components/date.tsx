import { parseISO, format } from 'date-fns'
import styled from 'styled-components';

const Date = ({ dateString, size }: { dateString: string, size: string }) => {
  const date = parseISO(dateString)

  const sizeValue = size.toLowerCase() === "s"
    ? "0.8"
    : size.toLowerCase() === "l"
      ? "2.5"
      : "1";

  return <DateContainer dateTime={dateString} size={sizeValue}>{format(date, 'LLL d, yyyy')}</DateContainer>
}

const DateContainer = styled.time<{ size: string }>`
  font-size: ${({ size }) => size}rem;
`

export default Date;
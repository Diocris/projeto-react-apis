import { ButtonStyle } from "./ButtonStyle";
export default function Button({ event, text, color }) {
  return (
    <>
      <ButtonStyle color={color} onClick={event}>
        {text}
      </ButtonStyle>
    </>
  );
}

import { PokeballSpriteAnim } from "./PokeballSpriteStyle";

export default function PokeballSprite({ caught }) {
  return (
    <>
      <PokeballSpriteAnim caught={caught} />
    </>
  );
}

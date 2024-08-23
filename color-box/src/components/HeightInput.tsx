function HeightInput({
  height,
  setHeight,
}: {
  height: string;
  setHeight: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor="HeightInput">Digite a altura do bloco: </label>
      <input
        type="text"
        id="HeightInput"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </div>
  );
}
export default HeightInput;

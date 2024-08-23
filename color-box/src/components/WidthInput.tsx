function WidthInput({
  width,
  setWidth,
}: {
  width: string;
  setWidth: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor="WidthInput">Digite a largura do bloco: </label>
      <input
        type="text"
        id="WidthInput"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
    </div>
  );
}
export default WidthInput;

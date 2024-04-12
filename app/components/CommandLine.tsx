type IProps = {
  id: string;
};

export default function CommandLine(props: IProps) {
  return (
    <input
      className="bg-black text-white"
      type="text"
      autoFocus={true}
      autoComplete="off"
      spellCheck="false"
      autoCapitalize="off"
      {...props}
    />
  );
}

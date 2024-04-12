import { Component, useState } from "react";

type CommandHistory = {
  command: string;
  output: Component;
};

export default function useCommandsHistory() {
  const [history, setHistory] = useState<CommandHistory[]>([]);

  const push = () => { };
}

import { Form } from "@remix-run/react";
import Prompt from "~/components/Prompt";

export default function Shell() {
  return (
    <main>
      <Form>
        <label>
          <Prompt />
        </label>
        <input
          type="text"
          id="shell-input"
          autoFocus={true}
          autoComplete="off"
          spellCheck="false"
          autoCapitalize="off"
        />
      </Form>
    </main>
  );
}

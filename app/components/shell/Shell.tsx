import { Form } from "@remix-run/react";

export default function Shell() {
  return (
    <main>
      <Form>
        <label />
        <input
          type="text"
          id="shell-input"
          autoComplete="off"
          spellCheck="false"
          autoCapitalize="off"
        />
      </Form>
    </main>
  );
}

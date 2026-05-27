"use client";

import posthog from "posthog-js";
import { useState } from "react";
// Assets
import { CopyIcon } from "@/assets/icons";

// Styles
import styles from "./styles.module.scss";

interface CopyToClipboardProps {
  children: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const formElements = e.currentTarget
      .elements as HTMLFormControlsCollection & {
      clipboard: HTMLInputElement;
    };

    const text = formElements.clipboard.value;
    copyToClipboard(text);
    posthog.capture("copy_to_clipboard_clicked", { content: text });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles["copy-to-clipboard"]}
      data-alert={isCopied}
    >
      <button
        name="button"
        aria-label="Copy to clipboard"
        type="submit"
        className={styles["copy-to-clipboard__button"]}
      >
        <CopyIcon />
      </button>
      <input
        name="clipboard"
        type="text"
        value={children}
        className={styles["copy-to-clipboard__input"]}
        placeholder={children}
        disabled
        readOnly
      />
      {isCopied && (
        <p className={styles["copy-to-clipboard__alert-text"]}>Copied!</p>
      )}
    </form>
  );
};

export default CopyToClipboard;

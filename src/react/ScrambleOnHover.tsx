import { type ReactHTML, createElement, FC, useRef, useState } from "react";
import Scrambler from "@/Scrambler";

export const ScrambleOnHover: FC<{
  children: string;
  elm?: keyof ReactHTML;
  once?: boolean;
  delay?: number;
  props?: React.HTMLProps<HTMLElement>;
}> = ({ children, elm = "span", once, delay, props = {} }) => {
  const [text, setText] = useState(children);
  const { current: scrambler } = useRef(new Scrambler());
  const textRef = useRef<HTMLHeadingElement>(null);
  const isGoingOn = useRef(false);
  const called = useRef(false);
  const onMouseOver = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (called.current && once) return;
    if (isGoingOn.current) return;
    called.current = true;
    isGoingOn.current = true;

    if (delay) {
      setTimeout(() => {
        scrambler.scramble(text, {
          onIteration: setText,
          onFinished: () => {
            isGoingOn.current = false;
          },
        });
      }, delay);
    } else {
      scrambler.scramble(text, {
        onIteration: setText,
        onFinished: () => {
          isGoingOn.current = false;
        },
      });
    }
  };

  return createElement(elm, { ref: textRef, onMouseOver, ...props }, text);
};

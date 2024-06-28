import {
  type ReactHTML,
  createElement,
  FC,
  useRef,
  useState,
  useEffect,
} from "react";
import Scrambler from "@/Scrambler";

export const Scramble: FC<{
  children: string;
  elm?: keyof ReactHTML;
  props: React.HTMLProps<HTMLElement>;
  delay?: number;
}> = ({ children, elm = "span", delay, props = {} }) => {
  const [text, setText] = useState(children);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        new Scrambler().scramble(text, { onIteration: setText });
      }, delay);
    } else new Scrambler().scramble(text, { onIteration: setText });
  }, []);
  return createElement(elm, { ref: textRef, ...props }, text);
};

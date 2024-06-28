import {
  type ReactHTML,
  createElement,
  FC,
  useRef,
  useState,
  useEffect,
} from "react";
import Scrambler from "@/Scrambler";

export const ScrambleInView: FC<{
  children: string;
  observerOptions?: IntersectionObserverInit;
  once?: boolean;
  elm?: keyof ReactHTML;
  delay?: number;
  props?: React.HTMLProps<HTMLElement>;
}> = ({
  children,
  observerOptions = {},
  once = true,
  delay,
  elm = "span",
  props = {},
}) => {
  const [text, setText] = useState(children);
  let called = useRef(false);
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const scrambler = new Scrambler();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (once && called.current) {
            return observer.disconnect();
          }
          if (delay) {
            setTimeout(() => {
              scrambler.scramble(text, {
                onIteration: setText,
              });
            }, delay);
          } else {
            scrambler.scramble(text, {
              onIteration: setText,
            });
          }
          called.current = true;
        }
      });
    }, observerOptions);
    observer.observe(textRef.current!);
    return () => observer.disconnect();
  }, []);
  return createElement(elm, { ref: textRef, ...props }, text);
};

import { createSignal } from 'solid-js';
import './Counter.css';

const [count, setCount] = createSignal(0);
export default function Counter({ children }) {
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <>
      <div class="counter">
        <button class="bg-primary-300" onClick={subtract}>
          -
        </button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="counter-message">{children}</div>
    </>
  );
}

import { useState, memo, useCallback } from "react";

export function UseCallBackComponent() {
  //   const fun1 = function (a, b) {
  //     return a + b;
  //   };

  //   const fun2 = function (a, b) {
  //     return a + b;
  //   };

  //   console.log(fun1 == fun2);

  const [counter, setCounter] = useState(0);

  const someFunction = useCallback(() => {
    console.log("This function does something");
  }, []);

  return (
    <div>
      <h3>UseCallBack Component {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <ComponentA someFunction={someFunction} />
    </div>
  );
}

const ComponentA = memo((props) => {
  console.log("ComponentA rendered");
  ///
  return (
    <div>
      <h1>ComponentA</h1>
    </div>
  );
});

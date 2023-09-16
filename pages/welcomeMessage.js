import { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Hello Users</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Test app created to learn react.
      </Panel>
      <Panel
        title="Lifting state up"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}



export default function WelocmeMessage() {
  return (
<>
<Accordion></Accordion>
</>
  );
}
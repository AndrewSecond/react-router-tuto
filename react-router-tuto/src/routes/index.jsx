import CompoundComp from '../compoundComp.jsx';
import Accordion from '../Accordion.jsx';
import Hoc from '../Hoc.jsx';

export default function Index() {
  return (
    <>
      <p id="zero-state">
      <CompoundComp />
      <Hoc />
      <Accordion />
      This is a demo for React Router.
      <br />
      Check out{" "}
      <a href="https://reactrouter.com">
        the docs at reactrouter.com
      </a>
      .
    </p>
    </>
  );
}
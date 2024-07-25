import CompoundComp from '../compoundComp.jsx';

export default function Index() {
  return (
    <>
      <p id="zero-state">
      <CompoundComp />
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
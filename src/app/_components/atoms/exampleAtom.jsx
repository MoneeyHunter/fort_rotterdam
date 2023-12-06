import Image from "next/image";
/***
 * Atom components are the smallest components and should only contain
 * the most basic HTML elements. They should not contain any logic or
 * state. They should be used to build molecules and organisms.
 */
export default function ExampleAtom(props) {
    const size = props.size
    return <div className="px-10">ExampleAtom</div>;
  }
  
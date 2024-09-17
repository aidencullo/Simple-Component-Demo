import PerScholasLogo from "./PerScholasLogo.js";
import TableOfContents from "./TableOfContents.js";

const element = <h1>Hello, world!</h1>;

export default function App() {
  return <>
	   <PerScholasLogo />
	   <TableOfContents />
	   { element }
	 </>;
}

import PerScholasLogo from "./PerScholasLogo.js";
import TableOfContents from "./TableOfContents.js";
import HelloWorld from "./HelloWorld.js";
import StylizedComponent from "./StylizedComponent.js";
import Gallery from "./Gallery.js";
import Component from "./Component.js";

export default function App() {
  return <>
	   <PerScholasLogo />
	   <TableOfContents />
	   <HelloWorld />
	   <StylizedComponent />
	   <Gallery />
	   <Component key="good" />
	 </>;
}

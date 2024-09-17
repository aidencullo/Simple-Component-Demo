import Gallery from "./components/Gallery";

export default function App() {
  return (
    <>
      <Gallery />
      <p style={{ textAlign: "center" }}>
        Now all of our components are in their own files, and can be reused
        across other components and files using imports!
      </p>
    </>
  );
}

import Hello from "../components/hello";

export default function Home() {
  console.log('what am I');
  
  // Added to test error.tsx component
  //throw new Error('Not implemented');

  return (
    <>
      <h1 className="text-3xl">Welcome to next.js</h1>

      <Hello />
    </>
  );
}

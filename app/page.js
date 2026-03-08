import Button from "./components/Button";
export const metadata = {
  title: "Home",
  description: "Welcome to the home page",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Welcome to the Home Page</h1>
      <p className="mt-10">This is the main page of the application.</p>
      <Button>Go to About page</Button>
    </div>
  );
}

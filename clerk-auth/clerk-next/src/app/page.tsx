import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: '10px' }}>
      <h1>My App</h1>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}

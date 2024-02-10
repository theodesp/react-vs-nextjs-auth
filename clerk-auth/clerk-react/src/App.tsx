import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import './App.css';

function App() {
 
  return (
    <div className="card">
      <SignedOut>
        <SignInButton />
        <p>This content is public.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton signOutCallback={() => window.location.replace('/')} />
        <p>This content is private.</p>
      </SignedIn>
    </div>
  )
}
 
export default App
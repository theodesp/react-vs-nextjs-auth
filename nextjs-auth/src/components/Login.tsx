import { signIn } from "@/lib/auth";
export function Login({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <button {...props}>Login</button>
    </form>
  );
}

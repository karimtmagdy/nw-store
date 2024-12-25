import { Field, Form, Input, Label } from "@/components/ui/form";
import FieldMessage from "@/components/ui/form/FieldMessage";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

const AuthSignIn = () => {
  const nav = useNavigate();
  const { title }: { title: string } = useOutletContext();
  const { signIn ,user} = useAuth();
 console.log(user)
 console.log(user?.role)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if(!email || !password) return setError("All fields are required");
      if(signIn){
        signIn(email, password);

      }
      console.log("Logged in successfully!");
       
        nav("/");
 
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Login failed. Please try again.",
      );
    }
  };
  if (!user) {
    return <div>يرجى تسجيل الدخول لعرض الملف الشخصي</div>;
  }
  return (
    <Form className="space-y-4" onSubmit={handleSubmit}>
      <h1 className="text-center text-2xl">{title}</h1>

      <Field>
        <Label htmlFor="email" content="email" />
        <Input
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>
      <Field>
        <Label htmlFor="password" content="password" />
        <Input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>
      {error && <FieldMessage text={error} />}

      <button className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800/80 active:bg-zinc-950">
        Sign in{/* {loading ? "Signing in..." : "Sign Up"} */}
      </button>
      {/* {error && (
     <div className="text-red-500">
       <div>{error}</div>
     </div>
   )} */}
    </Form>
  );
};

export default AuthSignIn;

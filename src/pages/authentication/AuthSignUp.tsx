import { Field, Form, Input, Label } from "@/components/ui/form";
import { useOutletContext } from "react-router";
// import{useAuth}from '@/context/AuthContext'
 
const AuthSignUp = () => {
  // const {  } = useAuth();
  const { title }: { title: string } = useOutletContext();
  return (
    
    //  onSubmit={handleSubmit}
    <Form className="space-y-4">
      <h1 className="text-center text-2xl">{title}</h1>
      <Field>
        <Label htmlFor="username" content="username" />
        <Input
          type="text"
          id="username"
          placeholder="username"
          required
          //   onChange={handleChange}
        />
      </Field>
      <Field>
        <Label htmlFor="email" content="email" />
        <Input
          type="email"
          id="email"
          placeholder="email"
          required
          //   onChange={handleChange}
        />
      </Field>
      <Field>
        <Label htmlFor="password" content="password" />
        <Input
          type="password"
          id="password"
          placeholder="password"
          required
          //   onChange={handleChange}
        />
        {/* <FieldMessage text="Password must be at least 8 characters" /> */}
      </Field>
      <Field>
        <Label htmlFor="confirm_password" content="confirm password" />
        <Input
          type="password"
          id="confirm_password"
          placeholder="confirm password"
          required
          //   onChange={handleChange}
        />
      </Field>
      <button className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800/80 active:bg-zinc-950">
        Sign up{/* {loading ? "Signing in..." : "Sign Up"} */}
      </button>
      {/* {error && (
        <div className="text-red-500">
          <div>{error}</div>
        </div>
      )} */}
    </Form>
  );
};

export default AuthSignUp;

import { useContext, useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/context/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CommonForm from "@/components/common-form";
import { signUpFormControls, signInFormControls } from "@/config";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser
  } = useContext(AuthContext);

  function handleTabchange(value) {
    setActiveTab(value);
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  console.log("SignIn Data:", signInFormData);
  console.log("SignUp Data:", signUpFormData);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7" />
          <span className="font-semibold text-lg">LMS Learn</span>
        </Link>
      </header>

      {/* Auth Section */}
      <div className="flex flex-1 items-center justify-center bg-background px-4">
        <Tabs
          value={activeTab}
          onValueChange={handleTabchange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="mt-6">
            <Card className="space-y-4">
              <CardHeader>
                <CardTitle>Sign In to Your Account</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signInFormControls}
                  buttonText={"Sign In"}
                  formData={signInFormData}
                  setFormData={setSignInFormData}
                  isButtonDisabled={!checkIfSignInFormIsValid()}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
            <Card className="p-6 space-y-4">
              <CardHeader>
                <CardTitle>Create a New Account</CardTitle>
                <CardDescription>
                  Fill in the details to create your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CommonForm
                  formControls={signUpFormControls}
                  buttonText={"Sign Up"}
                  formData={signUpFormData}
                  setFormData={setSignUpFormData}
                  isButtonDisabled={!checkIfSignUpFormIsValid()}
                  handleSubmit={handleRegisterUser}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;

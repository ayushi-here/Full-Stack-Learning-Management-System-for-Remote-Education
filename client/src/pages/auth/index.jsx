import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import CommonForm from "@/components/common-form";
import { signUpFormControls, signInFormControls } from "@/config";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");

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
          onValueChange={setActiveTab}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="mt-6">
           <CommonForm
            formControls={signInFormControls}
            />
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
             <CommonForm
            formControls={signUpFormControls}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;

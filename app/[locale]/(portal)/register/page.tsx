import { AuthPage } from "../../../../components/portal/auth-page";

export default function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  return <AuthPage params={params} mode="register" />;
}

import { AuthPage } from "../../../../components/portal/auth-page";

export default function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  return <AuthPage params={params} mode="login" />;
}

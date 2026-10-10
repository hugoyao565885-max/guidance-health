import { AuthPage } from "../../../../components/portal/auth-page";

export default function ForgotPasswordPage({ params }: { params: Promise<{ locale: string }> }) {
  return <AuthPage params={params} mode="forgot-password" />;
}

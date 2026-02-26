import Header from "##/src/components/header/Header.tsx";
import AppRoutes from "##/src/routes/AppRoutes.tsx";
import JumpTo from "##/src/components/utilities/JumpTo.tsx";
import SocialFloat from "##/src/components/utilities/SideIcons.tsx";
import Footer from "##/src/components/footer/Footer.tsx";

export default function AppContainer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AppRoutes />
      <JumpTo />
      <SocialFloat />
      <Footer />
    </div>
  )
}

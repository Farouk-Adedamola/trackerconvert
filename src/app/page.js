import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="bg-black h-screen pt-8">
        <Layout />
      </div>
    </StyledEngineProvider>
  );
}

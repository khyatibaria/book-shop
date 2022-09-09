import NavBar from "../common/NavBar";
const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <NavBar sx={{ justifyContent: "space-between" }} />
      <div className="layout-container">{children}</div>
    </div>
  );
};
export default Layout;

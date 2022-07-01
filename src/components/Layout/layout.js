import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      This is layout.....
      {props.children}
    </div>
  );
};

export default Layout;

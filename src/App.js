import { Nav, Container, Spinner } from "react-bootstrap";
import FileTable from "./components/FileTable";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "./store/slices/files";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { isLoading, files = [] } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  return (
    <div>
      <header>
        <Nav variant="pills" activeKey="1" className="custom-nav">
          <Nav.Item>
            <h1 className="nav-title">React Test App</h1>
          </Nav.Item>
        </Nav>
      </header>
      <body>
        <Container className="mt-2">
          {isLoading ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : (
            <FileTable files={files} />
          )}
        </Container>
      </body>
    </div>
  );
}

export default App;
